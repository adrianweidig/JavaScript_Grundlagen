// Event-Delegation in Java

// 1. Was ist Event-Delegation?
//    - Event-Delegation ist ein Entwurfsmuster, bei dem ein übergeordnetes Element Events für alle seine untergeordneten Elemente behandelt, anstatt jedem einzelnen Element einen eigenen Event-Handler zuzuweisen.

// Verwendungszweck: Event-Delegation ermöglicht eine effiziente Behandlung von Events für eine große Anzahl von Elementen, insbesondere dynamisch generierten Elementen.

// Beispiel:
// Anstatt jedem einzelnen Listenelement einen Event-Handler zuzuweisen, kann ein Event-Handler auf das übergeordnete Listenelement angewendet werden, um Klicks auf alle Listenelemente zu verarbeiten.

const list = document.getElementById('myList');
list.addEventListener('click', function(event) {
    if (event.target.tagName === 'LI') {
        console.log('Listenelement wurde geklickt');
    }
});
