let personas = {
    name: {
        "Ana": {
            picture: "./el_lunes_sigo.jpg",
            age: 25,
            email: "ana@gmail.com",
            address: "Gran Vía Don Diego Lopez de Haro, 1, esc-izq, 3C",
            eyecolor: "blue",
        },
        "Pedro": {
            picture: "./el_lunes_sigo.jpg",
            age: 35,
            email: "pedro@gmail.com",
            address: "Maria Diaz de Haro 4, 3-izq",
            eyeColor: "red",
        },
        "Jose": {
            picture: "./el_lunes_sigo.jpg",
            age: 18,
            email: "jose@gmail.com",
            address: "Rodriguez Arias 55, esc-dch, 5E",
            eyeColor: "green",
        },
        "Maria": {
            picture: "./el_lunes_sigo.jpg",
            age: 29,
            email: "maria@gmail.com",
            address: "Doctor Areilza 25, Bajo-dch",
            eyeColor: "gray",
        },
        "Jon": {
            picture: "./el_lunes_sigo.jpg",
            age: 45,
            email: "jon@gmail.com",
            address: "Alameda Urquijo 42, 2-dch",
            eyeColor: "black",
        },
        "Pablo": {
            picture: "./el_lunes_sigo.jpg",
            age: 19,
            email: "pablo@gmail.com",
            address: "Alameda Rekalde 12, esc-dch, 6-izq",
            eyeColor: "brown",
        },
    },
}

let nombre = prompt("Escriba el nombre de la persona sobre la que se quieren datos.");
console.log(nombre);
console.log(personas.name);
console.log(personas.name[nombre]);
console.log(personas.name[nombre].eyeColor);
console.log("Pruebas OK");

if (nombre in personas.name) {
    // console.log(personas.name[nombre])           // De Prueba(OK)
    let body = document.querySelector("body");
    body.innerHTML += `<div id="main"></div>`;
    let div = document.querySelector("#main");
    div.innerHTML += `<h1>${nombre}</p>`;
    // El Centrado del h1 hecho en el doc.css, no he podido de otra forma.

    // document.documentElement.style.setProperty('display', 'flex');
    // document.documentElement.style.setProperty('justify-content', 'center');

    // div.innerHTML += `<img src="./el_lunes_sigo.jpg" alt="el lunes sigo por aqui"></img>`;
    div.innerHTML += `<img src=${personas.name[nombre].picture} alt="el lunes sigo por aqui"></img>`;

    div.innerHTML += `<p>Age: ${personas.name[nombre].age}</p>`;
    div.innerHTML += `<p>Email: ${personas.name[nombre].email}</p>`;
    div.innerHTML += `<p>Address: ${personas.name[nombre].address}</p>`;

    if (personas.name[nombre].eyeColor == "black") {
        document.documentElement.style.setProperty('color', 'white');    // Visto en: https://davidwalsh.name/css-variables-javascript
    }
    document.documentElement.style.setProperty('background-color', personas.name[nombre].eyeColor);
}
console.log("Ejercicio OK");


// Contar LENGTH de un OBJETO:      NO HE PODIDO CONTAR

// lenghtObjecto = Object.keys(personas.name).lenght;
// console.log(lenghtObjecto)


// const getLengthObject = (obj) => {
//     let = lengthObject = 0;
//     for (let key in obj) {
//         lengthObject++;
//     }
//     console.log(lengthObject);
//     return lengthObject;
// }
// getLengthObject = personas.name


// console.log(personas.name[nombre].slice(0))          // NO ME VA
// console.log(personas.name[nombre.charAt(0)])         // NO ME VA
// console.log(personas.name[nombre.substring(0)])      // NO ME VA

// for (i = 0; i <= personas.name.length; i++) {
//     if (nombre == personas.name(i)) {
//         console.log(personas.name[nombre].edad, personas.name[nombre].email, personas.name[nombre].address);
//     }
//     else if (i == personas.name.length) {
//         console.log("El nombre de la persona que has intruducido no está en nuestra base de datos.");
//     }
// }
