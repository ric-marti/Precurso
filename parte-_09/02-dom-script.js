// 11-Ejemplo de REFERENCIAL ELEMENTOS:

// - 1) Cogemos EL/un elemento por su ID
let title = document.getElementById("title");

// - 3) Cogemos TODOS los elementos que tienen el MISMO CLASS
let paragraphs = document.getElementsByClassName("paragraph");

// - 2) Cogemos TODOS los elementos que son del MISMO TIPO/elemento
let ps = document.getElementsByTagName("p");

// - 4) Coge UN ELEMENTO por su #ID/.class/elemento, la PRIMERA coincidencia
let titleQS = document.querySelector("#title");

// - 4) Cogemos el PRIMER ELEMENTO que coincida con el CLASS/elemento
let firstParagraph = document.querySelector(".paragraph");

// - 4) Cogemos el PRIMER ELEMENTO que coincida con el TIPO/class
let firstP = document.querySelector("p");

// - 5) Cogemos TODOS los elementos que tienen el MISMO CLASS/tipo
let allParagraphQS = document.querySelectorAll(".paragraph");

// - 5) Cogemos TODOS los elementos que son del MISMO TIPO/class
let allPsQS = document.querySelectorAll("p");

console.log(title);                 // <h1 id="title">TÍTULO</h1>
console.log(paragraphs);            // HTMLCollection(3) [...]
console.log(ps);                    // HTMLCollection(11) [...]
console.log(titleQS);               // <h1 id="title">TÍTULO</h1>
console.log(firstParagraph);        // <p class="paragraph">Un párrafo</p>
console.log(firstP);                // <p>...<p>
console.log(allParagraphQS);        // NodeList(3) [...]
console.log(allPsQS);               // NodeList(11) [...]


// --------------------------------11 -> 12-----------------------------------------
//12)

// Ejemplo de MODIFICAR ELEMENTOS:

// Sustituye el contenido del id="title" por uno nuevo:
document.querySelector("#title").innerHTML = "Nuevo título";

// Modifica el color del id="title"
document.querySelector("#title").style.color = "blue";

// Agrega una imagen
document.querySelector("img").src =
  "https://media.istockphoto.com/photos/heap-of-black-garbage-bags-cardboard-boxes-and-other-trash-picture-id182443425";

// Agrega un link de Google
document.querySelector("a").innerHTML = "Google";
document.querySelector("a").href = "https://www.google.com";

// ------------------------------12 -> 13-------------------------------------------

// 13: Añadiendo elementos al HTML directamente con innerHTML:

document.querySelector("body").innerHTML += `
    <div id="main">
        <h1 id="title">Título</h1>
        <p id="paragraph">Soy un párrafo</p>
    </div>
`;

// -----------------------------13 -> 14--------------------------------------------
// 14)

//Aqui haremos la magia. Primero recogemos el objeto body
let body = document.querySelector("body");

//Después incluimos un elemento <div>
body.innerHTML += `<div id="main"></div>`;

//Ahora seleccionamos ese elemento <div> por su id
let div = document.querySelector("#main");

//ahora pasamos a rellenarlo (+= para sumar uno detrás de otro y no = para quedarnos con el último)
for (let i = 0; i < 4; i++) {
  div.innerHTML += `                      
        <p>Soy el párrafo número ${i}</p> 
    `;
}

//Y al finalizar se podrá ver en la web el resultado

// -----------------------------14 -> 15--------------------------------------------
// 15: Ejercicio



