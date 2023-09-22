let resultado;
let numero1 = 3;
let numero2 = 5;

resultado = numero1 + numero2;
// alert("El resultado es " + resultado);

numero1 = 10;
numero2 = 7;
resultado = numero1 + numero2;
// alert("El resultado es " + resultado);

numero1 = 5;
numero2 = 8;
resultado = numero1 + numero2;
// alert("El resultado es " + resultado);

//---------------------------------------- Ej - 02.: Lo que sería el ejemplo

// function suma_y_muestra() {
//     resultado = numero1 + numero2;
//     alert("El resultado es " + resultado);
// }

//--------------------------------------- Ej - 03.: Función con argumentos I

// function suma_y_muestra(PrimerNumero, segundoNumero) {
//     let resultado = PrimerNumero + segundoNumero;
//     alert("El resultado es " + resultado);
// }
// let num1 = 3;
// let num2 = 5;
// suma_y_muestra(num1, num2);

//--------------------------------------- Ej - 04.: Función con argumentos II

// function calculaPrecioMargen(precio) {
//     let gastosPorCuenta = 0.1;
//     let gastosPasarela = 0.02;
//     let impuestos = 1.21;
//     let margenBruto = (precio/impuestos) - gastosPorCuenta - gastosPasarela;
//     alert("Margen Bruto de "+precio+": " + margenBruto);
//     return margenBruto;                                     // Necesario para devolver el resultado... 
// }
// calculaPrecioMargen(19.99);

//--------------------------------------- Ej - 05.:

// let margen = calculaPrecioMargen(29.99);                   // AQUÍ
// alert("Margen bruto (29.99): " + margen);


//--------------------------------------- Ej - 06.:

// function calculaPrecioMargin(precio, impuestosPorcentaje) {
//     let gastosPorCuenta = 0.1;
//     let gastosPasarela = 0.02;
//     impuestosPorcentaje = (impuestosPorcentaje/100) + 1;
//     console.log(impuestosPorcentaje);
//     let margenBruto = (precio/impuestosPorcentaje) - gastosPorCuenta - gastosPasarela; 
//     // alert("MARGEN BRUTO de "+precio+": " + margenBruto);
//     return margenBruto;                                     // Necesario para devolver el resultado...
// }
// let margin1 = calculaPrecioMargin(29.99, 21);
// alert("MARGEN BRUTO de 29.99: " + margin1);
// let margin2 = calculaPrecioMargin(19.99, 21);
// alert("MARGEN BRUTO de 19.99: " + margin2);
// let margin3 = calculaPrecioMargin(9.99, 21);
// alert("MARGEN BRUTO de 9.99: " + margin3);
// let margin4 = calculaPrecioMargin(1.99, 21);
// alert("MARGEN BRUTO de 9.99: " + margin4);

//---------------- EJERCICIO FUNC.1 --------------------

// function saludaHola(num) {
//     for (i = 0; i < num; i++) {
//         console.log("Hola!");
//     }
// }
// saludaHola(5);
// console.log("---------");
// saludaHola(3);

//---------------- EJERCICIO FUNC.2 --------------------

// function grandePequeño(num1, num2) {
//     if (num1 > num2) {
//         alert(true);
//         console.log("El primer número es más grande.");
//     }
//     else {
//         alert(false);
//         console.log("El primer número NO es más grande.");
//     }
// }
// grandePequeño(1,2);

//---------------- EJERCICIO FUNC.3 --------------------

// function dameDosNums (num1, num2) {
//     let div = num1/num2;
//     alert(div);
//     if (num2 != 0) {
//         begin()
//     }  
// }
// function begin() {
//     numero1 = prompt("Escibe un número: ");
//     numero2 = prompt("Escibe otro número: ");
//     dameDosNums(numero1, numero2);    
// }
// begin()

//---------------- EJERCICIO FUNC.4 --------------------

