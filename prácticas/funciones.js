$(document).ready(function(){
    $("button:first").click(function(){
        if($("video").get(0).paused){
            $("video").get(0).play();
            // $("path:odd").attr("d", "M5 6.25a1.25 1.25 0 1 1 2.5 0v3.5a1.25 1.25 0 1 1-2.5 0v-3.5zm3.5 0a1.25 1.25 0 1 1 2.5 0v3.5a1.25 1.25 0 1 1-2.5 0v-3.5z");
            $("svg:first-child path:odd", this).attr("d", "M5 6.25a1.25 1.25 0 1 1 2.5 0v3.5a1.25 1.25 0 1 1-2.5 0v-3.5zm3.5 0a1.25 1.25 0 1 1 2.5 0v3.5a1.25 1.25 0 1 1-2.5 0v-3.5z");
        }else{
            $("video").get(0).pause();
            $("svg:first-child path:odd", this).attr("d", "M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z");
        }
        $("svg:first-child", this).toggleClass("bi-play-circle");
        $("svg:first-child", this).toggleClass("bi-pause-circle");
    });

    $("button:odd").click(function(){
        if(!($("video").get(0).paused)){
            let pathMuted = $('<path d="M6.717 3.55A.5.5 0 0 1 7 4v8a.5.5 0 0 1-.812.39L3.825 10.5H1.5A.5.5 0 0 1 1 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06zM6 5.04 4.312 6.39A.5.5 0 0 1 4 6.5H2v3h2a.5.5 0 0 1 .312.11L6 10.96V5.04zm7.854.606a.5.5 0 0 1 0 .708L12.207 8l1.647 1.646a.5.5 0 0 1-.708.708L11.5 8.707l-1.646 1.647a.5.5 0 0 1-.708-.708L10.793 8 9.146 6.354a.5.5 0 1 1 .708-.708L11.5 7.293l1.646-1.647a.5.5 0 0 1 .708 0z"/>');
            let pathUnmuted1 = $('<path d="M11.536 14.01A8.473 8.473 0 0 0 14.026 8a8.473 8.473 0 0 0-2.49-6.01l-.708.707A7.476 7.476 0 0 1 13.025 8c0 2.071-.84 3.946-2.197 5.303l.708.707z"/>');
            let pathUnmuted2 = $('<path d="M10.121 12.596A6.48 6.48 0 0 0 12.025 8a6.48 6.48 0 0 0-1.904-4.596l-.707.707A5.483 5.483 0 0 1 11.025 8a5.483 5.483 0 0 1-1.61 3.89l.706.706z"/>');
            let pathUnmuted3 = $('<path d="M10.025 8a4.486 4.486 0 0 1-1.318 3.182L8 10.475A3.489 3.489 0 0 0 9.025 8c0-.966-.392-1.841-1.025-2.475l.707-.707A4.486 4.486 0 0 1 10.025 8zM7 4a.5.5 0 0 0-.812-.39L3.825 5.5H1.5A.5.5 0 0 0 1 6v4a.5.5 0 0 0 .5.5h2.325l2.363 1.89A.5.5 0 0 0 7 12V4zM4.312 6.39 6 5.04v5.92L4.312 9.61A.5.5 0 0 0 4 9.5H2v-3h2a.5.5 0 0 0 .312-.11z"/>');

            $("svg", this).empty();
            if($("video").get(0).volume == 0){
                $("video").get(0).volume = 1.0;
                $("svg", this).append(pathMuted);
            }else{
                $("video").get(0).volume = 0.0;
                $("svg", this).append(pathUnmuted1, pathUnmuted2, pathUnmuted3);
            }
            $("svg", this).toggleClass("bi-volume-mute");
            $("svg", this).toggleClass("bi-volume-up");

        }
    });

    $("figure").mouseenter(function(){
        $("svg", this).animate({
            height: '+=16px',
            width: '+=16px'
        });
        $("figcaption", this).toggle();
        console.log("test");
    });

    $("figure").mouseleave(function(){
        $("svg", this).animate({
            height: '-=16px',
            width: '-=16px'
        });
        $("figcaption", this).toggle();
    });

    $("nav a").click(function(){
        $("#panel").slideDown();
    });
});