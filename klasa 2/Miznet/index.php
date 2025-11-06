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
    height: 100%;
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
    height: 100%;
    display: flex;
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
    /* width: 400px;
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
    /* align-items: flex-end;
    justify-content: center;
    flex-direction: row; */ 
    width: 400px;
    height: 400px;
    background-color: white;
    border: 6px solid black;
    margin-top: -1140px;
    margin-left: 1455px;
    z-index: 1;
    position: relative;
    border-radius: 20px;
    overflow: scroll;
    display:none;
    
    
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
    width: 380px;
    height:30px;
    background-color: white;
    z-index: 1;
    position: relative;
}
#cena{
    margin-top: 0px;
    margin-right: 20px;
}
#divens{

    width: 100%;
    height: 83%;
    display:flex;
    flex-direction:row;
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
        <div id="mangi">
            <div class="Produkt">
                <img src="mangi/kanojo.png" alt="manga" height="350px" width="300px"><br>
                Kanojo Okarishimasu<br>
                24.99zł<br>
                <button onclick="koszyk(this)" class="dokosza" value="a">Dodaj do koszyka</button>
            </div>
            <div class="Produkt">
                <img src="mangi/ansatsu.png" alt="manga" height="350px" width="300px"><br>
                Ansatsu Kyoshitsu<br>
                24.99zł<br>
                <button onclick="koszyk(this)" class="dokosza" value="b">Dodaj do koszyka</button>
            </div>
            <div class="Produkt">
                <img src="mangi/dxd.png" alt="manga" height="350px" width="300px"><br>
                High School DxD<br>
                24.99zł<br>
                <button onclick="koszyk(this)" class="dokosza" value="c">Dodaj do koszyka</button>
            </div>
            <div class="Produkt">
                <img src="mangi/exorcist.png" alt="manga" height="350px" width="300px"><br>
                Ao no Exorcist<br>
                24.99zł<br>
                <button onclick="koszyk(this)" class="dokosza" value="d">Dodaj do koszyka</button>
            </div>
            <div class="Produkt">
                <img src="mangi/franxx.png" alt="manga" height="350px" width="300px"><br>
                Darling in the franxx<br>
                24.99zł<br>
                <button onclick="koszyk(this)" class="dokosza" value="e">Dodaj do koszyka</button>
            </div>
            <div class="Produkt">
                <img src="mangi/haikyuu.png" alt="manga" height="350px" width="300px"><br>
                Haikyuu!!<br>
                24.99zł<br>
                <button onclick="koszyk(this)" class="dokosza" value="f">Dodaj do koszyka</button>
            </div>
            <div class="Produkt">
                <img src="mangi/hanayome.png" alt="manga" height="350px" width="300px"><br>
                Go-tobun no Hanayome<br>
                24.99zł<br>
                <button onclick="koszyk(this)" class="dokosza" value="g">Dodaj do koszyka</button>
            </div>
            <div class="Produkt">
                <img src="mangi/hori.png" alt="manga" height="350px" width="300px"><br>
                HoriMiya<br>
                24.99zł<br>
                <button onclick="koszyk(this)" class="dokosza" value="h">Dodaj do koszyka</button>
            </div>
            
        </div>
        
  
    </div>
    <div id="karty">
        <a href="index.php" class="a">1</a><a href="glowna2.php" class="a">2</a><a href="glowna3.php" class="a">3</a>
    </div>
    <div id="koszyczek">
        <p id="divens"></p>

        <div id="doplat">Cena:<p id="cena"></p><a href="pods.php">przejdz do platnosci</a></div>
    </div>
        <div id="stopka">

        </div>

        <script>
            let wid = 0;
            let con = 0;
            let cena = 0;
            let c = document.getElementById("cena");
            c.innerHTML = cena + ".00zł";
            let but = document.querySelectorAll("button");
            let divens = document.getElementById("divens");
            function koszyk(btn){
                
                let p = document.getElementById("licz");
                p.style.display = "block";
                con++     
                p.innerHTML = con;
                cena += 24.99;
                c.innerHTML = cena.toFixed(2) + "zł";
                console.log(btn.value)

                console.log(localStorage)
                if(btn.value == "a"){
                    divens.innerHTML += "Manga Kanojo Okarishimasu 24.99zł<br>"
                }else if(btn.value == "b"){
                    divens.innerHTML += "Manga Ansatsu Kyoshitsu 24.99zł<br>"
                }else if(btn.value == "c"){
                    divens.innerHTML += "Manga High School DxD 24.99zł <br>";
                }else if(btn.value == "d"){
                    divens.innerHTML += "Manga Ao no Exorcist 24.99zł<br>";
                }else if(btn.value == "e"){
                    divens.innerHTML += "Manga Darling in the Franxx 24.99zł<br>";
                }else if(btn.value == "f"){
                    divens.innerHTML += "Manga Haikyuu!! 24.99zł<br>";
                }else if(btn.value == "g"){
                    divens.innerHTML += "Manga Go-tobun no Hanayome 24.99zł<br>";
                }else if(btn.value == "h"){
                    divens.innerHTML += "Manga HoriMiya 24.99zł<br>";
                }

                
            }
            function koszpudlon(){
                let pudlo = document.getElementById("koszyczek");
                if(wid == 0){
                pudlo.style.display = "block";
                wid = 1;
                }else{
                    pudlo.style.display = "none";
                    wid = 0;
                }
            }


        </script>
</body>
</html>