//Variable para almacenar el número secreto
let numeroSecreto = Math.floor(Math.random() * 100) + 1; 
let numeroDeUsuario = 0;
let intentos = 1;
//let palabraveces = 'vez';
let maxIntentos = 3;   
console.log(numeroSecreto);

while(numeroDeUsuario != numeroSecreto){

    numeroDeUsuario =parseInt(prompt('Ingresa un numero del 1 al 100:'));

    console.log(typeof (numeroDeUsuario));
      /* 
     Es para realizar una comparación entre el número ingresado por el usuario y el número secreto.
      */
    if (numeroDeUsuario == numeroSecreto) {
     //se cumplio la condición  
     alert(`Felicidades, El numero es: ${numeroDeUsuario}. Lo hiciste en ${intentos} ${intentos == 1 ? 'vez' : 'veces'}.`); 
    } else {
       if(numeroDeUsuario > numeroSecreto){
        alert('El numero secreto es menor.');
    } else {
        alert('El numero secreto es mayor.');
      }
     //incrementamos el número de intentos
      //intentos = intentos + 1;
     intentos++;
     palabraveces = 'veces';
      if (intentos > maxIntentos) {
        alert(`Has superado el número de ${maxIntentos} intentos permitidos.`);
        break;
       } 
      //no se cumplio la condición
      // alert('¡Fallaste!');
    } 
}

