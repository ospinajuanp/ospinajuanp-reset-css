# Changelog
## [2.0.0] - 2026-02-23
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

## [1.1.4] - 2025-10-01
### Added
- Initial project structure containing styles for default, dark, pastel, darkBluePastel, lightBluePastel, and retro.
- Interactive CLI prompt for selecting default themes via `exec` copy command.

## [1.1.3] - 2025-10-01
### Added
- Added 2 new styles to the simple reset.

## [1.1.2] - 2025-03-14
### Added
- Added 3 new styles to the simple reset, now offering a choice among 4 templates: 1. simple, 2. modeDark, 3. modePastel, 4. modeRetro.
- Added a CLI prompt to ask for the template selection.

### Removed
- Removed the CSS vs SCSS option; only CSS is now supported.
- Removed the CLI prompt for choosing the file type (CSS or SCSS).

## [1.1.0] - 2025-03-06
### Changed
- Refactored for better structure: The logic for copying files is now modular and separated into a function.
- Default selections: If the user presses Enter, the script defaults to src as the destination and CSS as the file type.
- Improved validations: Ensures that paths and files exist before executing any operations.
- Clearer messaging: Provides better feedback for errors and successful actions.

## [1.0.7] - 2023-02-08
### Changed
- update documentation(README.md)

## [1.0.6] - 2023-02-03
### Changed
- update scrip exe move .css and .scss

## [1.0.5] - 2023-02-02
### Changed
- update build script exe auto install package Implementation
- update documentation(README.md)

## [1.0.4] - 2023-01-28
### Fixed
- Fix of the tracking to node_modules

### Added
- Adding CHANGELOG.md file