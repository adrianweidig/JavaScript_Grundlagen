<?php
require_once 'inc/db.php'; // Verbindung zur Datenbank wird hergestellt
session_start(); // Startet die PHP-Session, um Benutzersitzungen zu verwalten

if (isset($_POST['anmelden'])) { // Überprüft, ob ein Anmeldeversuch vorliegt
    echo login(); // Führt die Funktion login() aus und gibt das Ergebnis aus
}

if (isset($_POST['refreshTodos'])) { // Überprüft, ob eine Aktualisierung der Todos angefordert wurde
    echo refreshTodos(); // Führt die Funktion refreshTodos() aus und gibt das Ergebnis aus
} elseif (isset($_POST['removeTodo'])) { // Überprüft, ob ein Todo zum Entfernen angefordert wurde
    echo removeTodo(); // Führt die Funktion removeTodo() aus und gibt das Ergebnis aus
} elseif (isset($_POST['addTodo'])) { // Überprüft, ob ein neues Todo hinzugefügt werden soll
    echo addTodo(); // Führt die Funktion addTodo() aus und gibt das Ergebnis aus
} elseif (isset($_POST['deleteAll'])) { // Überprüft, ob alle Todos gelöscht werden sollen
    echo deleteAll(); // Führt die Funktion deleteAll() aus und gibt das Ergebnis aus
} elseif (isset($_POST['logout'])) { // Überprüft, ob ein Logout angefordert wurde
    echo logout(); // Führt die Funktion logout() aus und gibt das Ergebnis aus
}

// Funktion zum Einloggen des Benutzers
function login(): string
{
    global $conn; // Zugriff auf die globale Datenbankverbindung

    $response = ''; // Initialisiert die Rückgabemeldung

    // Holt Benutzername und Passwort aus dem POST-Array und bereitet sie für die Datenbankabfrage vor
    $username = isset($_POST['username']) ? mysqli_real_escape_string($conn, $_POST['username']) : '';
    $password = isset($_POST['password']) ? mysqli_real_escape_string($conn, $_POST['password']) : '';

    // SQL-Abfrage, um Benutzerdaten aus der Datenbank abzurufen
    $sql = "SELECT * FROM user_table WHERE name='$username' AND password='$password'";
    $query = $conn->query($sql); // Führt die Abfrage auf der Datenbank aus

    // Überprüft das Ergebnis der Abfrage
    if ($query) {
        // Überprüft, ob genau ein Benutzer gefunden wurde
        if ($query->num_rows == 1) {
            $_SESSION['username'] = $username; // Setzt den Benutzernamen in der Session
            $response = json_encode(['status' => 'success', 'message' => "Erfolgreich eingeloggt"]); // Erfolgsmeldung wird vorbereitet
        } else {
            http_response_code(401); // Setzt den HTTP-Statuscode auf 401 (Unauthorized)
            $response = json_encode(['status' => 'error', 'message' => 'Benutzername oder Passwort falsch']); // Fehlermeldung wird vorbereitet
        }
    } else {
        http_response_code(500); // Setzt den HTTP-Statuscode auf 500 (Internal Server Error)
        $response = json_encode(['status' => 'error', 'message' => 'Fehler bei der Datenbankabfrage']); // Fehlermeldung wird vorbereitet
    }

    return $response; // Gibt die Antwort (Erfolg oder Fehler) zurück
}

// Funktion zum Hinzufügen eines neuen Todos
function addTodo(): string
{
    global $conn; // Zugriff auf die globale Datenbankverbindung

    // Holt den Benutzernamen aus der Session und das neue Todo aus dem POST-Array
    $username = $_SESSION['username'];
    $newTodoText = isset($_POST['todoText']) ? mysqli_real_escape_string($conn, $_POST['todoText']) : '';

    // SQL-Abfrage, um das neue Todo in die Datenbank einzufügen
    $insertSql = "INSERT INTO todo_table (UserId, todo, Datum) VALUES ((SELECT id FROM user_table WHERE name = '$username'), '$newTodoText', NOW())";
    $insertQuery = $conn->query($insertSql); // Führt die Abfrage auf der Datenbank aus

    // Überprüft das Ergebnis der Abfrage
    if ($insertQuery) {
        return json_encode(['status' => 'success', 'message' => 'To-Do erfolgreich hinzugefügt']); // Erfolgsmeldung wird zurückgegeben
    } else {
        http_response_code(500); // Setzt den HTTP-Statuscode auf 500 (Internal Server Error)
        return json_encode(['status' => 'error', 'message' => 'Fehler beim Hinzufügen des To-Dos']); // Fehlermeldung wird zurückgegeben
    }
}