// function exchange(euros, cambio) {
//     let libra = 0.866;
//     let dólaresAmericanos = 1.066;
//     let jenes = 157.95;
//     if (cambio == "libra") {alert(euros + "euros serían " + (euros*libra) + " libras al cambio.");}
//     if (cambio == "dólar americano") {alert(euros + "euros serían " + (euros*dólaresAmericanos) + " dólares americanos al cambio.");}
//     if (cambio == "yen") {alert(euros + "euros serían " + (euros*jenes) + " yenes al cambio.");}
// }
// exchange(1, "dólar americano");


//--------------------------------------- Ej - 07.: OUTPUT-1,2,3,4...

// button = document.querySelector("#btn7");
// button.addEventListener("click", addOne);    // *
// function addOne() {
//     p = document.querySelector("#num7");
//     p.innerHTML = parseInt(p.innerHTML) + 1;    // Viene en string, parseo a int y sumo el valor parámetro para después añadirlo al p.innerHTML.
// }


//--------------------------------------- Ej - 08.: OUTPUT-4

// boton = document.querySelector("#btn8");
// boton.addEventListener("click", addThree08(3));  // *
// function addThree08(num) {
//     p = document.querySelector("#num8");
//     p.innerHTML = parseInt(p.innerHTML) + num;
// }

//--------------------------------------- Ej - 09.: OUTPUT-

// botton = document.querySelector("#btn9");
// botton.addEventListener("click", function () {   // *
//     addThree09(3);
// });
// function addThree09(num) {
//     p = document.querySelector("#num9");
//     p.innerHTML = parseInt(p.innerHTML) + num;
// }

//---------------- EJERCICIO DOM.1 --------------------

let number = parseInt(prompt("Escribe un número:"));
body = document.querySelector("#dom-1");
body.innerHTML += `<p id="num-dom-1">${number}</p>`;
body.innerHTML += `<button id="btn-dom-1">Click on me</button>`;
button = document.querySelector("#btn-dom-1");
button.addEventListener("click", function () {
    addNum(number);
});
function addNum(num) {
    p = document.querySelector("#num-dom-1");
    p.innerHTML = parseInt(p.innerHTML) + num;
}

//---------------- EJERCICIO DOM.2 --------------------

let variables = [false, true];
let i = 0;
let n = 0;
// console.log("X"+i);
body = document.querySelector("#dom-2");
body.innerHTML += `<p id="num-dom-2">la variable está en ${variables[i]}</p>`;
body.innerHTML += `<button id="btn-dom-2">Click on me</button>`;
button = document.querySelector("#btn-dom-2");
button.addEventListener("click", function () {
    // console.log("A"+i);
    changeValue(i);
    // console.log("B"+i);
});

function changeValue(i) {
    // console.log("C"+i);
    p = document.querySelector("#num-dom-2");
    n++;
    // console.log("n: " + n);
    // console.log("n%2: " + (n % 2));
    if (n % 2 == 0) {i=0;}
    else if (n % 2 != 0) {i=1;}
    // console.log(i);
    p.innerHTML = `<p>la variable está en ${variables[i]}</p>`;
}

//---------------- EJERCICIO DOM.3 --------------------

let count = 0;
body = document.querySelector("#dom-3-magic");
body.innerHTML = `<button id="btn-dom-3-magic"><img src="./reverso.png" alt="REverso carta magic"></button>`;

boton = document.querySelector("#btn-dom-3-magic");
// boton.innerHTML = `<img src="./reverso.png" alt="REverso carta magic">`;
boton.addEventListener("click", function () {
    changeCard();
});

function changeCard() {
    img = document.querySelector("#btn-dom-3-magic");
    count++;
    console.log("Count: " + count);
    if (count % 2 == 0) {img.innerHTML = `<img src="./reverso.png" alt="Reverso carte magic">`;}
    else if (count % 2 != 0) {img.innerHTML = `<img src="./anverso.jpg" alt="Anverso carte magic">`;}
    // if (count % 2 == 0) {img.innerHTML = `<img src="./anverso.jpg" alt="ANverso carta magic"></img>`;}
    // else if (count % 2 != 0) {img.innerHTML = `<img src="./reverso.png" alt="REverso carta magic"></img>`;}
}
