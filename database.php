<!DOCTYPE html>
<html>
    <head>

    </head>
    <body>
    <?php

            $tjener = "localhost"; 
            $brukernavn = "root"; 
            $passord = ""; 
            $database = "tegneseriefigurer"; 

            $kobling = new mysqli($tjener, $brukernavn, $passord, $database);   

            if ($kobling->connect_error) {
                die("Noe gikk galt: " . $kobling->connect_error)
            }
            else {
                echo "Koblingen virker";
            }

            ?>
    </body>
    
</html>

