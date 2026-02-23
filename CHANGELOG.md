# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added
- Created an SCSS architecture for better code maintainability and generation of CSS reset themes (`src/scss/`).
- Added a `build` script to automatically compile SCSS files into the `dist/` folder.
- Configured a cross-platform CLI installation script in Node.js instead of shell scripts.

### Changed
- The reset default behaviors are now updated to modern standards.
- Refactored `global.js` and removed `src/install.js`. The CLI tool now copies from `dist/` rather than `bin/` and uses `fs` natively.
- Cleaned up the `package.json` file for better npm registry visibility.
- Revamped `README.md` to include visual aids, badges, and better instructions.

### Security
- Updated `devDependencies` (specifically `sass`) resolving vulnerabilities reported by `npm audit`.

## [1.1.4] - 2024-xx-xx
### Added
- Initial project structure containing styles for default, dark, pastel, darkBluePastel, lightBluePastel, and retro.
- Interactive CLI prompt for selecting default themes via `exec` copy command.