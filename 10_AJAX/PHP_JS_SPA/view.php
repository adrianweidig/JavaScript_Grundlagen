<?php
// Startet die Session, um Session-Variablen zu nutzen
session_start();
?>
<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Anmeldung</title>
    <!-- jQuery-Bibliothek einbinden -->
    <script src="https://code.jquery.com/jquery-3.6.4.min.js"></script>
    <!-- Styling für die Seite -->
    <style>
        body {
            font-family: 'Arial', sans-serif;
            background-color: #f0f0f0;
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        header {
            background-color: #333;
            color: #fff;
            padding: 10px;
            text-align: center;
        }

        /* Stil für den Anmeldebereich, abhängig davon, ob ein Benutzer angemeldet ist */
        #anmeldeBereich {
        <?php echo isset($_SESSION['username']) ? 'display: none;' : 'display: block;'; ?>
            width: 100%;
            max-width: 600px;
            margin: 20px auto;
            background-color: #fff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }

        /* Stil für den Dashboard-Bereich, abhängig davon, ob ein Benutzer angemeldet ist */
        #dashboardBereich {
        <?php echo isset($_SESSION['username']) ? 'display: block;' : 'display: none;'; ?>
            width: 100%;
            max-width: 600px;
            margin: 20px auto;
            background-color: #fff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }

        /* Allgemeine Stile für Labels, Input-Felder und Buttons */
        #anmeldeBereich label, #dashboardBereich label {
            display: block;
            margin-bottom: 8px;
        }

        #anmeldeBereich input, #dashboardBereich input, #anmeldeBereich button, #dashboardBereich button {
            width: 100%;
            padding: 10px;
            margin-bottom: 16px;
            border: 1px solid #ccc;
            border-radius: 4px;
            box-sizing: border-box;
        }

        #anmeldeBereich button, #dashboardBereich button {
            background-color: #333;
            color: #fff;
            cursor: pointer;
        }

        #anmeldeBereich button:hover, #dashboardBereich button:hover {
            background-color: #555;
        }

        h1 {
            color: #333;
        }

        #todosList {
            margin-top: 16px;
        }

        table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 16px;
            background-color: #fff;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }

        th, td {
            padding: 12px;
            border: 1px solid #ccc;
            text-align: left;
        }

        th {
            background-color: #f0f0f0;
        }

        /* Stile für spezielle Buttons und deren Hover-Effekt */
        .removeTodoBtn, #deleteAllBtn, #logoutBtn, #addTodoBtn {
            background-color: #333;
            color: #fff;
            border: none;
            border-radius: 4px;
            padding: 10px;
            cursor: pointer;
        }

        .removeTodoBtn:hover, #deleteAllBtn:hover, #logoutBtn:hover, #addTodoBtn:hover {
            background-color: #555;
        }

        /* Debug-Informationen unten links */
        #debugInfo {
            position: fixed;
            bottom: 0;
            left: 0;
            background-color: #333;
            color: #000000;
            padding: 10px;
            width: 100%;
        }

        /* Responsives Design für kleine Bildschirme */
        @media only screen and (max-width: 600px) {
            #anmeldeBereich, #dashboardBereich {
                width: 90%;
            }
        }
    </style>
</head>
<body>
<!-- Anmelde- und Dashboard-Bereich, abhängig davon, ob ein Benutzer angemeldet ist -->
<div id="anmeldeBereich">
    <form id="anmeldeForm">
        <label for="username">Benutzername:</label>
        <input type="text" id="username" name="username" required>

        <label for="password">Passwort:</label>
        <input type="password" id="password" name="password" required>

        <button type="button" id="loginBtn">Anmelden</button>
    </form>
</div>

<div id="dashboardBereich">
    <h1>Todo App Dashboard</h1>

    <!-- Formular für neue To-Dos -->
    <div>
        <label for="todoInput">To-Do:</label>
        <input type="text" id="todoInput" placeholder="To-Do eintragen...">
        <button type="button" id="addTodoBtn">&#8594;</button>
    </div>

    <!-- Liste für bestehende To-Dos -->
    <div id="todosList"></div>

    <!-- Formular für Aktionen wie Löschen und Logout -->
    <form action="" method="post">
        <button type="button" id="deleteAllBtn">Alle To-Dos löschen</button>
        <button type="button" id="logoutBtn">Logout</button>
    </form>
</div>

<!-- Debug-Informationen am unteren Bildschirmrand -->
<div id="debugInfo">
    <h3>Debug-Informationen:</h3>
    <pre id="debugOutput"></pre>
</div>

