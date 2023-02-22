$(document).ready(function(){
    $("#btnPlayPause").click(function(){
        if($("#video").get(0).paused){
            $("#video").get(0).play();
            $("img", this).attr("src", "../recursos/pause-circle.svg");
        }else{
            $("#video").get(0).pause();
            $("img", this).attr("src", "../recursos/play-circle.svg");
        }
    });

    $("#btnVolumen").click(function(){
        if($("#video").get(0).volume == 0){
            $("#video").get(0).volume = 1.0;
            $("img", this).attr("src", "../recursos/volume-mute.svg");
            
        }else{
            $("#video").get(0).volume = 0.0;
            $("img", this).attr("src", "../recursos/volume-up.svg");
        }
    });

    $("#btnVelocidad").click(function(){
        if($("#video").get(0).playbackRate == 1.0){
            $("#video").get(0).playbackRate = 1.8;
        }else{
            $("#video").get(0).playbackRate = 1.0;
        }
    });
})