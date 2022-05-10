

function elegir(valor){
    if (valor === '0'){
        document.getElementById('manoPlayer').src = 'imagenes/piedrader.jpg';
    }else if (valor === '1'){
        document.getElementById('manoPlayer').src = 'imagenes/papelder.jpg';
    }else {
        document.getElementById('manoPlayer').src = 'imagenes/tijerader.jpg';
    }
    nombres()
}

function nombres(){
    document.getElementById('nombreJugador').innerHTML = 'JUGADOR'
    document.getElementById('nombrePC').innerHTML = 'COMPUTADORA'
    document.getElementById('VS').innerHTML = 'VS'
}