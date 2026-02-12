#!/usr/bin/env bash
set -euo pipefail

VERSION_PATH="${1:-latest}"
PUBLISH_ROOT="${2:-gh-pages-dist}"
BASE_PATH=""

if [[ "$VERSION_PATH" != "latest" ]]; then
  BASE_PATH="/$VERSION_PATH"
fi

echo "Building version path: $VERSION_PATH"
BASE_PATH="$BASE_PATH" npm run build

rm -rf "$PUBLISH_ROOT/$VERSION_PATH"
mkdir -p "$PUBLISH_ROOT/$VERSION_PATH"
cp -R out/* "$PUBLISH_ROOT/$VERSION_PATH/"

if [[ "$VERSION_PATH" == "latest" ]]; then
  rm -rf "$PUBLISH_ROOT"/index.html "$PUBLISH_ROOT"/_next "$PUBLISH_ROOT"/about "$PUBLISH_ROOT"/book "$PUBLISH_ROOT"/catalog "$PUBLISH_ROOT"/contact "$PUBLISH_ROOT"/support "$PUBLISH_ROOT"/images 2>/dev/null || true
  cp -R out/* "$PUBLISH_ROOT/"
fi

echo "✅ Built static files into $PUBLISH_ROOT/$VERSION_PATH"
