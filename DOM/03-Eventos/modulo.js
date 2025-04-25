export const validar = (event) => {
  event.preventDefault();
  console.log(event.target.children);

  const campos = [...event.target].filter((elemento) => {
    if (elemento.hasAttribute('required')) {
      return elemento;
    }
  })

  campos.forEach(campo => {
    if (campo.value == "") {
      campo.classList.add("border-red");
       if (campo.nextElementSibling) campo.nextElementSibling.remove();
      let afterend = document.createElement('span');
      afterend.textContent = "Este campo no puede estar vacio"
      campo.insertAdjacentElement('afterend', afterend);
      // if (campo.selectedIndex!=0) {
      //   campo.classList.add("border-red")
      // }
    }
  })
  // console.log(campos);
}