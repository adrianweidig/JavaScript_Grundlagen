// Mock-Funktion für fetchData
function fetchData() {
    // Hier könnte die tatsächliche Implementierung stehen, die Daten von einer API abruft
    return new Promise((resolve, reject) => {
        // Hier wird ein Dummy-Ergebnis zurückgegeben
        setTimeout(() => {
            const result = "Mock-Daten";
            resolve(result);
        }, 1000); // Simuliert eine asynchrone Operation
    });
}

// Dummy-Funktionen für processData und saveData
function processData(data) {
    // Hier könnte die tatsächliche Verarbeitung der Daten erfolgen
    return data.toUpperCase();
}

function saveData(data) {
    // Hier könnte die tatsächliche Speicherung der Daten erfolgen
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Daten erfolgreich gespeichert:", data);
            resolve();
        }, 1000); // Simuliert eine asynchrone Operation
    });
}

// 1. Verwendung von Promises mit then() und catch()
//    - then() wird verwendet, um den Erfolgsfall eines Promise zu behandeln.
//    - catch() wird verwendet, um den Fehlerfall eines Promise zu behandeln.
//    - Beispiel:
fetchData()
    .then(result => {
        console.log("Daten geladen:", result);
    })
    .catch(error => {
        console.error("Fehler beim Laden der Daten:", error.message);
    });

// 2. Promise-Chaining
//    - Promise-Chaining ermöglicht das Verknüpfen von mehreren asynchronen Operationen in einer Sequenz.
//    - Jedes then() gibt ein neues Promise zurück, das den Wert des vorherigen then() oder das Ergebnis der darin enthaltenen Funktion enthält.
//    - Beispiel:
fetchData()
    .then(result => processData(result))
    .then(processedData => saveData(processedData))
    .then(() => console.log("Daten erfolgreich gespeichert"))
    .catch(error => console.error("Fehler:", error.message));
