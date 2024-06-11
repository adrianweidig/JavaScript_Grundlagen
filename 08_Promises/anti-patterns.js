// anti-patterns.js: Vermeidung von Promise-Anti-Patterns und bewährte Praktiken.

// 1. Promise-Anti-Patterns
//    - Vermeiden Sie das Verketten unnötiger Promise.then()-Aufrufe, wenn keine sequentielle Abhängigkeit besteht.
//    - Vermeiden Sie das Erstellen von neuen Promise-Instanzen innerhalb einer Promise-Kette, wenn nicht unbedingt erforderlich.
//    - Beispiel:

Promise.resolve()
    .then(() => {
        return new Promise((resolve, reject) => {
            // Unnötiges Erstellen einer neuen Promise-Instanz
            resolve("Daten");
        });
    })
    .then(result => {
        console.log(result);
    });

// 2. Bewährte Praktiken
//    - Verwenden Sie async/await, um den Code lesbarer zu machen und eine syntaxähnliche Synchronität zu erreichen.
//    - Verwenden Sie try/catch-Blöcke, um Fehler in asynchronen Funktionen zu behandeln.
//    - Beispiel:

async function fetchData() {
    try {
        const data = await fetchDataFromServer();
        processData(data);
        return true;
    } catch (error) {
        console.error("Fehler beim Abrufen der Daten:", error.message);
        return false;
    }
}
