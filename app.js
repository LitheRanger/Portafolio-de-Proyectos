let numeroSecreto = 0;
let intentos = 0;
let ListaNumerosSorteados = [];
let NumeroMaximo = 10;


function asignartextoelemento(elemento, texto) {
  let elementoHTML = document.querySelector(elemento); 
    elementoHTML.innerHTML = texto;
return;
}
function verificarIntento() {
    let numeroIngresado = parseInt(document.getElementById('ValorUsuario').value);
    console.log(numeroIngresado === numeroSecreto);
   if (numeroIngresado === numeroSecreto) {
        asignartextoelemento('p', `¡Felicidades! Adivinaste el número en ${intentos} ${(intentos === 1)? 'vez' : 'veces'}.`);
document.getElementById('reiniciar').removeAttribute('disabled')   ;
           
    } else  {
       if (numeroIngresado < numeroSecreto) {
        asignartextoelemento('p', 'El número secreto es mayor. Intenta de nuevo.');
    } else {   
        asignartextoelemento('p', 'El número secreto es menor. Intenta de nuevo.');
    }
 intentos++;
reiniciarJuego(); 

}
return;
}

function reiniciarJuego() {
let ValorJuego = document.querySelector('#ValorUsuario').value = '';
}
 function generarNumeroSecreto() {
    let NumeroGenerado = Math.floor(Math.random() * NumeroMaximo) + 1;
    console.log(ListaNumerosSorteados);
    if(ListaNumerosSorteados.length === NumeroMaximo) {
asignartextoelemento('p', 'Todos los números han sido sorteados. Reinicia el juego para comenzar de nuevo.');
    } else { 
    if (ListaNumerosSorteados.includes(NumeroGenerado)) {
 return generarNumeroSecreto();    

} else {
        ListaNumerosSorteados.push(NumeroGenerado);
        return NumeroGenerado;
}
}
}
function CondicionesIniciales() {
    asignartextoelemento('H1', 'Juego del Número Secreto');
    asignartextoelemento('p', `Adivina el número entre 1 y ${NumeroMaximo}.`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;

}   

function NuevoJuego() {
  reiniciarJuego();
  
  CondicionesIniciales();
    
 document.querySelector('#reiniciar').setAttribute('disabled', true);


}
CondicionesIniciales();