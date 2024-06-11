// error_handling.js: Fehlerbehandlung mit Promises, Promise-Fehlerketten.

// 1. Fehlerbehandlung mit Promises
//    - Fehler in Promises können mit der .catch()-Methode oder dem .then()-Block für Ablehnungen behandelt werden.
//    - Die .catch()-Methode fängt Fehler ab, die in den vorherigen Schritten der Promise-Kette aufgetreten sind.
//    - Beispiel:

function asyncTask() {
    return new Promise((resolve, reject) => {
        // Simulierte asynchrone Aufgabe
        setTimeout(() => {
            // Simulieren eines Fehlers
            const success = false;
            if (success) {
                resolve("Async-Aufgabe erfolgreich abgeschlossen");
            } else {
                reject(new Error("Fehler bei der Async-Aufgabe"));
            }
        }, 1000);
    });
}

asyncTask()
    .then(result => {
        console.log("Async-Aufgabe abgeschlossen:", result);
    })
    .catch(error => {
        console.error("Fehler bei der Async-Aufgabe:", error.message);
    });

// 2. Promise-Fehlerketten
//    - Promise-Fehlerketten ermöglichen es, mehrere Fehlerfälle in einer Sequenz zu behandeln.
//    - Jede .then()-Methode gibt ein neues Promise zurück, das den Wert des vorherigen Promise oder das Ergebnis der darin enthaltenen Funktion enthält.
//    - Beispiel:

function asyncTask1() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Ergebnis von asyncTask1");
        }, 1000);
    });
}

function asyncTask2(result) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(result + ", Ergebnis von asyncTask2");
        }, 1000);
    });
}

function asyncTask3(result) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulieren eines Fehlers
            const success = false;
            if (success) {
                resolve(result + ", Ergebnis von asyncTask3");
            } else {
                reject(new Error("Fehler bei asyncTask3"));
            }
        }, 1000);
    });
}

asyncTask1()
    .then(result1 => asyncTask2(result1))
    .then(result2 => asyncTask3(result2))
    .then(finalResult => {
        console.log("Endgültiges Ergebnis:", finalResult);
    })
    .catch(error => {
        console.error("Fehler:", error.message);
    });
