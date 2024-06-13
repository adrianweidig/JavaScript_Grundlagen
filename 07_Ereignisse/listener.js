// Event-Listener in JavaScript

// 1. Was sind Event-Listener?
//    - Event-Listener sind Objekte, die auf ein bestimmtes Java Event warten und dann eine entsprechende Aktion ausführen.

// Verwendungszweck: Event-Listener werden verwendet, um auf Java Events zu lauschen und bei deren Auftreten bestimmte Funktionen oder Methoden auszuführen.

// Beispiel:
// Ein Event-Listener kann darauf warten, dass ein Mausklick auf einen Button erfolgt, und dann eine Funktion aufrufen, um den Klick zu verarbeiten.

document.addEventListener('DOMContentLoaded', function () {
    const button = document.getElementById('myButton');
    const clickInfoContainer = document.getElementById('clickInfoContainer');

    // Event-Listener für den Klick auf den Button registrieren
    button.addEventListener('click', function (event) {
        // Erstellen eines neuen div-Elements zur Anzeige der Informationen
        const infoDiv = document.createElement('div');
        infoDiv.classList.add('clicked-info');

        // Anzeigen der Informationen im infoDiv
        infoDiv.textContent = 'Button wurde geklickt';

        // Einfügen des infoDiv in das clickInfoContainer
        clickInfoContainer.appendChild(infoDiv);
    });
});
