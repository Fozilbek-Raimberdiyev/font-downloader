// bin/index.js

// #!/usr/bin/env node

const { program } = require('../lib/cli'); // Ensure this matches your export in cli.js

program.parse(process.argv);
