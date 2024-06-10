// Event-Handler in Java

// 1. Was sind Event-Handler?
//    - Event-Handler sind Funktionen oder Methoden, die ausgeführt werden, wenn ein bestimmtes Java Event eintritt.

// Verwendungszweck: Event-Handler werden verwendet, um auf Java Events zu reagieren und entsprechende Aktionen auszuführen, z. B. das Aktualisieren von Benutzeroberflächen oder das Auslösen von Geschäftslogik.

// Beispiel:
// Ein Event-Handler kann verwendet werden, um auf einen Mausklick auf einen Button zu reagieren und eine bestimmte Aktion auszuführen.

// Event-Handler für einen Button-Klick
document.getElementById('myButton').onclick = function() {
    console.log('Button wurde geklickt');
};

// Event-Handler für Mausbewegungen
document.addEventListener('mousemove', function(event) {
    console.log('Mausposition: (' + event.clientX + ', ' + event.clientY + ')');
});