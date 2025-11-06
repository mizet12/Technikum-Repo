<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <style>
        form{
            border: 3px solid blue;
            width:400px;
        }
        
        table{
            border-collapse: collapse;
        }
        th{
            background-color: blue;
            color: white;
            height: 50px;
            border: 1px solid lightgreen;
            padding: 5px;
        }
        .zdane{
            text-align: center;
            border: 1px solid lightblue;
            background-color: aqua;
            color: black;
            padding: 5px;
        }
        .niezdane{
            text-align: center;
            border: 1px solid pink;
            background-color: red;
            color: black;
            padding: 5px;
            color: white;
        }
        #zdaneinfo{
            height: 50px;
            width: 100px;
            border: 1px solid lightblue;
            background-color: aqua;
        }
        #niezdaneinfo{  
            height: 50px;
            width: 100px;
            border: 1px solid pink;
            background-color: red;
        }
 
    </style>
</head>
<body>
    <center>
    <form method="POST" action="index.php">
        
        <h1>Wprowadź nowego ucznia</h1>
    Imię:<input type="text" name="Imie"><br>
    Nazwisko:<input type="text" name="Nazwisko"><br>
    Pesel:<input type="number" name="Pesel"><br>
    <h2>Wpisz swoje oceny</h2>
    Polski:<input type="number" name="polski"><br>
    Matematyka:<input type="text" name="Matma"><br>
    Angielski:<input type="text" name="Angielski"><br>
    <select name="kierunek">
        <option value="1" name="1">Technik elektronik</option>
        <option value="2" name="2">Technik informatytk</option>
        <option value="3" name="3">Technik programista</option>
    </select><br>
    <button >Wyslij</button>
        
    </form>


    <div id="zdaneinfo"></div>Zaakceptowano
    <div id="niezdaneinfo"></div>Nie Zaakceptowano

    <table>
            <tr>
            <th>Imie</th>
            <th>Nazwisko</th>
            <th>Szkoła</th>
            <th>Kierunek</th>
            <th>Średnia posiadana</th>
            <th>Średnia wymagana</th>
            </tr>
    <?php
    
    $conn = mysqli_connect("localhost", "root", "", "rekru");
        $Imie = $_POST['Imie'];
        $Nazwisko = $_POST['Nazwisko'];
        $Pesel = $_POST['Pesel'];
        $polski = $_POST['polski'];
        $Matma = $_POST['Matma'];
        $Angielski =  $_POST['Angielski'];
        $k = $_POST['kierunek'];
    if(!($Imie == null || $Nazwisko ==null || $Pesel ==null || $polski==null || $Angielski==null || $Matma==null)){
        if(mysqli_connect_errno() == 0){
            $q = "SELECT * FROM kierunki where ID_kierunku=$k";
            $i = "INSERT INTO uczen(Imie, Nazwisko, pesel, srednia, ID_kierunku) Values('$Imie', '$Nazwisko', $Pesel, (($polski+$Matma+$Angielski)/3), $k)";
            $j = "INSERT INTO uczen_n(Imie, Nazwisko, pesel, srednia, ID_kierunku) Values('$Imie', '$Nazwisko', $Pesel, (($polski+$Matma+$Angielski)/3), $k)";

            $result = mysqli_query($conn, $q) or die("Problemy z odczytem danych!");
            while($row = mysqli_fetch_assoc($result))
            {
                if((float)(((int)$polski+(int)$Matma+(int)$Angielski)/3)>=$row['prog']){
                    $in = mysqli_query($conn, $i);
                }else{
                    $in = mysqli_query($conn, $j);
                }
            }           
                
        }else{
                mysqli_connect_error();
                exit();
        }
    }else{
        echo "Prosze wprowadzić wszystkie dane";
    }
    $q1 = "SELECT * FROM kierunki join uczen using(ID_kierunku) join szkoly using(ID_szkoly)";
    $q2 = "SELECT * FROM kierunki join uczen_n using(ID_kierunku) join szkoly using(ID_szkoly)";
    $result1 = mysqli_query($conn, $q1) or die("Problemy z odczytem danych!");
    $result2 = mysqli_query($conn, $q2) or die("Problem");
            while($row = mysqli_fetch_assoc($result1))
            {
                echo "<tr><td class='zdane'>".$row['Imie']."</td><td class='zdane'>".$row['Nazwisko']."</td><td class='zdane'>".$row['NazwaSzkoly']."</td><td class='zdane'>".$row['NazwaK']."</td><td class='zdane'>".$row['srednia']."</td><td class='zdane'>".$row['prog']."</td></tr>";
            }
            while($row = mysqli_fetch_assoc($result2))
            {
                echo "<tr><td class='niezdane'>".$row['Imie']."</td><td class='niezdane'>".$row['Nazwisko']."</td><td class='niezdane'>".$row['NazwaSzkoly']."</td><td class='niezdane'>".$row['NazwaK']."</td><td class='niezdane'>".$row['srednia']."</td><td class='niezdane'>".$row['prog']."</td></tr>";
            }
           
            echo "</td>";
        mysqli_close($conn);
        ?>
        </table>
    </center>
</body>
</html>