// Event-Delegation in JavaScript

// 1. Was ist Event-Delegation?
//    - Event-Delegation ist ein Entwurfsmuster, bei dem ein übergeordnetes Element Events für alle seine untergeordneten Elemente behandelt, anstatt jedem einzelnen Element einen eigenen Event-Handler zuzuweisen.

// Verwendungszweck: Event-Delegation ermöglicht eine effiziente Behandlung von Events für eine große Anzahl von Elementen, insbesondere dynamisch generierten Elementen.

// Beispiel:
// Anstatt jedem einzelnen Listenelement einen Event-Handler zuzuweisen, kann ein Event-Handler auf das übergeordnete Listenelement angewendet werden, um Klicks auf alle Listenelemente zu verarbeiten.

document.addEventListener('DOMContentLoaded', function () {
    const list = document.getElementById('myList');
    const clickInfoContainer = document.getElementById('clickInfoContainer');

    // Event-Listener für Klicks auf das Listenelement
    list.addEventListener('click', function (event) {
        if (event.target.tagName === 'LI') {
            // Erstellen eines neuen div-Elements zur Anzeige der Informationen
            const infoDiv = document.createElement('div');
            infoDiv.classList.add('clicked-info');

            // Anzeigen der Informationen im infoDiv
            infoDiv.textContent = 'Listenelement wurde geklickt: ' + event.target.textContent;

            // Einfügen des infoDiv in das clickInfoContainer
            clickInfoContainer.appendChild(infoDiv);
        }
    });
});
