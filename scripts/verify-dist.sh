#!/usr/bin/env bash
# Verifies the built dist/ output is actually consumable the way a real
# consumer would consume it — packs the package (npm pack, same as what gets
# published), installs the tarball into a throwaway project, then both
# parses dist/index.js as CommonJS (catches module-format mismatches, e.g.
# ESM output declared under a CJS "main"/"exports" — a real bug this repo
# hit) and typechecks a real import against it.
#
# Doesn't require('@88khp/vajra-icons') directly: that pulls in the
# real react-native package, which ships Flow syntax plain Node can't parse
# outside Metro/Babel — unrelated to whether *our* dist/ output is valid CJS.
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
VERIFY_DIR="$(mktemp -d)"
trap 'rm -rf "$VERIFY_DIR"' EXIT

cd "$ROOT_DIR"
PACK_FILE="$(npm pack --silent --pack-destination "$VERIFY_DIR")"

cd "$VERIFY_DIR"
npm init -y >/dev/null
npm install --no-save typescript @types/react@19 react@19 react-native@0.84.1 \
  lucide-react-native@1 react-native-svg@15 "$PACK_FILE" >/dev/null

node -e "
const fs = require('fs');
const path = require('path');
const vm = require('vm');
const distIndex = path.join('node_modules', '@88khp', 'vajra-icons', 'dist', 'index.js');
const source = fs.readFileSync(distIndex, 'utf8');
// Wrapping in the CJS module wrapper and only *compiling* (not running) it
// confirms the file is valid CommonJS syntax without executing require()
// calls to lucide-react-native -> react-native (Flow syntax, needs Metro).
new vm.Script(require('module').wrap(source), { filename: distIndex });
console.log('dist/index.js parses as valid CommonJS.');
"

cat > tsconfig.json <<'EOF'
{
  "compilerOptions": {
    "target": "ES2017",
    "lib": ["ES2017"],
    "jsx": "react-native",
    "strict": true,
    "moduleResolution": "bundler",
    "esModuleInterop": true,
    "skipLibCheck": true,
    "noEmit": true
  },
  "include": ["verify.tsx"]
}
EOF

cat > verify.tsx <<'EOF'
import { BellIcon, wrapLucideIcon, TVajraIconComponent } from '@88khp/vajra-icons';

const icon: TVajraIconComponent = BellIcon;
const wrapped = wrapLucideIcon;

export const Verify = { icon, wrapped };
EOF

npx tsc --noEmit

echo "dist/ verified importable and typed — BellIcon, wrapLucideIcon, TVajraIconComponent all resolve correctly."
