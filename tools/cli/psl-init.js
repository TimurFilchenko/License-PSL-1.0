#!/usr/bin/env node

import fs from "fs";

const projectName = process.argv[2] || "my-project";

const licenseHeader = `/*
 * PowerShield License (PSL 1.0)
 *
 * SPDX-License-Identifier: LicenseRef-PSL-1.0
 *
 * Project: ${projectName}
 */

`;

if (!fs.existsSync("./src")) {
  fs.mkdirSync("./src");
}

fs.writeFileSync("./LICENSE", "PowerShield License (PSL 1.0)");
fs.writeFileSync("./src/license-header.txt", licenseHeader);

console.log("PSL project initialized.");
