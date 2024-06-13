<?php
$servername = "localhost";
$nutzername = "root";
$passwort = "";
$datenbank = "bdbi02xx_weidig";

$conn = new mysqli($servername, $nutzername, $passwort, $datenbank);

if ($conn->connect_error) {
    echo "fehlgeschlagen!";
    die("Verbindung fehlgeschlagen: " . $conn->connect_error);
}
?>
