// Event-Bubbling in JavaScript

// 1. Was ist Event-Bubbling?
//    - Event-Bubbling ist ein Mechanismus, bei dem ein Event zunächst auf dem auslösenden Element verarbeitet wird
//      und dann durch die übergeordneten Elemente "aufblubbert", bis es das Wurzelelement erreicht.

// Verwendungszweck:
// Event-Bubbling ermöglicht es, auf verschiedene Elemente in einer hierarchischen Struktur zu reagieren, ohne jedem
// Element separat einen Event-Handler hinzufügen zu müssen.

// Beispiel:
// Wenn ein Klick auf einen Button ausgelöst wird, können Event-Handler auf dem Button selbst sowie auf allen
// übergeordneten Elementen reagieren.

document.addEventListener('DOMContentLoaded', function () {
    // Event-Listener für Klicks auf das gesamte Dokument registrieren
    document.body.addEventListener('click', function (event) {
        // Zugriff auf das geklickte Element über das Event-Objekt
        const clickedElement = event.target;

        // Erstellen eines neuen div-Elements zur Anzeige der Informationen
        const infoDiv = document.createElement('div');
        infoDiv.classList.add('clicked-info');

        // Anzeigen der Informationen unter dem geklickten Element
        const infoText = `
            Geklicktes Element: ${clickedElement.tagName.toLowerCase()}
            ID des Elements: ${clickedElement.id || 'Keine ID'}
            Klassennamen: ${clickedElement.className || 'Keine Klassen'}
            Textinhalt: ${clickedElement.textContent.trim() || 'Kein Textinhalt'}
        `;
        infoDiv.textContent = infoText;

        // Einfügen des infoDiv unter dem geklickten Element
        clickedElement.parentNode.insertBefore(infoDiv, clickedElement.nextSibling);
    });
});
