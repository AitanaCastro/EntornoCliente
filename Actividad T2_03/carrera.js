//Variables definidas
posicionMario = 0;
var $tem;
posicionYoshi = 0;

avanceMario = 2;
avanceYoshi = 2;

let startEmpate = () => {
    //Inicio de la carrera para empate
    document.getElementById("startButtonWithWinner").disabled = true;
    avanceYoshi = 2;
    $tem = window.setInterval(moverAmbos, 100);
}

let startGanaYoshi = () => {
    //Inicio de la carrera en la que gana yoshi
    document.getElementById("startButton").disabled = true;
    avanceYoshi = 3;
    $tem = window.setInterval(moverAmbos, 100);
}

let stop = () => {
    //Para la carrera
    clearInterval($tem);
}

let moverAmbos = () => {
    //Función que mueve ambas imágenes
    const elemMario = document.getElementById("mario");   
    const elemYoshi = document.getElementById("yoshi");

    posicionYoshi += avanceYoshi;
    posicionMario += avanceMario;

    elemMario.style.left = posicionMario + "%";
    elemYoshi.style.left = posicionYoshi + "%"; 
    if (posicionYoshi >= 90) {
        posicionYoshi = 0;
    }

    if (posicionMario >= 90) {
        posicionMario = 0;
    }

}

let puntoPartida = () => {
    //Vuelve al incio ambas imágenes
    document.getElementById("startButtonWithWinner").disabled = false;
    document.getElementById("startButton").disabled = false;
    const elemYoshi = document.getElementById("yoshi");
    const elemMario = document.getElementById("mario"); 
    elemYoshi.style.left = 0 + "px"; 
    elemMario.style.left = 0 + "px"; 
    posicionYoshi = 0;
    posicionMario = 0;
}
