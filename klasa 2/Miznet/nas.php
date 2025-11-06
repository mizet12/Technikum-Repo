<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" href="loga/image (2).png" type="image/x-icon">
    <title>Miznet</title>
    <style>
        html {
    height: 90%;
}
body{
    height: 100%;
    margin: 0;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background: rgb(178,58,203);
    background: linear-gradient(328deg, rgba(178,58,203,1) 0%, rgba(180,56,97,1) 100%);
}
#top{
    margin: 40px;
    background-color: white;
    border-radius: 25px;
    padding: 10px;
    display: flex;
    margin-left: 300px;
    margin-right: 300px;
    text-decoration: none;    
}
#logo{
    height: 139px;
    width: 161px;
}
#menu{
    margin-top: 20px;
    font-size: 200%;
 margin-left: 450px;
}
.a1{
    text-decoration: none;
    margin-left: 15px;
    margin-right: 15px;
    color: blueviolet;
}
#main{
    margin-top: 40px;
    margin-left: 40px;
    margin-right: 40px;
    background-color: white;
    border-radius: 25px;
    height: 80%;
    display: flex;
    flex-direction: column;
}
button{
    background: none!important;
    border: none;
    padding: 0!important;
    font-family: Comic Sans MS;
    font-size: 107%;
    color: #069;
    cursor: pointer;
  }
#licz{
    background-color: red;
    border-radius: 100%;
    width: 30px;
    margin-top: -35px;
    margin-left: 522px;
    height: 30px;
    text-align: center;
    padding-bottom: 5px;
    display: none;
}
.Produkt{
    color: white;
    background-color: rgb(42, 42, 42);
    border-radius: 10px;
    border: 1px solid black;
    width: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 10px;
    margin-left: 25px;
    margin-right: 25px;
    text-align: center;
    padding-top: 10px;
    height: 450px;
}
hr{
    opacity: 0;
}
#mangi{
    display: flex;
    flex-wrap: wrap;
    width: 100%;
}
#koszyczek{
    width: 400px;
    height: 400px;
    background-color: white;
    border: 6px solid black;
    margin-top: -1140px;
    margin-left: 1455px;
    z-index: 1;
    position: relative;
    border-radius: 20px;
    display: none;
    overflow: scroll;
    align-items: flex-end;
    justify-content: center;
    flex-direction: row;
}
#karty{
    background-color: white;
    margin: 10px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    align-content: center;
    margin-left: 909px;
    margin-right: 909px;
}
.a{
    text-decoration: none;
    color: blueviolet;
    display: flex;
    border: 1px solid black;
    padding: 1px;
    padding-left: 9px;
    padding-right: 9px;
}
#doplat{
    display: flex;
    text-decoration: none;
    color: blueviolet;
    display: flex;
    border: 1px solid black;
    border-radius: 5px;
    width: 100%;
}
#cena{
    margin-top: 0px;
    margin-right: 20px;
}

    </style>
</head>
<body>
    
<div id="top">
            <div id="logo"><a href="index.php"><img src="loga/image (4).png" alt="logo" id="logo" height="139px" width="139px"></a></div>
            <div id="menu">
                <a href="index.php" class="a1">Strona Główna</a>
                <a href="nas.php" class="a1">O nas</a>
                <a href="kontakt.php" class="a1">Kontakt</a>
                <button onclick="koszpudlon()" ><img src="loga/shopping-cart.png" alt="koszyk" id="kosz" height="45px" width="45px"></button>
                <p id="licz"></p>
            </div>
        </div>
    <div id="main">
        <h1>O Nas</h1><br>
        Nie jestem do końca pewien co powinienem tu wpisać więc wrzuce tu przepis na sphagetti: <br><br>

        <div>
            Składniki:<br>
            300 mlpassaty pomidorowej<br>
            300 gmielonej wołowiny<br>
            300 gmakaronu spaghetti<br>
            30 gtartego parmezanu<br>
            1łyżka koncentratu pomidorowego<br>
            1ząbek czosnku<br>
            1mała cebula<br>
            0.5łyżeczki suszonego tymianku<br>
            0.5łyżeczki suszonego oregano<br>
            oliwa z oliwek<br>
            sól, pieprz<br>
            świeża bazylia<br><br><br>
        </div>
        <div>
            Przygotowanie:<br>
            1.Na głębokiej patelni rozgrzej około 2 łyżki oliwy z oliwek.<br>
            <br>
            2.Na rozgrzaną patelnię wrzuć czosnek i cebulę, a po chwili dodaj mięso, rozdrabniaj je np. widelcem, tak aby nie powstały grube mięsne grudki.<br>
            <br>
            3.Do mięsa dodaj zioła oraz koncentrat. Całość podgrzewaj przez chwilę, dodaj passatę (przecier pomidorowy), gotuj na małym ogniu około 30 minut.<br>
            <br>
            4.Makaron ugotuj al dente, podawaj go z sosem, serem, i bazylią.<br>
        </div>

            
        
        
  
    </div>
    <div id="koszyczek">

        <div id="doplat">Cena:<p id="cena"></p><a href="pods.php">przejdz do platnosci</a></div>
    </div>
        <div id="stopka">

        </div>

        <script>
            let wid = 0;
            let con = 0;
            let cena = 0;
            let c = document.getElementById("cena")
            let b = document.getElementById("but")
            c.innerHTML = cena + ".00zł";
            function koszyk(){
                let p = document.getElementById("licz");
                p.style.display = "block";
                con++     
                p.innerHTML = con;
                cena += 24.99;
                c.innerHTML = cena.toFixed(2) + "zł";
                if(b.clicked == true){
                    alert("aaaa")
                }

                
            }
            function koszpudlon(){
                let pudlo = document.getElementById("koszyczek");
                if(wid == 0){
                pudlo.style.display = "flex";
                wid = 1;
                }else{
                    pudlo.style.display = "none";
                    wid = 0;
                }
            }


        </script>
</body>
</html>