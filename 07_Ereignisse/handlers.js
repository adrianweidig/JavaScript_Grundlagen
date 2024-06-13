// Event-Handler in JavaScript

// 1. Was sind Event-Handler?
//    - Event-Handler sind Funktionen oder Methoden, die ausgeführt werden, wenn ein bestimmtes JavaScript Event eintritt.

// Verwendungszweck: Event-Handler werden verwendet, um auf JavaScript Events zu reagieren und entsprechende Aktionen auszuführen, z. B. das Aktualisieren von Benutzeroberflächen oder das Auslösen von Geschäftslogik.

// Beispiel:
// Ein Event-Handler kann verwendet werden, um auf einen Mausklick auf einen Button zu reagieren und eine bestimmte Aktion auszuführen.

document.addEventListener('DOMContentLoaded', function () {
    const button = document.getElementById('myButton');
    const clickInfoContainer = document.getElementById('clickInfoContainer');

    // Event-Handler für einen Button-Klick
    button.onclick = function () {
        // Erstellen eines neuen div-Elements zur Anzeige der Informationen
        const infoDiv = document.createElement('div');
        infoDiv.classList.add('clicked-info');

        // Anzeigen der Informationen im infoDiv
        infoDiv.textContent = 'Button wurde geklickt';

        // Einfügen des infoDiv in das clickInfoContainer
        clickInfoContainer.appendChild(infoDiv);
    };

    // Variablen zur Steuerung der Mauspositionsaktualisierung
    let lastUpdateTime = 0;

    // Event-Handler für Mausbewegungen
    document.addEventListener('mousemove', function (event) {
        const currentTime = new Date().getTime();

        // Überprüfen, ob 3 Sekunden seit der letzten Aktualisierung vergangen sind
        if (currentTime - lastUpdateTime >= 3000) {
            // Erstellen eines neuen div-Elements zur Anzeige der Mausposition
            const mouseInfoDiv = document.createElement('div');
            mouseInfoDiv.classList.add('mouse-info');

            // Zusammenstellen der Mauspositions-Informationen
            const infoText = `Mausposition: (${event.clientX}, ${event.clientY})`;

            // Anzeigen der Informationen im mouseInfoDiv
            mouseInfoDiv.textContent = infoText;

            // Einfügen des mouseInfoDiv in das clickInfoContainer
            clickInfoContainer.appendChild(mouseInfoDiv);

            // Aktualisieren der letzten Aktualisierungszeit
            lastUpdateTime = currentTime;
        }
    });
});
