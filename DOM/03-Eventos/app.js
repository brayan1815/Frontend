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
  if (nombre.value == "") {
    alert("llene ese nombre");
    nombre.focus();
    event.preventDefault();
  }else if(apellido.value==""){
    alert("llene su apellido");
    apellido.focus();
    event.preventDefault();
  }else if(telefono.value==""){
    alert("por favor llene el campo del telefono");
    telefono.focus();
    event.preventDefault();
  }else if(documento.value==""){
    alert("Por favor ingrese su documento");
    documento.focus();
    event.preventDefault();
  }else if(usuario.value==""){
    alert("Por favor ingrese su usuario");
    usuario.focus();
    event.preventDefault();
  }else if(contrasena.value==""){
    alert("Por favor ingrese su contraseña");
    contrasena.focus();
    event.preventDefault();
  }
}

const validar_letras=(event)=>{
  let tecla=event.key;
  const letras=/[a-zñáéíóú\s]/i;
  if(!letras.test(tecla)){
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

//Eventos
formulario.addEventListener('submit',validar);
nombre.addEventListener('keydown',validar_letras);
apellido.addEventListener('keydown',validar_letras);
telefono.addEventListener('keydown',validar_numeros);
documento.addEventListener('keydown',validar_numeros);

