// Importiere das Express-Modul, das zum Erstellen des Servers verwendet wird
const express = require('express');

// Importiere das CORS-Modul, das Cross-Origin Resource Sharing (CORS) aktiviert
const cors = require('cors');

// Erstelle eine Express-Anwendung
const app = express();

// Definiere den Port, auf dem der Server laufen wird
const port = 3000;

// Verwende das CORS-Middleware in der Express-Anwendung, um CORS für alle Routen zu aktivieren
app.use(cors()); // Aktiviert CORS für alle Routen

// Mock-Daten für die Endpunkte
const data1 = { id: 1, name: 'Data 1' }; // Daten für Endpunkt 1
const data2 = { id: 2, name: 'Data 2' }; // Daten für Endpunkt 2

// Definiere die Route für den ersten Endpunkt
app.get('/data1', (req, res) => {
    // Simuliere eine Verzögerung von 1 Sekunde bevor die Antwort gesendet wird
    setTimeout(() => {
        // Sende die Daten als JSON-Antwort
        res.json(data1);
    }, 1000); // Simuliere eine Verzögerung von 1 Sekunde
});

// Definiere die Route für den zweiten Endpunkt
app.get('/data2', (req, res) => {
    // Simuliere eine Verzögerung von 2 Sekunden bevor die Antwort gesendet wird
    setTimeout(() => {
        // Sende die Daten als JSON-Antwort
        res.json(data2);
    }, 2000); // Simuliere eine Verzögerung von 2 Sekunden
});

// Starte den Server und höre auf dem definierten Port
app.listen(port, () => {
    // Gib eine Nachricht in der Konsole aus, wenn der Server erfolgreich gestartet wurde
    console.log(`Server läuft auf http://localhost:${port}`);
});
