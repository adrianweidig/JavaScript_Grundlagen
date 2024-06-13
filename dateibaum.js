const fs = require('fs');
const path = require('path');

// Arrays für zu ignorierende Ordner und Dateien
const ignoreDirs = [".idea", "node_modules", ".git", ".github"];  // Hier die Ordner eintragen, die ignoriert werden sollen
const ignoreFiles = ["LICENSE", "package.json", "package-lock.json", "README.md", "test.ps1", "JavaScript_Grundlagen.iml", "dateibaum.js", ".gitignore"];  // Hier die Dateien eintragen, die ignoriert werden sollen

// Funktion zum Einlesen des Verzeichnisses und Unterverzeichnisse
function readDirRecursive(dir, prefix = '') {
    const items = fs.readdirSync(dir);

    items.forEach((item, index) => {
        const fullPath = path.join(dir, item);
        const isLastItem = index === items.length - 1;
        const newPrefix = prefix + (isLastItem ? '└── ' : '├── ');

        // Überspringen, wenn der Ordner oder die Datei ignoriert werden soll
        if (ignoreDirs.includes(item) && fs.statSync(fullPath).isDirectory()) return;
        if (ignoreFiles.includes(item) && fs.statSync(fullPath).isFile()) return;

        console.log(prefix + newPrefix + item);

        if (fs.statSync(fullPath).isDirectory()) {
            readDirRecursive(fullPath, prefix + (isLastItem ? '    ' : '│   '));
        }
    });
}

// Startpunkt des Skripts
const startDir = '.';
console.log(startDir);
readDirRecursive(startDir);
