var valorUsuario='' //valor usuario
var valorMaquina='' //valor maq
var partidasGanadasUser= 0 //partidas ganadas usuario
var partidasGanadasMaq= 0 //partidas ganadas maq
// var partidasPerdidasUser='' //partidas perdidas usuario 
// var partidasPerdidasMaq='' //partidas perdidas maq 
var totalPartidas='' //total partidas
var opcionesUser=['imagenes/piedrader.jpg','imagenes/papelder.jpg','imagenes/tijerader.jpg']  // array de opciones usuario
var opcionesMaq=['imagenes/piedraizq.jpg','imagenes/papelizq.jpg','imagenes/tijeraizq.jpg']  // array de opciones maquina
var historial=[]

function jugar(valor){
    elegir(valor)
    eleccionMaq()
    document.getElementById('tablero').innerHTML = partidasGanadasUser + "-" + partidasGanadasMaq;
    totalPartidas++
    document.getElementById('partidas').innerHTML = totalPartidas;
    evaluacion()
    history(valorUsuario,valorMaquina);
}

function elegir(valor){
    if (valor === '0'){
        valorUsuario = opcionesUser[0];
        document.getElementById('manoPlayer').src = valorUsuario;
    }else if (valor === '1'){
        valorUsuario = opcionesUser[1];
        document.getElementById('manoPlayer').src = valorUsuario;
    }else {
        valorUsuario = opcionesUser[2];
        document.getElementById('manoPlayer').src = valorUsuario;
    }
    nombres()
}

function nombres(){
    document.getElementById('nombreJugador').innerHTML = 'JUGADOR'
    document.getElementById('nombrePC').innerHTML = 'COMPUTADORA'
    document.getElementById('VS').innerHTML = 'VS'
    document.getElementById('nombrePartidas').innerHTML = 'PARTIDAS'
    document.getElementById('nombreHistorial').innerHTML = 'HISTORIAL'
}



function eleccionMaq(){                                                         // SI LO VOY A PONER AUTOMATICO DEBO PONERLE PARAMETRO OPCION A LA FUNCION 
    var aleatorio = Math.floor(Math.random()*3);      // valor maquina
    valorMaquina = opcionesMaq[aleatorio]
    document.getElementById('manoMaq').src = valorMaquina;
}
  


function evaluacion(){    
    if ( valorUsuario == opcionesUser[0] && valorMaquina == opcionesMaq[0]){
        document.getElementById('resultado').innerHTML = 'EMPATE';
    } else if (valorUsuario == opcionesUser[1] && valorMaquina == opcionesMaq[1]){
        document.getElementById('resultado').innerHTML = 'EMPATE';
    } else if (valorUsuario == opcionesUser[2] && valorMaquina == opcionesMaq[2]){
        document.getElementById('resultado').innerHTML = 'EMPATE';
    } else if ( valorUsuario == opcionesUser[0] && valorMaquina == opcionesMaq[1]) {
        document.getElementById('resultado').innerHTML = 'PERDISTE';
        partidasGanadasMaq++
    } else if ( valorUsuario == opcionesUser[0] && valorMaquina == opcionesMaq[2]) {
        document.getElementById('resultado').innerHTML = 'FELICIDADES ERES EL GANADOR';
        partidasGanadasUser++
    }else if ( valorUsuario == opcionesUser[1] && valorMaquina == opcionesMaq[0]) {
        document.getElementById('resultado').innerHTML = 'FELICIDADES ERES EL GANADOR';
        partidasGanadasUser++
    }else if ( valorUsuario == opcionesUser[1] && valorMaquina == opcionesMaq[2]) {
        document.getElementById('resultado').innerHTML = 'PERDISTE';
        partidasGanadasMaq++
    }else if ( valorUsuario == opcionesUser[2] && valorMaquina == opcionesMaq[0]) {
        document.getElementById('resultado').innerHTML = 'PERDISTE';
        partidasGanadasMaq++
    }else  {
        document.getElementById('resultado').innerHTML = 'FELICIDADES ERES EL GANADOR';
        partidasGanadasUser++
    }
}
    
function history(valorUser,valorMaq){
  document.getElementById('historial').innerHTML= '';  
  historial.unshift(valorUser + '-' + valorMaq);  //colocar de primero en el array
  if (historial.length > 5 ){    //longitud del array
    historial.pop();   //eliminar el ultimo elemento de un array
  }
  for (const elemento of historial){
    let div = document.createElement('div');
    div.classList.add('flex', 'items-center' , 'justify-center')
    let imagenUser = document.createElement('img')
    imagenUser.classList.add('w-60' ,  'h-28')
    let imagenMaq = document.createElement('img')

    let guion = document.createElement('p')
    imagenUser.src = valorUser;
    imagenMaq.src = valorMaq;
    guion.innerHTML = '-';
    div.appendChild(imagenUser);
    div.appendChild(guion);
    div.appendChild(imagenMaq);
    document.getElementById('historial').appendChild(div);
  }
}


function siguienteRonda(){
    valores = '';
    document.getElementById('valorUsuario').innerHTML = valores;
    document.getElementById('valorUsuario2').innerHTML = valores;
    document.getElementById('valorMaq').innerHTML = valores;
    document.getElementById('resultado').innerHTML = valores;
}


function nuevaPartida(){         
    siguienteRonda();
}

