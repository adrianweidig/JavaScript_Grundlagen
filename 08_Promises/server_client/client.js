// Funktion zum Abrufen von Daten von einem Endpunkt
async function fetchData(url) {
    // Verwende fetch, um Daten von der angegebenen URL abzurufen und warte, bis der Abruf abgeschlossen ist
    const response = await fetch(url);

    // Überprüfe, ob die Netzwerkantwort erfolgreich war
    if (!response.ok) {
        // Wirf einen Fehler, wenn die Antwort nicht erfolgreich war
        throw new Error('Netzwerkantwort war nicht ok');
    }

    // Konvertiere die Antwort in JSON und warte, bis die Konvertierung abgeschlossen ist
    const data = await response.json();

    // Gib die abgerufenen Daten zurück
    return data;
}

// Funktion zur sequentiellen Verwendung von async/await
async function fetchSequentialData() {
    try {
        // Erfasse den Startzeitpunkt
        const startTime = new Date();
        // Gib den Startzeitpunkt aus
        logOutput(`Startzeit (Sequenzielle Daten): ${startTime.toLocaleTimeString()}`);

        // Rufe Daten von Endpunkt 1 ab und warte, bis der Abruf abgeschlossen ist
        const data1 = await fetchData('http://localhost:3000/data1');
        // Gib die erhaltenen Daten 1 mit Zeitstempel aus
        logOutput(`Erhaltene Daten 1: ${JSON.stringify(data1)} (Zeit: ${new Date().toLocaleTimeString()})`);

        // Rufe Daten von Endpunkt 2 ab und warte, bis der Abruf abgeschlossen ist
        const data2 = await fetchData('http://localhost:3000/data2');
        // Gib die erhaltenen Daten 2 mit Zeitstempel aus
        logOutput(`Erhaltene Daten 2: ${JSON.stringify(data2)} (Zeit: ${new Date().toLocaleTimeString()})`);

        // Erfasse den Endzeitpunkt
        const endTime = new Date();
        // Gib den Endzeitpunkt aus
        logOutput(`Endzeit (Sequenzielle Daten): ${endTime.toLocaleTimeString()}`);
    } catch (error) {
        // Gib den Fehler beim Abrufen der Daten aus
        logOutput(`Fehler beim Abrufen der Daten: ${error.message}`);
    }
}

// Funktion zur parallelen Verwendung von async/await
async function fetchParallelData() {
    try {
        // Erfasse den Startzeitpunkt
        const startTime = new Date();
        // Gib den Startzeitpunkt aus
        logOutput(`Startzeit (Parallele Daten): ${startTime.toLocaleTimeString()}`);

        // Rufe Daten von beiden Endpunkten parallel ab und warte, bis beide Abrufe abgeschlossen sind
        const [data1, data2] = await Promise.all([
            fetchData('http://localhost:3000/data1'),
            fetchData('http://localhost:3000/data2')
        ]);

        // Gib die parallel erhaltenen Daten 1 mit Zeitstempel aus
        logOutput(`Parallele Daten 1: ${JSON.stringify(data1)} (Zeit: ${new Date().toLocaleTimeString()})`);
        // Gib die parallel erhaltenen Daten 2 mit Zeitstempel aus
        logOutput(`Parallele Daten 2: ${JSON.stringify(data2)} (Zeit: ${new Date().toLocaleTimeString()})`);

        // Erfasse den Endzeitpunkt
        const endTime = new Date();
        // Gib den Endzeitpunkt aus
        logOutput(`Endzeit  (Parallele Daten): ${endTime.toLocaleTimeString()}`);
    } catch (error) {
        // Gib den Fehler beim Abrufen der Daten aus
        logOutput(`Fehler beim Abrufen der Daten: ${error.message}`);
    }
}

// Funktion zur Ausgabe im HTML-Dokument
function logOutput(message) {
    // Finde das HTML-Element mit der ID 'output'
    const output = document.getElementById('output');
    // Füge die Nachricht zum Inhalt des 'output'-Elements hinzu
    output.textContent += message + '\n';
}

// Event Listener für den Button 'fetchDataButton' zum Abrufen der Daten in sequentieller Reihenfolge
document.getElementById('fetchDataButton').addEventListener('click', fetchSequentialData);

// Event Listener für den Button 'fetchParallelButton' zum Abrufen der Daten in paralleler Reihenfolge
document.getElementById('fetchParallelButton').addEventListener('click', fetchParallelData);
