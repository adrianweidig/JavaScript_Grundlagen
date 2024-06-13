document.addEventListener('DOMContentLoaded', function () {
    const button = document.getElementById('myButton');
    const clickInfoContainer = document.getElementById('clickInfoContainer');

    // Event-Listener für den Klick auf den Button registrieren
    button.addEventListener('click', function (event) {
        // Erstellen eines neuen div-Elements zur Anzeige der Informationen
        const infoDiv = document.createElement('div');
        infoDiv.classList.add('clicked-info');

        // Anzeigen der Informationen im infoDiv
        infoDiv.innerHTML = `
            <strong>Event-Typ:</strong> ${event.type}<br>
            <strong>Ziel-Element:</strong> ${event.target.tagName.toLowerCase()}<br>
            <strong>Klassennamen des Ziel-Elements:</strong> ${event.target.className || 'Keine Klassen'}<br>
            <strong>Klick-Koordinaten (X, Y):</strong> ${event.clientX}, ${event.clientY}
        `;

        // Einfügen des infoDiv in das clickInfoContainer
        clickInfoContainer.appendChild(infoDiv);
    });

    // Event-Listener für Klicks auf das Dokument registrieren (Delegation)
    document.body.addEventListener('click', function (event) {
        // Konsolenausgabe des Event-Typs
        console.log('Event-Typ (Delegation):', event.type);

        // Konsolenausgabe des Ziel-Elements (Element, auf das geklickt wurde)
        console.log('Ziel-Element (Delegation):', event.target);
    });
});
