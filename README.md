# NOVAM Protos

Canonical contract repository for the NOVAM platform. Single source of truth for protobuf definitions shared across:

- **NOVAM Engine** — Go gRPC servers
- **NOVAM Data** — Node gRPC clients and HTTP mapping layer
- **NOVAM Portal** — TypeScript types derived from shared entities

This repo defines shared platform entities, common primitives and metadata models, and service RPC contracts used internally.

## Design principles

- **Versioned packages** from day one (`v1`, `v2`, etc.)
- **Shared entities** are separate from service RPC definitions
- **Stable shared models** for UI and service reuse
- **Service APIs** can evolve independently
- **UI** primarily consumes shared entities; **services** consume RPC contracts

## Repository layout

```
proto/novam/
  common/v1/      # TenantContext, RequestMetadata, errors, pagination
  entities/v1/    # Workflow, WorkflowRun, AI messages
  workflows/v1/   # WorkflowsService RPCs
  ai/v1/          # AI service RPCs
gen/
  go/             # Generated Go (Engine)
  ts/             # Generated TypeScript (Portal types)
  node/           # Generated Node gRPC stubs (Data)
scripts/         # Generation helper
docs/            # Versioning and usage
```

See [gen/README.md](gen/README.md) for which consumer uses which generated output. **Do not edit generated files by hand.**

## Requirements

- [Buf](https://buf.build/docs/installation) CLI (no protoc or local codegen plugins required)

## Code generation: Buf and buf.build only

This repo uses **Buf** for all code generation. Plugins run as **remote plugins on buf.build** (see `buf.gen.yaml`); you do not need to install protoc or any language-specific codegen tools. Run from the repo root:

```bash
make generate
```

Or run the script directly:

```bash
./scripts/gen.sh
```

This runs `buf format -w`, `buf lint`, and `buf generate`, writing Go, TypeScript, and Node outputs under `gen/`. Generation uses:

- `buf.build/protocolbuffers/go` → `gen/go`
- `buf.build/bufbuild/es` → `gen/ts`
- `buf.build/grpc/node` → `gen/node`

## Lint and breaking changes

```bash
make lint       # buf lint
make breaking   # buf breaking (against main)
```

CI (`.github/workflows/buf-ci.yaml`) runs Buf build, lint, format, and breaking on push and pull requests. Optionally, set a `BUF_TOKEN` secret to push the module to the [Buf Schema Registry](https://buf.build) (BSR) as `buf.build/novamonline/novam-protos`.

## Versioning

Additive changes stay in `v1`. Breaking changes get a new package version (e.g. `v2`). Older versions are kept until all consumers migrate. See [docs/versioning.md](docs/versioning.md).

## Consumer integration

- **Engine**: `go get github.com/novamonline/novam-protos/gen/go` (or equivalent) and implement workflows and AI gRPC servers.
- **Data**: Depend on generated Node/TS stubs; run gRPC client to Engine; optional HTTP mapping for Portal.
- **Portal**: Consume shared entity types from `gen/ts` for consistency.
