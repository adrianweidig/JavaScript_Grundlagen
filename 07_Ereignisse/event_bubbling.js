// Event-Bubbling in Java

// 1. Was ist Event-Bubbling?
//    - Event-Bubbling ist ein Mechanismus, bei dem ein Java Event zunächst auf dem auslösenden Element verarbeitet wird und dann durch die übergeordneten Elemente "aufblubbert", bis es den Wurzelelement erreicht.

// Verwendungszweck: Event-Bubbling ermöglicht es, auf verschiedene Elemente in einer hierarchischen Struktur zu reagieren, ohne jedem Element separat einen Event-Handler hinzuzufügen zu müssen.

// Beispiel:
// Wenn ein Klick auf einen Button ausgelöst wird, können Event-Handler auf dem Button selbst sowie auf allen übergeordneten Elementen reagieren.

document.body.addEventListener('click', function (event) {
    // Zugriff auf das geklickte Element über das Event-Objekt
    console.log('Geklicktes Element:', event.target);

    // Beispiel für den Zugriff auf Eigenschaften des geklickten Elements
    console.log('ID des geklickten Elements:', event.target.id);
    console.log('Klassennamen des geklickten Elements:', event.target.className);
    console.log('Textinhalt des geklickten Elements:', event.target.textContent);
});