// Funktion zum Entfernen eines Todos
function removeTodo(): string
{
    global $conn; // Zugriff auf die globale Datenbankverbindung

    // Holt die Todo-ID aus dem POST-Array
    $todoIdToRemove = isset($_POST['todoId']) ? mysqli_real_escape_string($conn, $_POST['todoId']) : '';

    // SQL-Abfrage, um das Todo aus der Datenbank zu löschen
    $sql = "DELETE FROM todo_table WHERE id='$todoIdToRemove'";
    $deleteQuery = $conn->query($sql); // Führt die Abfrage auf der Datenbank aus

    // Überprüft das Ergebnis der Abfrage
    if ($deleteQuery) {
        return json_encode(['status' => 'success', 'message' => 'To-Do erfolgreich entfernt']); // Erfolgsmeldung wird zurückgegeben
    } else {
        http_response_code(500); // Setzt den HTTP-Statuscode auf 500 (Internal Server Error)
        return json_encode(['status' => 'error', 'message' => 'Fehler beim Entfernen des To-Dos']); // Fehlermeldung wird zurückgegeben
    }
}

// Funktion zum Löschen aller Todos eines Benutzers
function deleteAll(): string
{
    global $conn; // Zugriff auf die globale Datenbankverbindung

    // Holt den Benutzernamen aus der Session
    $username = $_SESSION['username'];

    // SQL-Abfrage, um alle Todos des Benutzers aus der Datenbank zu löschen
    $deleteSql = "DELETE FROM todo_table WHERE UserId = (SELECT id FROM user_table WHERE name = '$username')";
    $deleteQuery = $conn->query($deleteSql); // Führt die Abfrage auf der Datenbank aus

    // Überprüft das Ergebnis der Abfrage
    if ($deleteQuery) {
        refreshTodos(); // Ruft die Funktion refreshTodos() auf, um die Todo-Liste neu zu laden
        return json_encode(['status' => 'success', 'message' => 'Alle To-Dos erfolgreich gelöscht']); // Erfolgsmeldung wird zurückgegeben
    } else {
        http_response_code(500); // Setzt den HTTP-Statuscode auf 500 (Internal Server Error)
        return json_encode(['status' => 'error', 'message' => 'Fehler beim Löschen aller To-Dos']); // Fehlermeldung wird zurückgegeben
    }
}

// Funktion zum Ausloggen des Benutzers
function logout(): string
{
    session_unset(); // Entfernt alle Variablen der aktuellen Session
    session_destroy(); // Zerstört die aktuelle Session

    return json_encode(['status' => 'success', 'message' => 'Erfolgreich ausgeloggt']); // Erfolgsmeldung wird zurückgegeben
}

// Funktion zur Aktualisierung der Todo-Liste eines Benutzers
function refreshTodos(): string
{
    global $conn; // Zugriff auf die globale Datenbankverbindung

    // Holt den Benutzernamen aus der Session
    $username = $_SESSION['username'];

    // SQL-Abfrage, um die Todos des Benutzers aus der Datenbank abzurufen
    $sql = "SELECT * FROM todo_table
            WHERE UserId = (SELECT id FROM user_table WHERE name = '$username')";
    $query = $conn->query($sql); // Führt die Abfrage auf der Datenbank aus

    // HTML-Code für die Anzeige der Todo-Liste
    $html = '';

    // Überprüft das Ergebnis der Abfrage und erstellt den HTML-Code entsprechend
    if ($query && $query->num_rows > 0) {
        $html .= '<h2>ToDo-Liste für ' . $username . '</h2>';
        $html .= '<table>';
        $html .= '<tr><th>Datum</th><th>Todo</th><th>Aktionen</th></tr>';

        while ($row = $query->fetch_assoc()) {
            $html .= '<tr>';
            $html .= '<td><button class="removeTodoBtn" data-todo-id="' . $row['id'] . '">X</button></td>';
            $html .= '<td>' . date('d.m.Y', strtotime($row['Datum'])) . '</td>';
            $html .= '<td>';
            $html .= htmlspecialchars($row['todo']) . '</td>';
            $html .= '</tr>';
        }

        $html .= '</table>';
    } else {
        $html .= '<h2>ToDo-Liste für ' . $username . '</h2>';
        $html .= '<p>Keine Einträge</p>';
    }

    return json_encode(['html' => $html]); // Gibt den HTML-Code als JSON zurück
}
?>
