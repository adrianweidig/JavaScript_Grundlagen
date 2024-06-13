// Funktion zum Laden von Daten mit XMLHttpRequest
function loadData() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'data.json', true); // Öffnet eine GET-Anfrage für 'data.json'

    xhr.onload = function() {
        if (xhr.status === 200) { // Prüft den Status der Anfrage
            const response = JSON.parse(xhr.responseText); // Parst die JSON-Antwort
            document.getElementById('output').innerHTML = `<pre>${JSON.stringify(response, null, 2)}</pre>`; // Zeigt die Antwort im HTML an
        } else {
            document.getElementById('output').innerHTML = `Fehler beim Laden der Daten: ${xhr.status}`; // Behandelt Fehler beim Laden der Daten
        }
    };

    xhr.onerror = function() {
        document.getElementById('output').innerHTML = 'Netzwerkfehler beim Laden der Daten'; // Behandelt Netzwerkfehler
    };

    xhr.send(); // Sendet die Anfrage
}
