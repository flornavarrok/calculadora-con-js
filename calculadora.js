let primerNumero=0
let operacionSeleccionada=""


function operar(operacion) {
 
   let textoEnPantalla=document.getElementById("textoPantalla")

   primerNumero=textoEnPantalla.innerHTML
   operacionSeleccionada=operacion
   textoEnPantalla.innerHTML=0 
}



function borradoTotal() {
  document.getElementById("textoPantalla").innerHTML=0
  primerNumero=0
  operacionSeleccionada=""
  
}

function ingresarNumero(numero){

  let textoEnPantalla=document.getElementById("textoPantalla")
 
  textoEnPantalla.innerHTML=textoEnPantalla.innerHTML+numero
}

function igualar() {


let numero2= document.getElementById("textoPantalla").innerHTML
let resultado
let textoEnPantalla=document.getElementById("textoPantalla")

switch (operacionSeleccionada) {
  case "+":
    resultado= parseInt (primerNumero)+ parseInt(numero2)
    textoEnPantalla.innerHTML=resultado
    break;
  case "-":
    resultado= parseInt (primerNumero)- parseInt(numero2)
    textoEnPantalla.innerHTML=resultado
    break;
  case "*":
    resultado= parseInt (primerNumero)* parseInt(numero2)
    textoEnPantalla.innerHTML=resultado
    break;
  case "/":
    resultado= parseInt (primerNumero)/ parseInt(numero2)
    if (numero2>0){
      textoEnPantalla.innerHTML=resultado
    } else {
      alert("No se puede dividir por 0");
    }
    break;
 
}


}

