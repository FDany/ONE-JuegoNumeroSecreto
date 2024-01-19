
let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento(){
    let numeroUsuario = parseInt( document.getElementById('valorUsuario').value );
    
    if (numeroUsuario === numeroSecreto){
        asignarTextoElemento('p', `Acertaste el numero, en ${intentos} ${(intentos == 1)? 'vez' : 'veces'}.`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }
    else{
        // El usario no acerto
        if (numeroUsuario > numeroSecreto){
            asignarTextoElemento('p', 'El numero secreto es menor.');
        }
        else{
            asignarTextoElemento('p', 'El numero secreto es mayor.');
        }
        intentos++;
        limpiarCaja();
    }

    return;
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto(){
    let numeroGenerado = ( Math.floor(Math.random() * 100)+1 );

    if (listaNumerosSorteados.includes(numeroGenerado)){
        return generarNumeroSecreto();
    }else{
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
    }
}


function condicionesIniciales(){
    asignarTextoElemento('h1','Juego del numero secreto!');
    asignarTextoElemento('p','Indica un numero del 1 al 100');
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego(){
    //limpiar caja
    limpiarCaja();
    //indicar el mensaje de intento de numeros
    condicionesIniciales();
    //Deshabilitar el boton nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}

condicionesIniciales();