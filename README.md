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


  <!DOCTYPE html>
<html lang="pt-br">

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
