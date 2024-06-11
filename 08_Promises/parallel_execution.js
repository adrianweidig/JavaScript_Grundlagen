// parallel_execution.js: Parallele Ausführung von Promises mit Promise.all() und Promise.race().

// 1. Parallele Ausführung mit Promise.all()
//    - Promise.all() akzeptiert ein Array von Promises und gibt ein Promise zurück, das erfüllt wird, wenn alle Promises im Array erfüllt werden, oder abgelehnt wird, wenn mindestens eines abgelehnt wird.
//    - Dies ermöglicht die parallele Ausführung mehrerer asynchroner Operationen.
//    - Beispiel:

const fetchData1 = () => {
    return new Promise((resolve, reject) => {
        // Hier die asynchrone Operation ausführen, die die Daten lädt
        // Beispiel:
        setTimeout(() => {
            resolve("Daten von fetchData1");
        }, 1000); // Beispiel: Eine Verzögerung von 1 Sekunde
    });
};

const fetchData2 = () => {
    return new Promise((resolve, reject) => {
        // Hier die asynchrone Operation ausführen, die die Daten lädt
        // Beispiel:
        setTimeout(() => {
            resolve("Daten von fetchData2");
        }, 1500); // Beispiel: Eine Verzögerung von 1,5 Sekunden
    });
};

const fetchData3 = () => {
    return new Promise((resolve, reject) => {
        // Hier die asynchrone Operation ausführen, die die Daten lädt
        // Beispiel:
        setTimeout(() => {
            resolve("Daten von fetchData3");
        }, 2000); // Beispiel: Eine Verzögerung von 2 Sekunden
    });
};

const promise1 = fetchData1();
const promise2 = fetchData2();
const promise3 = fetchData3();

Promise.all([promise1, promise2, promise3])
    .then(results => {
        console.log("Alle Daten erfolgreich geladen:", results);
    })
    .catch(error => {
        console.error("Fehler beim Laden der Daten:", error.message);
    });

// 2. Wettlauf mit Promise.race()
//    - Promise.race() akzeptiert ein Array von Promises und gibt das erste erfüllte oder abgelehnte Promise zurück.
//    - Dies ermöglicht es, auf das schnellste eintreffende Ergebnis zu reagieren.
//    - Beispiel:

const racePromise1 = fetchData1();
const racePromise2 = fetchData2();

Promise.race([racePromise1, racePromise2])
    .then(result => {
        console.log("Schnellstes Ergebnis:", result);
    })
    .catch(error => {
        console.error("Fehler:", error.message);
    });
