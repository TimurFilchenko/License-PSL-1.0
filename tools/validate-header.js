import fs from "fs";
import path from "path";

const root = process.argv[2] || ".";

function checkFile(filePath) {
  const content = fs.readFileSync(filePath, "utf8");

  if (!content.includes("SPDX-License-Identifier: LicenseRef-PSL-1.0")) {
    console.log(`Missing SPDX header: ${filePath}`);
    return false;
  }

  return true;
}

function walk(dir) {
  const files = fs.readdirSync(dir);

  for (const file of files) {
    const fullPath = path.join(dir, file);

    if (fs.statSync(fullPath).isDirectory()) {
      walk(fullPath);
    } else if (fullPath.endsWith(".js") || fullPath.endsWith(".ts")) {
      checkFile(fullPath);
    }
  }
}

walk(root);
console.log("Validation completed.");
