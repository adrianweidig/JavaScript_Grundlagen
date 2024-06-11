// Event-Objekte in Java

// 1. Was sind Event-Objekte?
//    - Event-Objekte sind spezielle Objekte, die Informationen über ein aufgetretenes Java Event enthalten, wie z. B. den Typ des Events oder die beteiligten Elemente.

// Verwendungszweck: Event-Objekte ermöglichen es, detaillierte Informationen über ein Java Event abzurufen und basierend darauf geeignete Aktionen auszuführen.

// Beispiel:
// Ein Event-Objekt für einen Mausklick kann Informationen über die Position des Klicks und das betroffene Element enthalten.

const button = document.getElementById('myButton');
button.addEventListener('click', function (event) {
    console.log(event.type); // Gibt den Typ des Events aus (z. B. "click")
    console.log(event.target); // Gibt das Element zurück, auf das geklickt wurde
});
