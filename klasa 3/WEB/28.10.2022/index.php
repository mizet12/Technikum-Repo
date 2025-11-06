<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Baza Danych o pracownikach firm</title>
    <link rel="stylesheet" href="index.css">
</head>
<body>
    <section id="main">
        <section id="banner"><h1>Baza danych o pracownikach</h1></section>
        <section id="left">
        <h2>Informatycy poniżej roku 1975</h2>    
        <table>
            <tr>
                <td class="nagl">Imię</td>
                <td class="nagl">Nazwisko</td>
                <td class="nagl">Pensja</td>
            </tr>
        <?php
            $conn = mysqli_connect("localhost", "root", "", "firma");
            $q = "SELECT * from pracownicy where data_urodzenia < '1975-12-31' and plec = 'm' and zawod = 'informatyk'";
            

        ?>
        </table></section>
        <section id="right"><h2>Sekretarki firmy OMEGA</h2>
        <ol>
            <li></li>
        </ol>
        <hr>
    </section>
        <section id="stopka">Autor : (mój pesel)</section>
    </section>
</body>
</html>