#!/usr/bin/env node
const fs = require("fs");
const path = require("path");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const TEMPLATES = {
  1: "resetStyle.css",
  2: "resetStyleDark.css",
  3: "resetStylePastel.css",
  4: "resetStyleDarkBluePastel.css",
  5: "resetStyleLightBluePastel.css",
  6: "resetStyleRetro.css"
};

/**
 * Copies a selected file to the destination folder using Node's fs module for cross-platform support.
 * @param {string} fileName - Name of the css file to copy.
 * @param {string} destination - Destination folder relative to the user's project root.
 */
function copyFile(fileName, destination) {
  // Determine where the package is located (works for global installs, npx, and local node_modules)
  // __dirname refers to the directory containing this script (usually the 'bin' inside the installed package)
  const sourceDir = path.resolve(__dirname, '..', 'dist');
  const sourcePath = path.join(sourceDir, fileName);
  
  // Resolve destination relative to where the command was executed (CWD)
  const targetDir = path.resolve(process.cwd(), destination);
  const targetPath = path.join(targetDir, fileName);

  if (!fs.existsSync(sourcePath)) {
    console.error(`⚠️ Error: The source file ${fileName} does not exist at ${sourcePath}.`);
    console.error(`It looks like the package was not built correctly. Please try reinstalling.`);
    rl.close();
    return;
  }

  // Ensure target directory exists
  if (!fs.existsSync(targetDir)) {
    try {
      fs.mkdirSync(targetDir, { recursive: true });
    } catch (err) {
      console.error(`❌ Error creating destination folder: ${err.message}`);
      rl.close();
      return;
    }
  }

  try {
    fs.copyFileSync(sourcePath, targetPath);
    console.log(`✅ File successfully copied: ${fileName} → ${destination}`);
  } catch (err) {
    console.error(`❌ Error copying the file: ${err.message}`);
  } finally {
    rl.close();
  }
}

// Prompt for the destination folder
rl.question("Where do you want to copy the reset file? (Press Enter to use 'src'): ", (destInput) => {
  const destination = destInput.trim() || "src";
  
  // Prompt for the template
  console.log("\nAvailable Templates:");
  console.log("1 - Simple (Default)");
  console.log("2 - Dark");
  console.log("3 - Pastel");
  console.log("4 - Dark Blue Pastel");
  console.log("5 - Light Blue Pastel");
  console.log("6 - Retro");
  
  rl.question("\nWhich template do you want to use? (Press Enter for 1 - Simple): ", (typeInput) => {
    const type = typeInput.trim() || "1";
    const fileName = TEMPLATES[type];
    
    if (!fileName) {
       console.error("⚠️ Invalid selection. Please try running the command again and select a number from 1 to 6.");
       rl.close();
       return;
    }
    
    copyFile(fileName, destination);
  });
});