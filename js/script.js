import books from "./books.js" 

// ------- Fase 1: Utilizar métodos de manejo del DOM ------- //


const primerosLibros = document.getElementById("primerosLibros");
const tarjetas = document.createElement("div");
const atributoTarjetas = document.createAttribute("class");
atributoTarjetas.value = "tarjetas"
tarjetas.setAttributeNode(atributoTarjetas);
primerosLibros.appendChild(tarjetas);



for(let i = 0; i < books.length; i++) {

    const tarjeta = document.createElement("div");
    const atributoTarjeta = document.createAttribute("class");
    atributoTarjeta.value = "tarjeta";
    tarjeta.setAttributeNode(atributoTarjeta);

    const h3 = document.createElement("h3");
    h3.textContent = books[i].author;

    const h4 = document.createElement("h4");
    h4.textContent = books[i].country;

    const img = document.createElement("img");
    img.src = books[i].imageLink;

    const p = document.createElement("p");
    p.textContent = books[i].language;

    const a = document.createElement("a");
    a.href = books[i].link;
    a.text = "Encuentralo aquí";

    const pPages = document.createElement("p");
    pPages.textContent = `Numero de páginas: ${books[i].pages}`;

    const h4Tittle = document.createElement("h4");
    h4Tittle.textContent = books[i].title;;

    const pYear = document.createElement("p");
    pYear.textContent = books[i].year;

    tarjeta.appendChild(h3);
    tarjeta.appendChild(h4);
    tarjeta.appendChild(img);
    tarjeta.appendChild(p);
    tarjeta.appendChild(a);
    tarjeta.appendChild(pPages);
    tarjeta.appendChild(h4Tittle);
    tarjeta.appendChild(pYear);
    tarjetas.appendChild(tarjeta);
}


// ------- Fase 2: Utilizar template string ------- //

const primerosLibros2 = document.getElementById("primerosLibros");
const tarjetas2 = document.createElement("div");
const atributoTarjetas2 = document.createAttribute("class");
atributoTarjetas2.value = "tarjetas"
tarjetas2.setAttributeNode(atributoTarjetas2);
primerosLibros2.appendChild(tarjetas2);


let contenido = "";

for (let i = 0; i < books.length; i++) {
  contenido += `
    <div class="tarjeta">
      <h3>${books[i].author}</h3>
      <h4>${books[i].country}</h4>
      <img src="${books[i].imageLink}" alt="Portada de ${books[i].title}">
      <p>${books[i].language}</p>
      <a href="${books[i].link}" target="_blank">Encuéntralo aquí</a>
      <p>Número de páginas: ${books[i].pages}</p>
      <h4>${books[i].title}</h4>
      <p>${books[i].year}</p>
    </div>
  `;
}
tarjetas2.innerHTML = contenido;
