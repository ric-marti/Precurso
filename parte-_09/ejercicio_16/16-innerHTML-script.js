let sistemaSolar = {
    mercurio: {
        nombre: 'mercurio',
        color: 'gris',
        temperatura: '350',
        imagen: "https://www.astromia.com/fotosolar/fotos/planetamercurio.jpg",
    },
    venus: {
        nombre: 'venus',
        color: 'blanco',
        temperatura: '460',
        imagen: "https://upload.wikimedia.org/wikipedia/commons/8/85/Venus_globe.jpg",
    },
    tierra: {
        nombre: 'tierra',
        color: 'morado',
        temperatura: '14',
        imagen: "https://upload.wikimedia.org/wikipedia/commons/1/1f/As08-16-2593.jpg",
    },
    marte: {
        nombre: 'marte',
        color: 'rojo',
        temperatura: '-46',
        imagen: "https://upload.wikimedia.org/wikipedia/commons/6/68/Schiaparelli_Hemisphere_Enhanced.jpg",
    }, 
    jupiter: {
        nombre: 'jupiter',
        color: 'marrón',
        temperatura: '-121',
        imagen: "https://upload.wikimedia.org/wikipedia/commons/7/71/PIA22946-Jupiter-RedSpot-JunoSpacecraft-20190212.jpg",
    },
    saturno: {
        nombre: 'saturno',
        color: 'amarillo',
        temperatura: '-130',
        imagen: "https://upload.wikimedia.org/wikipedia/commons/c/c7/Saturn_during_Equinox.jpg",
    },
    urano: {
        nombre: 'urano',
        color: 'azul',
        temperatura: '-205',
        imagen: "http://www.manzanares.es/v2/sites/paseo/img/urano/urano1.jpg",
    },
    neptuno: {
        nombre: 'neptuno',
        color: 'azul',
        temperatura: '-220',
        imagen: "https://upload.wikimedia.org/wikipedia/commons/6/63/Neptune_-_Voyager_2_%2829347980845%29_flatten_crop.jpg",
    },
    ceres: {
        nombre: 'ceres',
        color: 'gris',
        temperatura: '50',
        imagen: "https://upload.wikimedia.org/wikipedia/commons/7/76/Ceres_-_RC3_-_Haulani_Crater_%2822381131691%29_%28cropped%29.jpg",
    },
    pluton: {
        nombre: 'plutón',
        color: 'blanco',
        temperatura: '-229',
        imagen: "https://upload.wikimedia.org/wikipedia/commons/e/ef/Pluto_in_True_Color_-_High-Res.jpg",
    },
    haumea: {
        nombre: 'haumea',
        color: 'gris',
        temperatura: '75',
        imagen: "https://upload.wikimedia.org/wikipedia/commons/2/2b/Haumea_Hubble.png",
    },
    makemake: {
        nombre: 'makemake',
        color: 'rojo',
        temperatura: '38',
        imagen: "https://upload.wikimedia.org/wikipedia/commons/2/29/Makemake_and_its_moon.jpg",
    },
    eris: {
        nombre: 'eris',
        color: 'blaco',
        temperatura: '-300',
        imagen: "https://upload.wikimedia.org/wikipedia/commons/5/5b/Eris_and_dysnomia2.jpg",
    },
}



let planeta1 = prompt("Escribe el nombre de un planeta solar en minúsculas.");
let planeta2 = prompt("Escribe el nombre de un planeta solar distinto al anterior, también en minúsculas.");
let planeta3 = prompt("Escribe el nombre de un planeta solar distinto a los dos previos, también en minúsculas.");

let planetas = [planeta1, planeta2, planeta3];
console.log(planetas);
let orden = ["primer", "segundo", "tercer"];

let subClaves = ["nombre", "imagen", "color", "temperatura"];    // Incorrecta(?)
// console.log(sistemaSolar[planeta1[0]].subClaves[0]);             // Incorrecta(?)
// console.log(sistemaSolar[planeta1].nombre);                      //Correcta

let body = document.querySelector("body");      // Guardamos el body
body.innerHTML += `<div id="main"></div>`;      // Crear/añadir nuevo elemento (+=) HTML 'innerHTML' y escribir elemento
let div = document.querySelector("#main");      // Para referirse al id con '#' y una class con '.'.
div.innerHTML += `<h1 id="h1">Información sobre los planetas del sistema solar introducidos</h1>`;      // Título de la página
document.querySelector('#h1').style.setProperty('text-align', 'center');
div.innerHTML += `<div id="cartas"></div>`;      // Crear/añadir nuevo elemento (+=) HTML 'innerHTML' y escribir elemento
let div2 = document.querySelector("#cartas");

// div.innerHTML += `<div class="card${i}"></div>`;

for (i = 0; i < 3; i++) {
    if (i == 0 && planetas[i] in sistemaSolar || 
        i == 1 && planetas[i] in sistemaSolar && planetas[i] != planetas[i-1] || 
        i == 2 && planetas[i] in sistemaSolar && planetas[i] != (planetas[i-1] && planetas[i-2])) {

        let planeta = sistemaSolar[planetas[i]];
        div2.innerHTML += `<div id="card${i+1}" class="cards"></div>`;
        // document.querySelector("#card"+(i+1)).style.setProperty('display', 'flex');
                
        let card = document.querySelector("#card"+(i+1));

        // for (c = 0; c < 4; c++) {
        //     console.log(planeta[subClaves[c]]);
        // }

        card.innerHTML += `<h2 id="title${i+1}">${planeta.nombre}</h2>}`;
        document.querySelector("#title"+(i+1)).style.setProperty('display', 'flex');
        document.querySelector("#title"+(i+1)).style.setProperty('justify-content', 'center');

        // Revisar width y height, tamaño de cartas desproporcionado (por el tamaño de la imagen, INTUYO)
        card.innerHTML += `<img id="img${i+1}" src=${planeta.imagen} alt="imagen-${planeta.nombre}" width=30% height=30%></img>}`;
        document.querySelector("#img"+(i+1)).style.setProperty('display', 'flex');
        document.querySelector("#img"+(i+1)).style.setProperty('margin-left', 'auto');
        document.querySelector("#img"+(i+1)).style.setProperty('margin-right', 'auto');    

        card.innerHTML += `<p><b>Color:</b> ${planeta.color}</p>}`;
        // document.querySelector("#card"+(i+1)).style.setProperty('background-color', `${planeta.color}`);

        card.innerHTML += `<p><b>Temperatura:</b> ${planeta.temperatura}</p>}`;
    }

    else {
        console.log('El nombre "' + planetas[i] + '", del ' + orden[i] + ' planeta introducido, no coincide con ninguno existente, está mál escrito o bien está repetido.');
    }
}
let formato = document.querySelector("#cartas").style;
formato.setProperty("display", "flex");
formato.setProperty("text-align", "center");
formato.setProperty("margin-left", "3%");
formato.setProperty("margin-right", "3%");

document.querySelector('#main').style.setProperty('background', 'black');
document.querySelector('#main').style.setProperty('color', 'white');

