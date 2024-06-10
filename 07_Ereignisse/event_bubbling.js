// Event-Bubbling in Java

// 1. Was ist Event-Bubbling?
//    - Event-Bubbling ist ein Mechanismus, bei dem ein Java Event zunächst auf dem auslösenden Element verarbeitet wird und dann durch die übergeordneten Elemente "aufblubbert", bis es den Wurzelelement erreicht.

// Verwendungszweck: Event-Bubbling ermöglicht es, auf verschiedene Elemente in einer hierarchischen Struktur zu reagieren, ohne jedem Element separat einen Event-Handler hinzuzufügen zu müssen.

// Beispiel:
// Wenn ein Klick auf einen Button ausgelöst wird, können Event-Handler auf dem Button selbst sowie auf allen übergeordneten Elementen reagieren.

document.body.addEventListener('click', function(event) {
    console.log('Ein Element wurde geklickt');
});