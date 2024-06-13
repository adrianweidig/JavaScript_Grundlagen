// Promisifizierung von Funktionen, Konvertieren von Callbacks in Promises.

// 1. Promisifizierung von Funktionen
//    - Promisifizierung ist der Prozess, eine Funktion zu erstellen, die ein Promise zurückgibt, anstatt einen Callback zu verwenden.
//    - Dies erleichtert das Arbeiten mit asynchronen Funktionen und Integration in eine Promise-Kette.
//    - Beispiel:

function promisifiedFunction() {
    return new Promise((resolve, reject) => {
        // Asynchrone Operation hier
        const operationSuccessful = true; // Beispielwert
        if (operationSuccessful) {
            resolve("Erfolg!");
        } else {
            reject(new Error("Fehler!"));
        }
    });
}

// 2. Konvertieren von Callbacks in Promises
//    - Eine Funktion mit einem Callback kann in eine Funktion umgewandelt werden, die ein Promise zurückgibt.
//    - Das Promise wird im Funktionskörper erstellt und in Abhängigkeit von den Callback-Ergebnissen aufgelöst oder abgelehnt.
//    - Beispiel:

function readFileAsync(filePath) {
    return new Promise((resolve, reject) => {
        readFile(filePath, (error, data) => {
            if (error) {
                reject(error);
            } else {
                resolve(data);
            }
        });
    });
}