<!-- JavaScript Code -->
<script>
    $(document).ready(function () {
        // Funktion zum Aktualisieren der Debug-Informationen
        function updateDebugInfo() {
            $.post("todo.php", { updateDebug: true })
                .done(function (data, textStatus, jqXHR) {
                    var debugOutput = '';
                    debugOutput += 'Session-Daten: ' + JSON.stringify(<?php echo json_encode($_SESSION); ?>) + '\n';
                    debugOutput += 'POST-Daten: ' + JSON.stringify(<?php echo json_encode($_POST); ?>) + '\n';
                    debugOutput += 'GET-Daten: ' + JSON.stringify(<?php echo json_encode($_GET); ?>) + '\n';
                    $('#debugOutput').text(debugOutput);
                })
                .fail(function (jqXHR, textStatus, errorThrown) {
                    console.log("Fehler beim Aktualisieren der Debug-Informationen: " + errorThrown);
                });
        }

        // Prüft, ob ein Benutzer angemeldet ist und aktualisiert die Todos-Liste
        if ('<?php echo isset($_SESSION['username']) ?>') {
            refreshTodos();
        }

        // Funktion zum Aktualisieren der Todos-Liste durch Ajax-Anfrage
        function refreshTodos() {
            $.post("todo.php", { refreshTodos: true })
                .done(function (data, textStatus, jqXHR) {
                    var jsonDaten = JSON.parse(data);
                    $('#todosList').html(jsonDaten.html);
                })
                .fail(function (jqXHR, textStatus, errorThrown) {
                    console.log("Fehler beim Aktualisieren der Todos: " + errorThrown);
                });
        }

        // Event Listener für den Anmelde-Button
        $('#loginBtn').click(function () {
            var requestDaten = {
                anmelden: true,
                username: $("#username").val(),
                password: $("#password").val()
            };

            $.post("todo.php", requestDaten)
                .done(function (data, textStatus, jqXHR) {
                    var jsonDaten = JSON.parse(data);
                    console.log(jsonDaten.message);
                    // Seite neu laden, um Änderungen anzuzeigen
                    location.reload();
                    updateDebugInfo();
                })
                .fail(function (jqXHR, textStatus, errorThrown) {
                    var jsonDaten = JSON.parse(jqXHR.responseText);
                    alert(jsonDaten.message);
                });
        });

        // Event Listener für das Entfernen eines Todo-Eintrags
        $('#todosList').on('click', '.removeTodoBtn',function () {
            var todoIdToRemove = $(this).data('todo-id');
            var removeTodoRequest = {
                removeTodo: true,
                todoId: todoIdToRemove
            };

            $.post("todo.php", removeTodoRequest)
                .done(function (data, textStatus, jqXHR) {
                    var jsonDaten = JSON.parse(data);
                    console.log(jsonDaten.message);
                    refreshTodos();
                    updateDebugInfo();
                })
                .fail(function (jqXHR, textStatus, errorThrown) {
                    var jsonDaten = JSON.parse(jqXHR.responseText);

                    alert(jsonDaten.message);
                });
        });

        // Event Listener für das Hinzufügen eines neuen Todo-Eintrags
        $('#addTodoBtn').click(function () {
            var newTodoText = $("#todoInput").val();

            var addTodoRequest = {
                addTodo: true,
                todoText: newTodoText,
            };

            $.post("todo.php", addTodoRequest)
                .done(function (data, textStatus, jqXHR) {
                    var jsonDaten = JSON.parse(data);
                    console.log(jsonDaten.message);

                    refreshTodos();

                    updateDebugInfo();
                })
                .fail(function (jqXHR, textStatus, errorThrown) {
                    var jsonDaten = JSON.parse(jqXHR.responseText);
                    alert(jsonDaten.message);
                });
        });

        // Event Listener für das Löschen aller Todo-Einträge
        $('#deleteAllBtn').click(function () {
            var deleteAllRequest = {
                deleteAll: true
            };

            $.post("todo.php", deleteAllRequest)
                .done(function (data, textStatus, jqXHR) {
                    var jsonDaten = JSON.parse(data);
                    console.log(jsonDaten.message);

                    refreshTodos();

                    updateDebugInfo();
                })
                .fail(function (jqXHR, textStatus, errorThrown) {
                    var jsonDaten = JSON.parse(jqXHR.responseText);
                    alert(jsonDaten.message);
                });
        });

        // Event Listener für den Logout-Button
        $('#logoutBtn').click(function () {
            var logoutRequest = {
                logout: true
            };

            $.post("todo.php", logoutRequest)
                .done(function (data, textStatus, jqXHR) {
                    var jsonDaten = JSON.parse(data);
                    console.log(jsonDaten.message);
                    // Seite neu laden, um Änderungen anzuzeigen
                    location.reload();
                    updateDebugInfo();
                })
                .fail(function (jqXHR, textStatus, errorThrown) {
                    var jsonDaten = JSON.parse(jqXHR.responseText);
                    alert(jsonDaten.message);
                });
        });

        // Initialisierung der Debug-Informationen bei Seitenstart
        updateDebugInfo();
    });
</script>

</body>
</html>
