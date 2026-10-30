# NOVAM Protos

Canonical contract repository for the NOVAM platform. Single source of truth for the protobuf definitions, and for the code generated from them, shared across:

- **NOVAM Engine** — Go gRPC servers and clients
- **NOVAM Data** — Node gRPC servers and clients
- **NOVAM Portal** — TypeScript types derived from shared entities

## Design principles

- **Versioned packages** from day one (`v1`, `v2`, etc.)
- **Shared entities** are separate from service RPC definitions
- **Generated code is committed** and released with the protos, so a consumer pins one version of both, and a change of generator shows up as a reviewed diff rather than in a consumer's build
- **Consumers install a release**; none of them generate code, copy `.proto` files, or need this repo checked out beside them

## Repository layout

```
proto/novam/
  common/v1/        # TenantContext, RequestMetadata, errors, pagination
  entities/v1/      # Workflow, WorkflowRun, AI messages
  workflows/v1/     # WorkflowsService RPCs
  ai/v1/            # AI service RPCs
  ...
gen/
  go/               # Go module github.com/novamonline/novam-protos/gen/go
  ts/               # protobuf-es output, shipped in the npm package
package.json        # npm package @novamonline/novam-protos (gen/ts and proto/)
scripts/            # gen.sh, release.sh
docs/               # Versioning
```

**Do not edit anything under `gen/` by hand.**

## Code generation: Buf only

Generation uses [Buf](https://buf.build/docs/installation) with remote plugins on buf.build (see `buf.gen.yaml`); protoc and local plugins are not needed. Go is needed for `go mod tidy` on `gen/go`.

```bash
make gen
```

This formats and lints `proto/`, clears and regenerates `gen/go` and `gen/ts`, and tidies `gen/go/go.mod`. Commit `gen/` with the `.proto` change that produced it; CI (`make check-gen`) fails when they differ.

| Plugin | Output |
|---|---|
| `buf.build/protocolbuffers/go` | `gen/go` messages |
| `buf.build/grpc/go` | `gen/go` gRPC stubs |
| `buf.build/bufbuild/es` | `gen/ts` (ES modules with `.d.ts`) |

Plugin versions are pinned in `buf.gen.yaml`. Changing one changes the generated code consumers get, so it ships as its own release.

`gen/go/go.mod` requires the lowest grpc and protobuf versions the generated code works with, so pinning a release never forces a consumer to upgrade them.

## Lint and breaking changes

```bash
make lint       # buf lint
make breaking   # buf breaking (against main)
```

## Releasing

```bash
make release VERSION=0.2.0
git push origin HEAD v0.2.0 gen/go/v0.2.0
```

One version covers every language. `make release` checks that `gen/` is current, sets `package.json`'s version, and tags:

- `v0.2.0`, which the Release workflow publishes as `@novamonline/novam-protos@0.2.0` to GitHub Packages
- `gen/go/v0.2.0`, the Go module's version (Go only finds tags prefixed with the module's directory)

See [docs/versioning.md](docs/versioning.md) for what makes a release major, minor or patch.

## Consuming a release

This repository is private, so every consumer needs a GitHub token that can read it.

### Go (novam-engine)

```bash
go env -w GOPRIVATE=github.com/novamonline/*
go get github.com/novamonline/novam-protos/gen/go@v0.2.0
```

Go fetches the module from this repository with git, so git needs credentials for github.com: an SSH key with `git config --global url."git@github.com:".insteadOf "https://github.com/"`, or a token in `~/.netrc`. CI and Docker builds pass a token (contents: read on this repository) as a secret.

To build against an unreleased change, use a `go.work` beside the consumer (`go work init . ../novam-protos/gen/go`). Never commit it, and never add a `replace` to `go.mod`.

### TypeScript and Node (novam-data, portal)

`.yarnrc.yml`:

```yaml
npmScopes:
  novamonline:
    npmRegistryServer: https://npm.pkg.github.com
    npmAuthToken: ${NPM_GITHUB_TOKEN:-}
```

```bash
yarn add @novamonline/novam-protos@0.2.0
```

`NPM_GITHUB_TOKEN` is a classic personal access token with `read:packages`; in a GitHub Actions workflow of a repository the package grants access to (package settings → Manage Actions access), `GITHUB_TOKEN` works too.

```ts
import { create } from '@bufbuild/protobuf';
import { WorkflowSchema } from '@novamonline/novam-protos/novam/entities/v1/workflow_pb.js';
```

The package also ships the `.proto` files, for loaders that read them at runtime (`@grpc/proto-loader`):

```ts
const protosDir = path.join(path.dirname(require.resolve('@novamonline/novam-protos/package.json')), 'proto');
```
