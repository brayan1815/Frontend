//Variables
// const btn = document.querySelector('#btn_validar');
const formulario = document.querySelector("form");
const nombre=document.querySelector('[name="Nombre"]')
const apellido=document.querySelector('[name="Apellido"]')
const telefono=document.querySelector('[name="Telefono"]')
const documento = document.querySelector('[name="Documento"]')
const usuario = document.querySelector('[name="Usuario"]')
const contrasena = document.querySelector('[name="Contrasena"]')


//Funciones
const validar=(event) => {
  event.preventDefault();
  if (nombre.value == "") {
    alert("llene ese nombre");
    nombre.focus();
  }
}

//Eventos
formulario.addEventListener('submit',validar);