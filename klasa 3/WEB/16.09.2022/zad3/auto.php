<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form method="POST" action="auto.php">
        Podaj rok produkcji samochodu <input type="text" name="rok">
        <button>sprawdz</button>
    </form>

<?php 
$rok = $_POST['rok'];

$serw = "localhost";
$uzyt = "root";
$pass = "";
$baza = "bazaauto";

$conn = mysqli_connect($serw, $uzyt, $pass, $baza);
$q = "SELECT * FROM tabelaauto WHERE RokP = '$rok'";

if(mysqli_connect_errno() == 0){
    $r = mysqli_query($conn, $q) or die("ERROR");
    while($row = mysqli_fetch_assoc($r)){
        echo $row['IdAuto']. " - ".$row['Marka']." - ".$row['Typ']." - ".$row['RokP']." - ".$row['Cena']." - ".$row['NrRej']."<br>";
    }
}


mysqli_close($conn);





?>
</body>
</html>