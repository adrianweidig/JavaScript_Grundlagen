# Überprüfe, ob die Ordner existieren, und benenne sie gegebenenfalls um
$folders = "00_Uebungen","01_Grundlagen","02_Kontrollstrukturen","03_OOP","04_Funktionen","05_Regulaere_Ausdruecke","06_Ereignisse","07_Speicher","08_Promises","09_Iteratoren","10_Packages","11_Collections"
foreach ($folder in $folders) {
    if (Test-Path -Path $folder) {
        $newName = "old_$folder"
        Rename-Item -Path $folder -NewName $newName
        Write-Host "Der Ordner $folder existiert bereits und wurde umbenannt in $newName"
    }
}

# Erstelle die aktualisierte Ordnerstruktur
New-Item -Name "00_Uebungen" -ItemType "directory"
New-Item -Name "01_Grundlagen" -ItemType "directory"
New-Item -Name "02_Collections" -ItemType "directory"
New-Item -Name "03_Kontrollstrukturen" -ItemType "directory"
New-Item -Name "04_OOP" -ItemType "directory"
New-Item -Name "05_Funktionen" -ItemType "directory"
New-Item -Name "06_Regulaere_Ausdruecke" -ItemType "directory"
New-Item -Name "07_Ereignisse" -ItemType "directory"
New-Item -Name "08_Speicher" -ItemType "directory"
New-Item -Name "09_Promises" -ItemType "directory"
New-Item -Name "10_Iteratoren" -ItemType "directory"
New-Item -Name "11_Packages" -ItemType "directory"

# Erstelle Unterordner in 01_Grundlagen
New-Item -Path ".\01_Grundlagen" -Name "Syntax" -ItemType "directory"
New-Item -Path ".\01_Grundlagen" -Name "Variablen" -ItemType "directory"
New-Item -Path ".\01_Grundlagen" -Name "Datentypen" -ItemType "directory"

# Erstelle Unterordner in 02_Collections
New-Item -Path ".\02_Collections" -Name "Arrays" -ItemType "directory"
New-Item -Path ".\02_Collections" -Name "Listen" -ItemType "directory"
New-Item -Path ".\02_Collections" -Name "Maps" -ItemType "directory"

# Erstelle Unterordner in 03_Kontrollstrukturen
New-Item -Path ".\03_Kontrollstrukturen" -Name "Bedingungen" -ItemType "directory"
New-Item -Path ".\03_Kontrollstrukturen" -Name "Ternary" -ItemType "directory"
New-Item -Path ".\03_Kontrollstrukturen" -Name "For_Schleifen" -ItemType "directory"
New-Item -Path ".\03_Kontrollstrukturen" -Name "While_Schleifen" -ItemType "directory"
New-Item -Path ".\03_Kontrollstrukturen" -Name "Schleifensteuerung" -ItemType "directory"

# Erstelle Unterordner in 04_OOP
New-Item -Path ".\04_OOP" -Name "Klassen" -ItemType "directory"
New-Item -Path ".\04_OOP" -Name "Vererbung" -ItemType "directory"

# Erstelle Unterordner in 05_Funktionen
New-Item -Path ".\05_Funktionen" -Name "Erstellung" -ItemType "directory"
New-Item -Path ".\05_Funktionen" -Name "Aufruf" -ItemType "directory"
New-Item -Path ".\05_Funktionen" -Name "Arrow" -ItemType "directory"
New-Item -Path ".\05_Funktionen" -Name "Unterschied" -ItemType "directory"

# Erstelle Unterordner in 06_Regulaere_Ausdruecke
New-Item -Path ".\06_Regulaere_Ausdruecke" -Name "Einfuehrung" -ItemType "directory"
New-Item -Path ".\06_Regulaere_Ausdruecke" -Name "Verwendung" -ItemType "directory"

# Erstelle Unterordner in 07_Ereignisse
New-Item -Path ".\07_Ereignisse" -Name "Handling" -ItemType "directory"
New-Item -Path ".\07_Ereignisse" -Name "Haeufig" -ItemType "directory"

# Erstelle Unterordner in 08_Speicher
New-Item -Path ".\08_Speicher" -Name "Zuweisung" -ItemType "directory"
New-Item -Path ".\08_Speicher" -Name "Garbage" -ItemType "directory"

# Erstelle Unterordner in 09_Promises
New-Item -Path ".\09_Promises" -Name "Einfuehrung" -ItemType "directory"
New-Item -Path ".\09_Promises" -Name "Asynchron" -ItemType "directory"

# Erstelle Unterordner in 10_Iteratoren
New-Item -Path ".\10_Iteratoren" -Name "Verwendung" -ItemType "directory"
New-Item -Path ".\10_Iteratoren" -Name "Generatoren" -ItemType "directory"

# Erstelle Unterordner in 11_Packages
New-Item -Path ".\11_Packages" -Name "React" -ItemType "directory"
New-Item -Path ".\11_Packages" -Name "Vue.js" -ItemType "directory"
New-Item -Path ".\11_Packages" -Name "Angular" -ItemType "directory"
New-Item -Path ".\11_Packages" -Name "jQuery" -ItemType "directory"
New-Item -Path ".\11_Packages" -Name "Nodejs" -ItemType "directory"
New-Item -Path ".\11_Packages" -Name "Ember.js" -ItemType "directory"
New-Item -Path ".\11_Packages" -Name "Lodash" -ItemType "directory"
New-Item -Path ".\11_Packages" -Name "Meteor" -ItemType "directory"
New-Item -Path ".\11_Packages" -Name "Dojo_Toolkit" -ItemType "directory"
