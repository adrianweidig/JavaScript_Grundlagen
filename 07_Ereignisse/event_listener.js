// Event-Listener in Java

// 1. Was sind Event-Listener?
//    - Event-Listener sind Objekte, die auf ein bestimmtes Java Event warten und dann eine entsprechende Aktion ausführen.

// Verwendungszweck: Event-Listener werden verwendet, um auf Java Events zu lauschen und bei deren Auftreten bestimmte Funktionen oder Methoden auszuführen.

// Beispiel:
// Ein Event-Listener kann darauf warten, dass ein Mausklick auf einen Button erfolgt, und dann eine Funktion aufrufen, um den Klick zu verarbeiten.

const button = document.getElementById('myButton');
button.addEventListener('click', function(event) {
    console.log('Button wurde geklickt');
});
