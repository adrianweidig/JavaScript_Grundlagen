// Durch den DOM navigieren und Ausgabe in HTML

// Funktion zum Navigieren durch den DOM
function traverseDOM() {
    let output = document.getElementById('output');

    let listItems = document.querySelectorAll('#list li');
    listItems.forEach(function(item, index) {
        let p = document.createElement('p');
        p.textContent = 'Listenelement ' + (index + 1) + ': ' + item.textContent;
        output.appendChild(p);
    });

    let firstListItem = document.querySelector('#list li:first-child');
    let firstP = document.createElement('p');
    firstP.textContent = 'Erstes Listenelement: ' + firstListItem.textContent;
    output.appendChild(firstP);

    let parentElement = firstListItem.parentElement;
    let parentP = document.createElement('p');
    parentP.textContent = 'Eltern-Element des ersten Listenelements: ' + parentElement.tagName;
    output.appendChild(parentP);
}

// Event Listener für Ausführung beim Laden der Seite
document.addEventListener('DOMContentLoaded', traverseDOM);

// Konsolen-Ausgabe zur Demonstration
console.log('DOM Traversal Beispiel geladen.');
