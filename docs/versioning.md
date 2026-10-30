# Versioning strategy

NOVAM Proto uses **versioned packages** so that services and clients can evolve without forced upgrades.

## Package versions

- Each API surface lives under a versioned package: `novam.common.v1`, `novam.entities.v1`, `novam.workflows.v1`, `novam.ai.v1`.
- The `go_package` option (and any other language-specific options) use the same version in the path, e.g. `.../novam/common/v1;commonv1`.

## When to stay in v1

- **Additive changes** only: new optional fields, new RPCs, new enum values (if consumers are required to ignore unknown values), new messages.
- No renames, no type changes, no removal of fields or RPCs.

## When to create v2

- **Breaking changes**: removing or renaming fields, changing types, removing RPCs, changing semantics of existing fields or RPCs.
- Create a new package (e.g. `novam.workflows.v2`) and define the new API there. Keep the old package until all consumers have migrated.

## Migrating consumers

- Prefer migrating one consumer at a time (e.g. Engine first, then Data, then Portal).
- Keep the previous version available until every consumer has moved to the new version.

## Tooling

- Use `buf breaking` (e.g. `make breaking`) to detect breaking changes against the main branch before merging.

## Release versions

Package versions (`v1`, `v2`) are about the wire contract. Release versions (`v0.3.0`, tagged by `make release`) are about the generated code a consumer installs, and one release covers every language.

- **Major** (after 1.0; **minor** while 0.x): anything that can break a consumer's build even when the wire contract holds: a changed plugin version or option in `buf.gen.yaml`, a raised minimum in `gen/go/go.mod` or `@bufbuild/protobuf`, a removed or renamed message, field or RPC.
- **Minor** (after 1.0; **patch** while 0.x): additive changes only: new messages, fields, RPCs, enum values.

Consumers pin an exact release and upgrade deliberately, so a generator change never reaches them unannounced.
