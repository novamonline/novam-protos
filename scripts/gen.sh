#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")/.."
buf format -w
buf lint
# Cleared first so a removed .proto file takes its generated code with it; gen/go keeps its go.mod.
rm -rf gen/go/novam gen/ts
buf generate
(cd gen/go && go mod tidy)
