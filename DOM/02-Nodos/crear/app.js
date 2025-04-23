let padre = document.querySelector(".container");
let node = document.createElement('h2');
node.textContent = "Titullo de segundo nivel";

let texto = document.createTextNode("Palabra para el nodo de texto");
padre.appendChild(node);
padre.appendChild(texto);

let lista = document.querySelector("#list");

let html = document.createElement("li");
let css= document.createElement("li");
let js = document.createElement("li");

html.classList.add("item");
css.classList.add("item");
js.classList.add("item");

html.textContent = "HTML";
css.textContent = "CSS";
js.textContent = "JS";

lista.append(html, css, js);




let card = document.querySelector(".card");
let lista_card=document.querySelector("#list")
let titulo = document.createElement("h2");
titulo.textContent = "Titulo de la card";
card.insertBefore(titulo, lista_card);

let beforebegin = document.createElement('li');
beforebegin.classList.add('item', 'before');
beforebegin.textContent = "Nuevo contenido ubicado antes de la lista ordenada";

let afterbegin = document.createElement('li');
afterbegin.classList.add('item');
afterbegin.textContent = "nuevo  contenido ubicado al inicio de la lista ordenada";


let beforeend = document.createElement('li');
beforeend.classList.add('item', 'before');
beforeend.textContent = "Buevo contenido ubicado al final de la lista ordenada";

let afterend = document.createElement('li');
afterend.classList.add('item');
afterend.textContent = "Nuevo contenido ubicado despues de la lista ordenada";

lista_card.insertAdjacentElement('beforebegin', beforebegin);
lista_card.insertAdjacentElement('beforeend', beforeend);
lista_card.insertAdjacentElement('afterbegin', afterbegin);
lista_card.insertAdjacentElement('afterend', afterend);


//Los dias de la semana son:

let card_dias = document.querySelector('#dias');

const dias = [
  {
    id: 1,
    name: "Lunes",
    img: "https://picsum.photos/640/360",
    parrafo: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, officiis."
    
  },{
    id: 2,
    name: "Martes",
    img: "https://picsum.photos/640/360",
    parrafo: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, officiis."
    
  },{
    id: 3,
    name: "Miercoles",
    img: "https://picsum.photos/640/360",
    parrafo: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, officiis."
    
  },{
    id: 4,
    name: "Jueves",
    img: "https://picsum.photos/640/360",
    parrafo: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, officiis."
    
  },{
    id: 5,
    name: "Viernes",
    img: "https://picsum.photos/640/360",
    parrafo: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, officiis."
    
  },{
    id: 6,
    name: "Sabado",
    img: "https://picsum.photos/640/360",
    parrafo: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, officiis."
    
  },{
    id: 7,
    name: "Domingo",
    img: "https://picsum.photos/640/360",
    parrafo: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, officiis."
    
  }
]

dias.map((dias) => {
  let card = document.createElement('div');
  let card_header = document.createElement('div');
  let card_titulo = document.createElement('h2');
  let card__body = document.createElement('div');
  let card_img = document.createElement('img');
  let card__paragraph = document.createElement('p');

  card.classList.add("card");
  card_header.classList.add("card__header");
  card_titulo.classList.add("card__header")
  card__body.classList.add("card__body");
  card_img.classList.add("card__img");
  card__paragraph.classList.add("card__paragraph");

  card_img.setAttribute('src', dias.img);
  card_img.setAttribute('alt',dias.name)

  card_titulo.textContent = dias.name;
  card__paragraph.textContent = dias.parrafo;

  card_dias.append(card);
  card.append(card_header);
  card_header.append(card_titulo)
  card.append(card__body);
  card__body.append(card_img);
  card__body.append(card__paragraph);
})