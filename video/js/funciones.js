let audio = document.getElementsByTagName("audio")[0];
let etiqueta = document.getElementsByTagName("span")[0];
// audio.volume = 1.0;
audio.volume = 0.4;
etiqueta.innerText = `${audio.currentTime} / ${audio.duration}`;