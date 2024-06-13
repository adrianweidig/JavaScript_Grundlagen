// Text ändern und Listenelement hinzufügen

// Funktion zum Ändern des Texts
function changeText() {
    let output = document.getElementById('output');
    output.innerHTML = '<h2>Text wurde geändert!</h2>';
}

// Funktion zum Hinzufügen eines Listenelements
function addListItem() {
    let list = document.getElementById('list');
    let newItem = document.createElement('li');
    newItem.textContent = 'Neues Element';
    list.appendChild(newItem);
}

// Event Listener für die Buttons
document.getElementById('changeTextBtn').addEventListener('click', changeText);
document.getElementById('addListItemBtn').addEventListener('click', addListItem);

// Konsolen-Ausgabe zur Demonstration
console.log('DOM Manipulation Beispiel geladen.');
