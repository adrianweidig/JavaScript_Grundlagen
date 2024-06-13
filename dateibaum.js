const fs = require('fs');
const path = require('path');

// Arrays für zu ignorierende Ordner und Dateien
const ignoreDirs = [".idea", "node_modules", ".git", ".github"];  // Hier die Ordner eintragen, die ignoriert werden sollen
const ignoreFiles = ["LICENSE", "package.json", "package-lock.json", "README.md", "test.ps1", "JavaScript_Grundlagen.iml", "dateibaum.js", ".gitignore"];  // Hier die Dateien eintragen, die ignoriert werden sollen

// ANSI Escape Codes für Farben und Formatierungen
const Reset = "\x1b[0m";
const FgGreen = "\x1b[32m";  // Grün für Ordner
const FgYellow = "\x1b[33m"; // Gelb für Dateien

// Funktion zum Einlesen des Verzeichnisses und Unterverzeichnisse (alphabetisch sortiert)
function readDirRecursive(dir, prefix = '') {
    const items = fs.readdirSync(dir).sort((a, b) => a.localeCompare(b, 'de', { sensitivity: 'base' }));

    items.forEach((item, index) => {
        const fullPath = path.join(dir, item);
        const isLastItem = index === items.length - 1;

        // Überspringen, wenn der Ordner oder die Datei ignoriert werden soll
        if (ignoreDirs.includes(item) && fs.statSync(fullPath).isDirectory()) return;
        if (ignoreFiles.includes(item) && fs.statSync(fullPath).isFile()) return;

        if (fs.statSync(fullPath).isDirectory()) {
            // Ausgabe für Ordner mit farbigem Namen
            console.log(prefix + (isLastItem ? '└── ' : '├── ') + FgGreen + item + Reset);
            // Rekursiver Aufruf für Unterverzeichnisse
            readDirRecursive(fullPath, prefix + (isLastItem ? '    ' : '│   '));
        } else {
            // Ausgabe für Dateien mit farbigem Namen
            console.log(prefix + (isLastItem ? '└── ' : '├── ') + FgYellow + item + Reset);
        }
    });

    // Überprüfen, ob das Verzeichnis leer ist und ausgeben, wenn ja
    if (items.length === 0) {
        console.log(prefix + '└── (empty)');
    }
}

// Startpunkt des Skripts
const startDir = '.';
console.log(startDir);
readDirRecursive(startDir);
