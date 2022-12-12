# Calculadora
## By KaioYt
<br>
<p>Calculadora desenolvida para aprimorar o meu JavaScript</p>

<h1>Calculadora com Designer Minimalista</h1>

<div>
  <img src="https://user-images.githubusercontent.com/103225660/206946668-c9118e2d-96f3-455d-b65d-ca31dbc475bf.png" alt="...Error">
</div>

### Link da Calculadora
<a>https://calculadora-by-kaioyt.netlify.app/</a>


## Códigos Usados para Desenvolver

#### Código HTML

```

  <!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/style.css">
    <link href="https://fonts.googleapis.com/css2?family=Rubik+Vinyl&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap" rel="stylesheet">
    <title>Calculadora</title>
</head>
<body>

    <div class="background">
        <h1>Developed By KaioYt</h1>
        <div class="calc">
            <h1>Calculadora</h1>
            <p id="findings"></p>
            <table>
                <tr>
                    <td><button class="bnt" onclick="clean('')">C</button></td>
                    <td><button class="bnt" onclick="back('')"><</button></td>
                    <td><button class="bnt" onclick="insert('/')">/</button></td>
                    <td><button class="bnt" onclick="insert('*')">X</button></td>
                </tr>

                <tr>
                    <td><button class="bnt" onclick="insert('7')">7</button></td>
                    <td><button class="bnt" onclick="insert('8')">8</button></td>
                    <td><button class="bnt" onclick="insert('9')">9</button></td>
                    <td><button class="bnt" onclick="insert('-')">-</button></td>
                </tr>

                <tr>
                    <td><button class="bnt" onclick="insert('4')">4</button></td>
                    <td><button class="bnt" onclick="insert('5')">5</button></td>
                    <td><button class="bnt" onclick="insert('6')">6</button></td>
                    <td><button class="bnt" onclick="insert('+')">+</button></td>
                </tr>

                <tr>
                    <td><button class="bnt" onclick="insert('1')">1</button></td>
                    <td><button class="bnt" onclick="insert('2')">2</button></td>
                    <td><button class="bnt" onclick="insert('3')">3</button></td>
                    <td rowspan="2"><button  class="bnt" style="height: 110px;" onclick="calc('')">=</button></td>
                </tr>

                <tr>
                    <td colspan="2"><button class="bnt" style="width: 110px;" onclick="insert('0')">0</button></td>
                    <td><button class="bnt" onclick="insert('.')">.</button></td>
                </tr>
                
            </table>
        </div>
    </div>

    <script src="script.js"></script>
</body>
</html>
    
     ```
  
  #### Código CSS
 
  
 ```
  
  @import url('https://fonts.googleapis.com/css2?family=Rubik+Vinyl&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap');


  *{
    margin: 0;
    padding: 0;
}

body{
    max-width: 1400px;
    margin: 0 auto;
    height: 100vh;
    width: 100%;
    color: white;
}

.background{
    background: rgb(29, 29, 29);
    height: 100vh;
    text-align: center;
}

.background h1{
    font-family: 'Rubik Vinyl', cursive;
}

.calc{
    position: absolute;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 20px;
    padding: 20px;
}

.calc h1{
    font-family: 'Poppins', sans-serif;
}

.bnt{
    width: 50px;
    height: 50px;
    font-size: 25px;
    border-radius: 10px;
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 5px 5px;
    border: none;
    background: rgb(26, 26, 26);
    color: white;
    transition: 0.2s all;
    margin: 5px;
    font-family: 'Poppins', sans-serif;
}

.bnt:hover{
    background-color: rgb(22, 22, 22);
    transition: 0.2s all;
}

.bnt:active{
    background-color: rgb(16, 16, 16);
    transform: scale(0.92);
}

#findings{
    background-color: white;
    width: 230px;
    height: 40px;
    margin: 5px;
    font-size: 25px;
    border-radius: 15px;
    color: black;
    text-align: right;
    padding: 5px;
    font-family: 'Poppins', sans-serif;
    font-weight: bold;
}

  ```
