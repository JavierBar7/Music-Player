function cargarCancion(ubicacion) {
    var audioPlayer = document.getElementById('audioPlayer');
    audioPlayer.src = ubicacion;
    audioPlayer.play();
}

function reproducirCancion(ubicacion) {
    var audioPlayer = document.getElementById('audioPlayer');
    audioPlayer.src = ubicacion;
    audioPlayer.play();
}

function pararCancion() {
    var audioPlayer = document.getElementById('audioPlayer');
    audioPlayer.pause();
    audioPlayer.currentTime = 0;
}

function pausarCancion() {
    var audioPlayer = document.getElementById('audioPlayer');
    audioPlayer.pause();
}
