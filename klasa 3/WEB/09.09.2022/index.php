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
    require_once('index3.php');
    $q = "SELECT * FROM filmy";

    mysqli_set_charset($conn, "utf8");

    
    $a = "INSERT INTO filmy VALUES(NULL, 'kuroko', 2012, 'anime')";
    mysqli_query($conn,$a);
    


    if(mysqli_connect_errno() == 0){
        echo "<p>Połącznie z bazą danych zakończone sukcesem</p>";
        $result = mysqli_query($conn, $q) or die("ERROR");
        while($row = mysqli_fetch_assoc($result)){
            echo $row['tytul']." - ".$row['rokprodukcji']." - ".$row['gatunek'];
        }


    }else{
        echo "<p>W połącznieu z bazą wystąpił błąd " . mysqli_connect_error() . "</p>";
    }

    ?>
</body>
</html>