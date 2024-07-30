function encriptar (){
  let texto = document.getElementById("texto-entrada").value;


  if (texto === "") {
    cambiarColorTexto('#requisito', 'red');
    asignarTextoElemento('#requisito', "Rellene el campo.");
    asignarAtributoElemento('#img_termino', 'src', 'assets/eliminar.png')
    animateCSS('#requisito', 'headShake');
  } else if (tieneAcentos(texto) || tieneMayusculas(texto)) {
    cambiarColorTexto('#requisito', 'red');
    asignarTextoElemento('#requisito', "El texto no puede tener mayusculas ni acentos.");
    asignarAtributoElemento('#img_termino', 'src', 'assets/eliminar.png')
    animateCSS('#requisito', 'headShake');
  } else{
    let textoCifrado = texto
    .replace(/e/gi, "enter")
    .replace(/i/gi, "imes")
    .replace(/a/gi, "ai")
    .replace(/o/gi, "ober")
    .replace(/u/gi, "ufat");

    visibilidadElemento('.mensaje', 'none')
    visibilidadElemento('.contenedor-salida', 'flex');
    asignarTextoElemento('#texto-salida', textoCifrado);

    cambiarColorTexto('#requisito', '#495057');
    asignarTextoElemento('#requisito', "Solo minusculas y acentos");
    asignarAtributoElemento('#img_termino', 'src', 'assets/alerta.png')
  }
}



function desencriptar(){
    let texto = document.getElementById("texto-entrada").value;

    if (texto === "") {
      cambiarColorTexto('#requisito', 'red');
      asignarTextoElemento('#requisito', "Rellene el campo.");
      asignarAtributoElemento('#img_termino', 'src', 'assets/eliminar.png')
      animateCSS('#requisito', 'headShake');
    } else if (tieneAcentos(texto) || tieneMayusculas(texto)) {
      cambiarColorTexto('#requisito', 'red');
      asignarTextoElemento('#requisito', "El texto no puede tener mayusculas ni acentos.");
      asignarAtributoElemento('#img_termino', 'src', 'assets/eliminar.png')
      animateCSS('#requisito', 'headShake');
    } else{
      let textoCifrado = texto
      .replace(/enter/gi, "e")
      .replace(/imes/gi, "i")
      .replace(/ai/gi, "a")
      .replace(/ober/gi, "o")
      .replace(/ufat/gi, "u");
  
      visibilidadElemento('.mensaje', 'none')
  
      visibilidadElemento('.contenedor-salida', 'flex');
  
      asignarTextoElemento('#texto-salida', textoCifrado);
  
      cambiarColorTexto('#requisito', '#495057');
      asignarTextoElemento('#requisito', "Solo minusculas y acentos");
      asignarAtributoElemento('#img_termino', 'src', 'assets/alerta.png')
    }
 
}

function copiarAPortapapeles(){
  let textoParaCopiar = document.getElementById('texto-salida').value;
  try {
    navigator.clipboard.writeText(textoParaCopiar);
    asignarTextoElemento('#btn-copiar', 'Texto copiado');
    setTimeout(() => {
      asignarTextoElemento('#btn-copiar', 'Copiar');
    }, 2000);
  } catch (error) {
    asignarTextoElemento('#btn-copiar', 'error');
    cambiarColorTexto('#btn-copiar', 'red');
    setTimeout(() => {
      asignarTextoElemento('#btn-copiar', 'Copiar');
      cambiarColorTexto('#btn-copiar', '#202129');
    }, 2000);
  }
}


function asignarTextoElemento (elemento, texto) {
  let elementoHTML = document.querySelector(elemento);
  elementoHTML.innerHTML = texto;
}

function visibilidadElemento(elemento, valor) {
  let elementoHTML = document.querySelector(elemento);
  elementoHTML.style.display = valor;
}

function cambiarColorTexto(elemento, color){
  let elementoHTML = document.querySelector(elemento);
  elementoHTML.style.color = color;
}

function asignarAtributoElemento(elemento, atributo, valor) {
  let elementoHTML = document.querySelector(elemento);
  elementoHTML.setAttribute(atributo, valor);
}


function tieneMayusculas(texto) {
  return /[A-ZÁÉÍÓÚÜ]/.test(texto);
}

function tieneAcentos(texto) {
  return /[ÁÉÍÓÚÜáéíóúü]/.test(texto);
}

const animateCSS = (element, animation, prefix = 'animate__') =>
  new Promise((resolve, reject) => {
    const animationName = `${prefix}${animation}`;
    const node = document.querySelector(element);

    node.classList.add(`${prefix}animated`, animationName);

    function handleAnimationEnd(event) {
      event.stopPropagation();
      node.classList.remove(`${prefix}animated`, animationName);
      resolve('Animation ended');
    }

    node.addEventListener('animationend', handleAnimationEnd, {once: true});
  });


  visibilidadElemento('.contenedor-salida', 'none');

  