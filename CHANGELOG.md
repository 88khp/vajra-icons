# Changelog

## [0.2.0] - 2026-08-06

### Added

- Jest + React Native Testing Library test suite (`wrapLucideIcon` prop passthrough, `displayName` derivation, barrel export coverage) — 100% statement/branch/function/line coverage.
- CI (`.github/workflows/ci.yml`): typecheck/lint/test/build on every push and PR, plus `scripts/verify-dist.sh` to confirm the built tarball is actually importable the way a real consumer would.
- Docusaurus docs site (`website/`) with a live-rendered grid of all 22 icons, install/usage instructions, and the `wrapLucideIcon` escape hatch documented.

### Changed

- `package.json` `exports` map: replaced the `"import"` condition with `"default"` so the package resolves correctly for both ESM and CJS consumers.

## 0.1.0

- Initial release: Lucide icon adapters satisfying Vajra UI's `TVajraIconComponent` contract.
- 22 curated icons: `AlertCircleIcon`, `AlertTriangleIcon`, `BellIcon`, `CheckIcon`,
  `CheckCircleIcon`, `ChevronDownIcon`, `ChevronLeftIcon`, `ChevronRightIcon`, `ChevronUpIcon`,
  `CircleIcon`, `HeartIcon`, `HomeIcon`, `InfoIcon`, `MinusIcon`, `MoonIcon`, `PlusIcon`,
  `SearchIcon`, `SettingsIcon`, `StarIcon`, `SunIcon`, `UserIcon`, `XIcon`.
- `wrapLucideIcon` helper exported for adapting any other Lucide icon.
