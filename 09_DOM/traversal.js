// Durch den DOM navigieren

// Funktion zum Navigieren durch den DOM
function traverseDOM() {
    let listItems = document.querySelectorAll('#list li');
    listItems.forEach(function(item, index) {
        console.log('Listenelement ' + (index + 1) + ': ' + item.textContent);
    });

    let firstListItem = document.querySelector('#list li:first-child');
    console.log('Erstes Listenelement: ' + firstListItem.textContent);

    let parentElement = firstListItem.parentElement;
    console.log('Eltern-Element des ersten Listenelements: ' + parentElement.tagName);
}

// Event Listener für Ausführung beim Laden der Seite
document.addEventListener('DOMContentLoaded', traverseDOM);

// Konsolen-Ausgabe zur Demonstration
console.log('DOM Traversal Beispiel geladen.');
