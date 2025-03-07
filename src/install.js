const { exec } = require("child_process");
const fs = require("fs");
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

/**
 * Copia un archivo seleccionado a la carpeta de destino.
 * Copies a selected file to the destination folder.
 * @param {string} fileName - Nombre del archivo a copiar / Name of the file to copy.
 * @param {string} destination - Carpeta de destino / Destination folder.
 */
function copyFile(fileName, destination) {
    const filePath = `node_modules/ospinajuanp-reset-css/${fileName}`;

    if (!fs.existsSync(filePath)) {
        console.error(`⚠️ The file ${fileName} does not exist.`);
        rl.close();
        return;
    }

    const command = `cp -r ${filePath} ${destination}`;
    exec(command, (error) => {
        if (error) {
            console.error(`❌ Error copying the file: ${error.message}`);
        } else {
            console.log(`✅ File copied: ${fileName} → ${destination}`);
        }
        rl.close();
    });
}

// Pregunta la carpeta de destino / Ask for the destination folder
rl.question("Where do you want to copy the files? (Press Enter to use 'src'): ", (destination) => {
    destination = destination.trim() || "src"; // Usa 'src' si el usuario presiona Enter / Use 'src' if the user presses Enter

    if (!fs.existsSync(destination)) {
        console.error("⚠️The specified path does not exist. Try again.");
        rl.close();
        return;
    }

    // Pregunta el tipo de archivo / Ask for the file type
    rl.question("Do you want to reset styles with CSS or SCSS? (Press Enter to use CSS): ", (fileType) => {
        const fileName = fileType.trim().toLowerCase() === "scss" ? "resetStyle.scss" : "resetStyle.css";
        copyFile(fileName, destination);
    });
});
