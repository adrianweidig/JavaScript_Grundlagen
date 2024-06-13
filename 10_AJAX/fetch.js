// Funktion zum Senden von Daten mit Fetch API
function postData() {
    fetch('https://jsonplaceholder.typicode.com/posts', { // Beispiel-URL für das Senden von Daten an einen API-Endpunkt
        method: 'POST', // Definiert die POST-Methode für die Anfrage
        headers: {
            'Content-Type': 'application/json', // Setzt den Content-Type Header für JSON-Daten
        },
        body: JSON.stringify({
            title: 'foo',
            body: 'bar',
            userId: 1,
        }), // Konvertiert die Daten (Titel, Inhalt und Benutzer-ID) in einen JSON-String für den Body
    })
        .then(response => {
            if (!response.ok) { // Überprüft, ob die Antwort erfolgreich war (Status 200-299)
                throw new Error('Network response was not ok'); // Wirft einen Fehler für nicht erfolgreiche Antworten
            }
            return response.json(); // Gibt die Antwortdaten als JSON-Objekt zurück
        })
        .then(data => {
            // Wird nur aufgerufen, wenn die vorherige Promise erfolgreich war (Status 200-299)
            document.getElementById('output').innerHTML = `<pre>${JSON.stringify(data, null, 2)}</pre>`; // Zeigt die Antwortdaten formatiert im HTML an
        })
        .catch(error => {
            // Wird aufgerufen, wenn ein Fehler auftritt, z.B. Netzwerkfehler oder fehlerhafte Antwort
            document.getElementById('output').innerHTML = `Error while sending data: ${error.message}`; // Zeigt eine Fehlermeldung im HTML an
        });
}
