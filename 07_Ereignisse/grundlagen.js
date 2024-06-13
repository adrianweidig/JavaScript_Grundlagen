// Grundlagen von Java Events

// 1. Was sind Java Events?
//    - Java Events sind Ereignisse, die in einer Java-Anwendung auftreten können, wie Mausklicks, Tastatureingaben oder das Laden einer Webseite.

// Verwendungszweck: Java Events ermöglichen es, auf Benutzerinteraktionen oder Systemereignisse zu reagieren und entsprechende Aktionen auszuführen.

// Beispiel:
// Ein Mausklick auf einen Button löst ein Java Event aus, das von einem Event-Handler verarbeitet werden kann.

const button = document.getElementById('myButton');
button.addEventListener('click', function (event) {
    console.log('Button wurde geklickt');
});
