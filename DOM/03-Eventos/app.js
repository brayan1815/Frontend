//Variables

import { validar } from "./modulo.js";

// const btn = document.querySelector('#btn_validar');
const formulario = document.querySelector("form");
const nombre = document.querySelector('[name="Nombre"]')
const apellido=document.querySelector('[name="Apellido"]')
const telefono=document.querySelector('[name="Telefono"]')
const documento = document.querySelector('[name="Documento"]')
const usuario = document.querySelector('[name="Usuario"]')
const contrasena = document.querySelector('[name="Contrasena"]')
const politicas = document.querySelector('#politicas');
const boton = document.querySelector('#btn_validar')
const ciudad = document.querySelector('#ciudad');
const radios=document.querySelector('[name="generos"]')




//Funciones
// const validar = (event) => {
//   event.preventDefault();
//   nombre.classList.remove("border-red");
//   apellido.classList.remove("border-red");
//   telefono.classList.remove("border-red");
//   documento.classList.remove("border-red");
//   usuario.classList.remove("border-red");
//   contrasena.classList.remove("border-red");

//   if (nombre.value == "") {
//     if (nombre.nextElementSibling) nombre.nextElementSibling.remove();
//     let afterend = document.createElement('span');
//     afterend.textContent = "Este campo no puede estar vacio"
//     // alert("llene ese nombre");
//     nombre.classList.add("border-red");
//     nombre.insertAdjacentElement('afterend', afterend);
//     nombre.focus();
    
//   }
//   if (apellido.value == "") {
//     if (apellido.nextElementSibling) apellido.nextElementSibling.remove();
//      let afterend = document.createElement('span');
//     afterend.textContent = "Este campo no puede estar vacio"
//     apellido.insertAdjacentElement('afterend', afterend);
//     apellido.classList.add("border-red")
//     // alert("llene su apellido");
//     apellido.focus();
    
//   }
//   if (telefono.value == "") {
//     if (telefono.nextElementSibling) telefono.nextElementSibling.remove();
//      let afterend = document.createElement('span');
//     afterend.textContent = "Este campo no puede estar vacio"
//     telefono.insertAdjacentElement('afterend', afterend);
//     telefono.classList.add("border-red")
//     // alert("por favor llene el campo del telefono");
//     telefono.focus();
    
//   }
//   if (documento.value == "") {
//     if (documento.nextElementSibling) documento.nextElementSibling.remove();
//      let afterend = document.createElement('span');
//     afterend.textContent = "Este campo no puede estar vacio"
//     documento.insertAdjacentElement('afterend', afterend);
//     documento.classList.add("border-red")
//     // alert("Por favor ingrese su documento");
//     documento.focus();
    
//   }
//   if (usuario.value == "") {
//     if (usuario.nextElementSibling) usuario.nextElementSibling.remove();
//      let afterend = document.createElement('span');
//     afterend.textContent = "Este campo no puede estar vacio"
//     usuario.insertAdjacentElement('afterend', afterend);
//     usuario.classList.add("border-red")
//     // alert("Por favor ingrese su usuario");
//     usuario.focus();
    
//   }
//   if (contrasena.value == "") {
//     if (contrasena.nextElementSibling) contrasena.nextElementSibling.remove();
//      let afterend = document.createElement('span');
//     afterend.textContent = "Este campo no puede estar vacio"
//     contrasena.insertAdjacentElement('afterend', afterend);
//     contrasena.classList.add("border-red")
//     // alert("Por favor ingrese su contraseña");
//     contrasena.focus();
   
//   }
// }

const validar_letras=(event)=>{
  let tecla=event.key;
  const letras=/[a-zñáéíóú\s]/i;
  if(!letras.test(tecla)&& tecla!="Backspace"){
    event.preventDefault();
  }
}

const validar_numeros=(event)=>{
  let tecla=event.key;
  const numeros=/[0-9]/; 
  // alert (tecla);

  if(!numeros.test(tecla) && tecla!="Backspace"){
    event.preventDefault();
  }
}

const limpiar = (event) => {
  if (event.target.value != "" && event.target.selectedIndex!=0) {
    event.target.classList.remove("border-red");
    if (event.target.nextElementSibling) {
      event.target.nextElementSibling.remove();
    }
  }
}

const deshabilitarBoton=() => {
  if (!politicas.checked) {
    boton.setAttribute('disabled', '');
  } else {
    boton.removeAttribute('disabled')
  }
}



//Eventos
formulario.addEventListener('submit',validar);
nombre.addEventListener('keydown',validar_letras);
apellido.addEventListener('keydown',validar_letras);
telefono.addEventListener('keydown',validar_numeros);
documento.addEventListener('keydown', validar_numeros);
nombre.addEventListener('blur', limpiar);
apellido.addEventListener('blur', limpiar);
telefono.addEventListener('blur', limpiar);
documento.addEventListener('blur', limpiar);
usuario.addEventListener('blur', limpiar);
contrasena.addEventListener('blur', limpiar);
ciudad.addEventListener('blur', limpiar);
addEventListener('DOMContentLoaded', deshabilitarBoton)
politicas.addEventListener('change', deshabilitarBoton)
nombre.addEventListener('keydown', (event) => {
  let pal = event.target.value;
  if (pal.length >= 10 && event.key!="Backspace") {
    event.preventDefault();
  }
})
