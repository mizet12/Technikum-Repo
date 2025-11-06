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
    $logi = $_POST['login'];
    $pass = $_POST['haslo'];
    $box = $_POST['che'];

    echo $logi . "<br>";
    echo sha1($pass) . "<br>";
    if(isset($box)) echo "Pamietam cie!";
    

    ?>
</body>
</html>