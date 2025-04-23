let win = window;
let dom = document;

let header = document.querySelector('header h1');
let parrafos = document.querySelectorAll('main p')

let imagenes = dom.images;
let hojas_estilos = dom.styleSheets;
let scripts = dom.scripts;

let listas = dom.querySelectorAll('ul.list > li.item');

let cards = dom.querySelector('div.cards >div.card')
let body=dom.querySelector("body")
// console.log(imagenes)

// console.log(imagenes);
// console.log(scripts);
// console.log(hojas_estilos);

console.log("Padre",cards.parentElement)
console.log("Hermano", cards.previousElementSibling);
console.clear();

let elemento = document.querySelector('#elementos2');
elemento.textContent="Nuevo Texto";
elemento.innerHTML = "<p>texto</p><p>texto</p>";

setTimeout(() => {
  body.classList.add("bg-red")
}, 6000);