var rutaUsuario='' //valor usuario
var rutaMaquina='' //valor maq
var valorUsuario='';
var valorMaquina='';
var partidasGanadasUser= 0 //partidas ganadas usuario
var partidasGanadasMaq= 0 //partidas ganadas maq
// var partidasPerdidasUser='' //partidas perdidas usuario 
// var partidasPerdidasMaq='' //partidas perdidas maq 
var totalPartidas='' //total partidas
var opcionesUser=['piedra.jpg','papel.jpg','tijera.jpg']  // array de opciones usuario
var opcionesMaq=['piedra.jpg','papel.jpg','tijera.jpg']  // array de opciones maquina
var historial=[]

function jugar(valor){
    elegir(valor)
    eleccionMaq()
    totalPartidas++
    document.getElementById('partidas').innerHTML = totalPartidas;
    document.getElementById('tablero').innerHTML = partidasGanadasUser + "-" + partidasGanadasMaq;
    evaluacion()
    history(valorUsuario,valorMaquina);
}

function elegir(valor){
    if (valor === '0'){
        rutaUsuario = `imagenes/usuario/${opcionesUser[0]}`;
        valorUsuario = opcionesUser[0]
        document.getElementById('manoPlayer').src = rutaUsuario;
    }else if (valor === '1'){
        rutaUsuario = `imagenes/usuario/${opcionesUser[1]}`;
        valorUsuario = opcionesUser[1]
        document.getElementById('manoPlayer').src = rutaUsuario;
    }else {
        rutaUsuario = `imagenes/usuario/${opcionesUser[2]}`;
        valorUsuario = opcionesUser[2]
        document.getElementById('manoPlayer').src = rutaUsuario;
    }
    nombres()
}

function nombres(){
    document.getElementById('nombreJugador').innerHTML = 'JUGADOR'
    document.getElementById('nombrePC').innerHTML = 'COMPUTADORA'
    document.getElementById('VS').innerHTML = 'VS'
    document.getElementById('nombrePartidas').innerHTML = 'PARTIDAS'
    document.getElementById('nombreHistorial').innerHTML = 'HISTORIAL'
    document.getElementById('nombretablero').innerHTML = 'TABLERO';
    document.getElementById('nuevoJuegobutton').classList.remove('hidden');
}



function eleccionMaq(){                                                         // SI LO VOY A PONER AUTOMATICO DEBO PONERLE PARAMETRO OPCION A LA FUNCION 
    var aleatorio = Math.floor(Math.random()*3);      // valor maquina
    rutaMaquina= `imagenes/maquina/${opcionesMaq[aleatorio]}` 
    valorMaquina = opcionesMaq[aleatorio]
    document.getElementById('manoMaq').src = rutaMaquina
;
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
        document.getElementById('tablero').innerHTML = partidasGanadasUser + "-" + partidasGanadasMaq;
    } else if ( valorUsuario == opcionesUser[0] && valorMaquina == opcionesMaq[2]) {
        document.getElementById('resultado').innerHTML = 'GANASTE';
        partidasGanadasUser++
        document.getElementById('tablero').innerHTML = partidasGanadasUser + "-" + partidasGanadasMaq;
    }else if ( valorUsuario == opcionesUser[1] && valorMaquina == opcionesMaq[0]) {
        document.getElementById('resultado').innerHTML = 'GANASTE';
        partidasGanadasUser++
        document.getElementById('tablero').innerHTML = partidasGanadasUser + "-" + partidasGanadasMaq;
    }else if ( valorUsuario == opcionesUser[1] && valorMaquina == opcionesMaq[2]) {
        document.getElementById('resultado').innerHTML = 'PERDISTE';
        partidasGanadasMaq++
        document.getElementById('tablero').innerHTML = partidasGanadasUser + "-" + partidasGanadasMaq;
    }else if ( valorUsuario == opcionesUser[2] && valorMaquina == opcionesMaq[0]) {
        document.getElementById('resultado').innerHTML = 'PERDISTE';
        partidasGanadasMaq++
        document.getElementById('tablero').innerHTML = partidasGanadasUser + "-" + partidasGanadasMaq;
    }else  {
        document.getElementById('resultado').innerHTML = 'GANASTE';
        partidasGanadasUser++
        document.getElementById('tablero').innerHTML = partidasGanadasUser + "-" + partidasGanadasMaq;
    }
}
    
function history(valorUser,valorMaq){
  document.getElementById('historial').innerHTML= '';  
//   historial.unshift('img src="valorUser"' + '-' + valorMaq);.
  historial.unshift(`<img class="w-10 h-9" src="imagenes/historico/${valorUser}"/> - <img class="w-10 h-9" src="imagenes/historico/${valorMaq}"/>`);
  if (historial.length > 5 ){    //longitud del array
    historial.pop();   //eliminar el ultimo elemento de un array
  }
  for (const elemento of historial){
    let div = document.createElement('div');
    div.classList.add('flex', 'items-center' , 'justify-center')
    div.innerHTML= elemento;


    /*
        imagenes/usuario
                /maquina
                /historico 
                / piedra, papel, tijera
                
    */

    // let imagenUser = document.createElement('img')
    // imagenUser.classList.add('w-10', 'h-9')
    // let imagenMaq = document.createElement('img')
    // imagenMaq.classList.add('w-10', 'h-9')
    // let guion = document.createElement('p')
    // imagenUser.src = valorUser;
    //     if (valorUser == 'imagenes/usuario/piedra.jpg'){
    //         imagenUser.src = 'imagenes/historico/piedra.jpg';
    //     } else if (valorUser == 'imagenes/usuario/papel.jpg'){
    //         imagenUser.src = 'imagenes/papelhist.jpg';
    //     } else {
    //         imagenUser.src = 'imagenes/tijerahist.jpg';
    //     }

    // imagenMaq.src = valorMaq;
    //     if (valorMaq == 'imagenes/maquina/piedra.jpg'){
    //         imagenMaq.src = 'imagenes/historico/piedra.jpg';
    //     } else if (valorMaq == 'imagenes/maquina/papel.jpg'){
    //         imagenMaq.src = 'imagenes/papelhist.jpg';
    //     } else {
    //         imagenMaq.src = 'imagenes/tijerahist.jpg';
    //     }
    // guion.innerHTML = '-';
    // div.appendChild(imagenUser);
    // div.appendChild(guion);
    // div.appendChild(imagenMaq);
    document.getElementById('historial').appendChild(div);
  }
}


function nuevoJuego(){
    document.getElementById('manoPlayer').src = '';
    document.getElementById('manoMaq').src = '';
    document.getElementById('resultado').innerHTML = '';
    document.getElementById('historial').innerHTML= ''; 
    document.getElementById('partidas').innerHTML= ''; 
    document.getElementById('tablero').innerHTML = '';
    document.getElementById('nombreJugador').innerHTML = '';
    document.getElementById('nombrePC').innerHTML = '';
    document.getElementById('VS').innerHTML = '';
    document.getElementById('nombrePartidas').innerHTML = '';
    document.getElementById('nombreHistorial').innerHTML = '';
    document.getElementById('nombretablero').innerHTML = '';
    document.getElementById('nuevoJuegobutton').classList.add('hidden');
    totalPartidas=0;
    partidasGanadasUser= 0 ;//partidas ganadas usuario
    partidasGanadasMaq= 0;
    historial=[];
}


