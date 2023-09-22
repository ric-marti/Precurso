//  Ejemplo 01 - persona

let persona = {
    nombre: "Jordi",    // clave: valor,
    edad: 55,           // clave: valor,
};

console.log(persona);           // objeto
console.log(persona.nombre);    // objeto.clave(nombre de la propiedad)
console.log(persona.edad);      // objeto.clave(nombre de la propiedad)

// ------------------------------------------------------------------------------
console.log("");
// Ejemplo 02 - persona-clave-corchetes

// En este caso, la clave de un objeto es un string con espacios, por lo que a la hora 
// de sacar el valor por "console.log" mediante "objeto.valor", deberemos de poner el 
// objeto seguido de el valor entre corchetes "objeto[valor]".

let coche = {
    "marca y modelo": "Ford Sierra",
    caballos: 218,
};

let marcaModelo = "marca y modelo";
console.log(coche);
console.log(coche[marcaModelo]);        // objeto[valor(nombre de la porpiedad)]
console.log(coche["marca y modelo"]);   // igual pero sin asignar un nuevo nombre a la clave/porpiedad
console.log(coche.caballos);

// ------------------------------------------------------------------------------
console.log("");
// Ejercicio 03 - Crear un objeto con estas propiedades: Color-rojo, Marca-Ford, Modelo-Focus, Motor-cilindros:4-capacidad:2.2.

let car = {
    color: "rojo",
    marca: "Ford",
    modelo: "Focus",
    motor: {
        cilindros: 4,
        capacidad: 2.2,
    },
};

console.log(car);                       // {all between brackets run}
console.log(car.color);                 // rojo
console.log(car.motor);                 // {cilindros: 4, capacidad: 2.2]
console.log(car.motor.cilindros);       // 4
// console.log(car.motor[cilindros]);      // error

// ------------------------------------------------------------------------------
console.log("");
//Ejemplo 04 - Cambiar el valor de un atributo (referenciarlo y asignarlo un nuevo valor)

let man = {
    nombre:"Pedro",
    edad: 22,
};
console.log(man);

man.nombre = "Pepe";
console.log(man.nombre);
man.edad = 41;
console.log(man.edad);
console.log(man);

// ------------------------------------------------------------------------------
console.log("");
// Ejemplo 05-06 - Añadir y eliminar atributos

let woman = {
    nombre: "Maria",
    edad: 30,
};
console.log(woman);

woman.primerApellido = "Gimenez";       // Añadir - objeto.propiedad-a-añadir = valor;
console.log(woman);
console.log(woman.primerApellido);

delete woman.edad;                      // Eliminar - delete objeto.propiedad-a-eliminar;
console.log(woman);

// ------------------------------------------------------------------------------
console.log("");
// Ejercicio 07 - Crear un objet con un nombre y edad y  mostrarlo por consola para despues 
//              añadir una altura y mostrar el nuevo objeto.

let alguien = {
    nombre: "Jose",
    edad: 35,
}
console.log(alguien);

alguien.altura = 2.15;
console.log(alguien.altura);
console.log(alguien);

// ------------------------------------------------------------------------------
console.log("");
// Ejemplo 08 - Objetos con objetos y arrays.
// Los objetos  guardan valores dentro de sus propiedades, valores que a su vez puede ser 
// otros objetos, arrays y/o funciones.

let estudiante = {
    nombre: "Juan",
    edad: 32,
    mascota: {
        tipo: "Perro",
        nombre: "Kyra",
    },
    asignaturas: [
        {nombre: "Historia", notas: [7,8,5] },
        {nombre: "Matemáticas", notas: [4,3,9] },
        {nombre: "Filosofía", notas: [3,1,4] },
    ],
};
console.log(estudiante);
console.log(estudiante.nombre);
console.log(estudiante.mascota.tipo);
console.log(estudiante.asignaturas);
console.log(estudiante.asignaturas[1]);

// ------------------------------------------------------------------------------
console.log("");
// Ejercici 09 - Objetos anidados

let randomObject = {
    apellido: "Object",
    board: "broken",
}
console.log(randomObject);
console.log(randomObject.board);

randomObject.nombre = "Random";
console.log(randomObject);
console.log(randomObject.board);
console.log(randomObject.nombre);

// ------------------------------------------------------------------------------
console.log("");
// Ejercicio 10 - Objetos anidados II
// Haz un generador de nombres (de superheroe):

// 1) Pide al usuario la fecha de nacimiento, en nombre y el apellido.
// 1.1) Al mostrar el nombre por consola, la primera letra del nombre indicara la propedad del objeto "letraNombre".
// 1.2) Al mostrar el nombre por consola, la última letra del apellido indicará la propiedad del objeto "letraApellido".
// 1.3) El último número del año de la fecha de nacimiento indicará la propiedad del objeto "fechaNacimiento".
// 2) Muestra el nombre conseguido.

// Ej.: "Rucesio" --> letraNombre = r

let superheroe = {
    name: prompt("Escribe tu nombre:"),
    surname: prompt("Escribe tu apellido:"),
    bornDate: prompt("Escribe tu fecha de nacimiento (dd/mm/yyyy):"),
};

// let name = prompt("Escribe tu nombre:");
// let surname = prompt("Escribe tu apellido:");
// let bornDate = prompt("Escribe tu fecha de nacimiento:");

console.log(superheroe.name);
console.log(superheroe.surname);
console.log(superheroe.bornDate);

// Access last character of a string: https://forfrontend.tips/obtener-el-ltimo-carcter-de-un-string-en-javascript
// - cadena.split('')[cadena.length - 1]
// - cadena.charAt(cadena.length -1)
// * cadena.slice(-1)
// - cadena.substing(cadena.length - 1, cadena.length)

letterName = superheroe.name[0];
letterSurname = superheroe.surname.slice(-1);
DateBorn = superheroe.bornDate.slice(-1);

console.log(letterName);
console.log(letterSurname);
console.log(DateBorn);
