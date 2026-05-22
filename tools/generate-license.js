#!/usr/bin/env node

import fs from "fs";

const args = process.argv.slice(2);

const name = args[0] || "Your Name / Your Organization";
const year = new Date().getFullYear();

const license = `PowerShield License
Version 1.0, ${year}

Copyright (c) ${year} ${name}

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including the rights to use, copy, modify,
distribute, sublicense, and/or sell copies of the Software, subject to the
following conditions:

1. NOTICE
This notice must be included in all copies or substantial portions of the Software.

2. ATTRIBUTION
Attribution must be preserved as "PowerShield License (PSL 1.0)".

3. RESTRICTIONS
The Software may not be used for harmful purposes including malware, fraud,
human rights violations, or unlawful surveillance.

4. DISCLAIMER
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND.

5. LIABILITY
IN NO EVENT SHALL THE AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES, OR LIABILITY.

PowerShield License (PSL 1.0)
Free. Protected. Yours.
`;

fs.writeFileSync("LICENSE", license);

console.log("PSL 1.0 license generated successfully.");
