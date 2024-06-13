// Grundlagen von Promises, Erstellen von Promises, Promise-Status.

// 1. Was sind Promises?
//    - Promises repräsentieren den Abschluss einer asynchronen Operation und ihren daraus resultierenden Wert.
//    - Sie sind nützlich für Operationen wie Daten laden, Netzwerkanforderungen und Dateizugriffe.
//    - Beispiel:

const promise = new Promise((resolve, reject) => {
    // Asynchrone Operation hier (z. B. Daten laden)
    const dataLoaded = true; // Beispielwert

    if (dataLoaded) {
        resolve("Daten erfolgreich geladen");
    } else {
        reject(new Error("Fehler beim Laden der Daten"));
    }
});

// 2. Erstellen von Promises
//    - Promises werden typischerweise durch Aufrufen einer Funktion erstellt, die eine asynchrone Operation ausführt.
//    - Die Funktion erhält zwei Parameter: resolve für den erfolgreichen Abschluss und reject für einen Fehler.
//    - Beispiel:

function fetchData() {
    return new Promise((resolve, reject) => {
        // Asynchrone Operation hier (z. B. Daten laden)
        const dataLoaded = true; // Beispielwert

        if (dataLoaded) {
            resolve("Daten erfolgreich geladen");
        } else {
            reject(new Error("Fehler beim Laden der Daten"));
        }
    });
}

// 3. Promise-Status
//    - Promises haben drei mögliche Zustände: pending (ausstehend), fulfilled (erfüllt) und rejected (abgelehnt).
//    - Der Status ändert sich, wenn die asynchrone Operation abgeschlossen ist.
//    - Beispiel:

promise.then(
    result => console.log("Erfolgreich:", result),
    error => console.error("Fehler:", error.message)
);
