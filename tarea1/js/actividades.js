let actividades = {
    "1" : {
            "inicio" : "2025-06-14 08:45",
            "termino": "2025-06-17 20:45",
            "comuna" : "San Bernardo",
            "region" : "Región Metropolitana de Santiago",
            "sector" : "Estadio Municipal",
            "tema" : "Juegos",
            "descripcion" : "Autitos Chocadores Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
            "fotos" : ["../pics//bumper_cars.jpg"],
            "nombre" : "Rodrigo Rodriguez",
            "email" : "rodrigo@rodriguez.com",
            "telefono" : "",
            "contacto" : [["Whatsapp","https://wa.me/qr/TRALALEROTRALALA"], ["X","@rorrororrito_93"]]
    },
    "2" : {
        "inicio" : "2025-04-10 13:00",
        "termino": "2025-04-10 15:00",
        "comuna" : "Ñuñoa",
        "region" : "Región Metropolitana de Santiago",
        "sector" : "Plaza Ñuñoa",
        "tema" : "Juegos",
        "descripcion" : "Abrazos gratis owo",
        "fotos" : ["../pics/free_hugs.jpg"],
        "nombre" : "Makoto Niijima",
        "email" : "makoto@niijima.jp",
        "telefono" : "+819.19191919",
        "contacto" : [["Pinterest","xXqueenXx"], ["Telegram","@xXqueenXx"]]
    },
    "3" : {
        "inicio" : "2028-02-27 23:45",
        "termino": "2029-02-28 23:45",
        "comuna" : "Santiago",
        "region" : "Región Metropolitana de Santiago",
        "sector" : "Plaza de Armas",
        "tema" : "Música",
        "descripcion" : "Clases de Canto (Gratis :0)",
        "fotos" : ["../pics/guy_singing.jpg"],
        "nombre" : "Paco Paquito",
        "email" : "pacoxd@paquito.com",
        "telefono" : "+569.43432020",
        "contacto" : [["Whatsapp","https://wa.me/qr/PACOPAQUITO"], ["Tiktok","@tistos_pkito"], ["X","@tuiter_pkito"]]
    },
    "4" : {
        "inicio" : "2027-08-19 14:00",
        "termino": "2027-12-24 18:20",
        "comuna" : "Puente Alto",
        "region" : "Región Metropolitana de Santiago",
        "sector" : "Centro",
        "tema" : "Manualidades",
        "descripcion" : "Taller de Tejido Crochet",
        "fotos" : ["../pics/crochet.jpg"],
        "nombre" : "Doña Eugenia",
        "email" : "donha@eugenia.com",
        "telefono" : "+569.00001111",
        "contacto" : []
    },
    "5" : {
        "inicio" : "2026-02-14 09:15",
        "termino": "2026-02-14 22:15",
        "comuna" : "La Florida",
        "region" : "Región Metropolitana de Santiago",
        "sector" : "Mall Plaza Vespucio",
        "tema" : "Regalos",
        "descripcion" : "Se regalan chocolates",
        "fotos" : ["../pics/chocolate.jpg"],
        "nombre" : "Shiori Novella",
        "email" : "shiori.novella@holo.jp",
        "telefono" : "571.98765432",
        "contacto" : [["X","@shiorinovella"]]
    },
}        
let actividad_count = 5; 
var actividad_index = "1";
function showDetails(number) {
    tabla1 = document.getElementById("actividad-table");
    tabla2 = document.getElementById("actividad-table-2");
    fotos = document.getElementById("fotos");
    let row = document.createElement("tr");
    let inicio = document.createElement("td");
    inicio.innerText = actividades[number].inicio;
    row.appendChild(inicio);
    let termino = document.createElement("td");
    row.appendChild(termino);
    termino.innerText = actividades[number].termino;
    let comuna = document.createElement("td");
    comuna.innerText = actividades[number].comuna;
    row.appendChild(comuna);
    let region = document.createElement("td");
    region.innerText = actividades[number].region;
    row.appendChild(region);
    let sector = document.createElement("td");
    sector.innerText = actividades[number].sector;
    row.appendChild(sector);
    let tema = document.createElement("td");
    tema.innerText = actividades[number].tema;
    row.appendChild(tema);
    let descripcion = document.createElement("td");
    let desc_parag = document.createElement("p");
    desc_parag.innerText = actividades[number].descripcion;
    descripcion.appendChild(desc_parag);
    row.appendChild(descripcion);
    tabla1.appendChild(row);
    actividades[number].fotos.forEach(src => {
        let  picture = document.createElement("picture");
        let  img = document.createElement("img");
        img.src = src;
        img.width = 350;
        img.height = 350;
        picture.appendChild(img);
        fotos.appendChild(picture);
    });
    let row2 = document.createElement("tr");
    let nombre = document.createElement("td");
    nombre.innerText = actividades[number].nombre;
    row2.appendChild(nombre);
    let email = document.createElement("td");
    row2.appendChild(email);
    email.innerText = actividades[number].email;
    let telefono = document.createElement("td");
    telefono.innerText = actividades[number].telefono;
    row2.appendChild(telefono);
    let contacto = document.createElement("td");
    let contacto_txt = "";
    actividades[number].contacto.forEach(src => {
        contacto_txt += src[0] + ": " + src[1] + "\n";
    });
    contacto.innerText = contacto_txt;
    row2.appendChild(contacto);
    tabla2.appendChild(row2);
}

function goToDetails(index){
    window.location.href = "detalles" + index + ".html";
    return false;
}