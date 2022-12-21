let video = document.getElementsByTagName("video")[0];
let playPause = document.getElementById("playPause");
let stop = document.getElementById("stop");
let sp1 = document.getElementById("sp1");
let spH = document.getElementById("spH");
let sp2 = document.getElementById("sp2");
let sound = document.getElementById("sound");


function reproducirPausar(e){
    if (video.paused) {
        video.play()
        playPause.firstElementChild.setAttribute("src", "..\media\play.png");
    }else{
        video.pause()
        playPause.firstElementChild.setAttribute("src", "..\media\play.png");
    }
}

playPause.addEventListener("click", reproducirPausar);
stop.addEventListener("click", reiniciar);
sp1.addEventListener("click", decelerar);
spH.addEventListener("click", acelerar);
sp2.addEventListener("click", acelerarMucho);