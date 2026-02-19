#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")/.."
buf format -w
buf lint
buf generate
