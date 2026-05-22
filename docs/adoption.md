# Adoption Guide

This document explains how to adopt PowerShield License (PSL 1.0) in your project.

## Basic Usage

Add the following file to your repository root:

LICENSE (containing the full PSL 1.0 text)

## Source Files

Include SPDX header in source files:

SPDX-License-Identifier: LicenseRef-PSL-1.0

## Package Managers

### npm

```json
{
  "license": "LicenseRef-PSL-1.0"
}

Rust (Cargo)

license = "LicenseRef-PSL-1.0"

Python (pyproject.toml)

[project]
license = { text = "PowerShield License 1.0" }

Recommendations

- Always include the full LICENSE file.
- Avoid modifying the license text.
- Use consistent SPDX identifier across the project.
