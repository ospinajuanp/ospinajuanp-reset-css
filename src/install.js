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
    const filePath = `node_modules/ospinajuanp-reset-css/bin/${fileName}`;

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
    // rl.question("Do you want to reset styles with CSS or SCSS? (Press Enter to use CSS): ", (Type) => {
    //     const TypeFile = Type.trim().toLowerCase() === "scss" ? "scss" : "css";
        
        // Pregunta el tipo de style para el archivo / Ask the type of style for the file
        rl.question("Do you want to reset styles 1(simple) or 2(dark) or 3(pastel) or 4(darkBluePastel) or 5(LightBluePastel) or 6(retro)? (Press Enter to use the default template: simple): ", (fileType) => {
            const type = fileType.trim().toLowerCase()
            const fileName = type === "1" ? "resetStyle.css" : type === "2" ? "resetStyleDark.css" : type === "3" ? "resetStylePastel.css" : type === "4" ? "resetStyleDarkBluePastel.css" : type === "5" ? "resetStyleLightBluePastel.css" : type === "6" ? "resetStyleRetro.css" : "resetStyle.css";
            
            copyFile(fileName, destination);
        });
    // });
});
