#!/usr/bin/env bash
# Cuts one release of every generated package from the current commit: sets package.json's version,
# commits it, and tags v<version> (the npm package) and gen/go/v<version> (the Go module, which lives in a
# subdirectory, so Go only finds tags prefixed with its path). Pushing is left to the caller.
set -euo pipefail
cd "$(dirname "$0")/.."
version="${1:?usage: scripts/release.sh <version>, e.g. 0.2.0}"
version="${version#v}"
[[ "$version" =~ ^[0-9]+\.[0-9]+\.[0-9]+$ ]] || { echo "not a semver version: $version" >&2; exit 1; }
[[ -z "$(git status --porcelain)" ]] || { echo "working tree is not clean" >&2; exit 1; }
for t in "v$version" "gen/go/v$version"; do
  ! git rev-parse -q --verify "refs/tags/$t" >/dev/null || { echo "tag $t already exists" >&2; exit 1; }
done

make check-gen

node -e '
  const fs = require("fs");
  const p = JSON.parse(fs.readFileSync("package.json", "utf8"));
  p.version = process.argv[1];
  fs.writeFileSync("package.json", JSON.stringify(p, null, 2) + "\n");
' "$version"
git add package.json
git diff --cached --quiet || git commit -m "Release v$version"
git tag -a "v$version" -m "v$version"
git tag -a "gen/go/v$version" -m "gen/go v$version"
echo "Tagged v$version and gen/go/v$version. Publish with: git push origin HEAD v$version gen/go/v$version"
