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
