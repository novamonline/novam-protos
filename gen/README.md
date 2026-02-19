# Generated code

**Do not edit these files by hand.** They are produced by `buf generate` from the `proto/` definitions.

| Directory | Consumer    | Purpose                          |
|-----------|-------------|-----------------------------------|
| `go/`     | NOVAM Engine | Go gRPC servers and message types |
| `ts/`     | NOVAM Portal | TypeScript types and clients      |
| `node/`   | NOVAM Data   | Node gRPC client stubs            |

After changing any `.proto` file, run from the repo root:

```bash
make generate
```

Then commit the updated files under `gen/`.
