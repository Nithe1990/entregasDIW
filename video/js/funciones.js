let audio = document.getElementsByTagName("audio")[0];
let etiqueta = document.getElementsByTagName("span")[0];
let min = 0;
let sec = 0;
// audio.volume = 1.0;
audio.volume = 0.4;
audio.onloadedmetadata = function() {
    if (audio.duration > 60){
        min = Math.floor(audio.duration/60);
        sec = audio.duration%60;
    }else{
        sec = Math.floor(audio.duration)
    }

    etiqueta.innerText = `Duración: ${min} : ${sec}`;
}