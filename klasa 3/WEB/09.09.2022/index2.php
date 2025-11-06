<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
    $server = "localhost";
    $uzytkownik = "root";
    $haslo = "";
    $bazadanych = "bazaauto";
    $q = "SELECT * FROM tabelaauto";
    

    $conn = mysqli_connect($server, $uzytkownik, $haslo, $bazadanych);
    if(mysqli_connect_errno() == 0){
        echo "połaczono ";
        $result = mysqli_query($conn, $q) or die("Problem");
        $ile = mysqli_num_rows($result);
        echo $ile . "<br>";
        while($row = mysqli_fetch_assoc($result)){
            echo $row['IdAuto']. " - ".$row['Marka']." - ".$row['Typ']." - ".$row['RokP']." - ".$row['Cena']." - ".$row['NrRej']."<br>";
        }
    }else{
        mysqli_connect_error();
        exit();
    }

    mysqli_close($conn);


    ?>
</body>
</html>