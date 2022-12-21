let video = document.getElementsByTagName("video")[0];
let playPause = document.getElementById("playPause");
let reset = document.getElementById("reset");
let sp1 = document.getElementById("sp1");
let spH = document.getElementById("spH");
let sp2 = document.getElementById("sp2");
let sound = document.getElementById("sound");
let res = document.getElementsByTagName("select")[0];
let muteado = false;


function reproducirPausar(e){
    if (video.paused) {
        video.play()
        playPause.firstElementChild.setAttribute("src", "media/pause.png");
    }else{
        video.pause()
        playPause.firstElementChild.setAttribute("src", "media/play.png");
    }
}

function reiniciar(e) {
    video.load();
    playPause.firstElementChild.setAttribute("src", "media/play.png");
    decelerar();
}

function decelerar(e){
    video.playbackRate = 1.0;
    sp1.setAttribute("disabled", true);
    spH.removeAttribute("disabled");
    sp2.removeAttribute("disabled");
}

function acelerar(e) {
    video.playbackRate = 1.5;
    sp1.removeAttribute("disabled");
    spH.setAttribute("disabled", true);
    sp2.removeAttribute("disabled");
}

function acelerarMucho(e) {
    video.playbackRate = 2.0;
    sp1.removeAttribute("disabled");
    spH.removeAttribute("disabled");
    sp2.setAttribute("disabled", true);
}

function mutearDesmutear(e) {
    if(muteado){
        video.volume = 1.0
        // video.removeAttribute("muted");
        sound.firstElementChild.setAttribute("src", "media/unmute.png");
        muteado = false;
    }else{
        video.volume = 0.0;
        // video.setAttribute("muted", "true")
        sound.firstElementChild.setAttribute("src", "media/mute.png");
        muteado = true;
    }
}

function cambiarBotonPlay(e) {
    playPause.firstElementChild.setAttribute("src", "media/replay.png");
}

function cambiarResolucion(e) {
    if (res.selectedIndex == 0) video.src = "media/video.mp4";
    if (res.selectedIndex == 1) video.src = "media/videoLow.mp4";
    playPause.firstElementChild.setAttribute("src", "media/play.png");
    decelerar();
}

video.addEventListener("ended", cambiarBotonPlay)
playPause.addEventListener("click", reproducirPausar);
reset.addEventListener("click", reiniciar);
sp1.addEventListener("click", decelerar);
spH.addEventListener("click", acelerar);
sp2.addEventListener("click", acelerarMucho);
sound.addEventListener("click", mutearDesmutear);
res.addEventListener("change", cambiarResolucion)