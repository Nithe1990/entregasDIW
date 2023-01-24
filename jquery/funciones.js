$(document).ready(function(){
    $("#ocultaClick").click(function(){
        $(this).hide();
    });

    $("#ocultaDobleClick").dblclick(function(){
        $(this).hide();
    });

    $("#mouse").mouseenter(function(){
        $(this).css("backgroud-color", "#0000ff");
    });

    $("#mouse").mouseleave(function(){
        $(this).css("background-color", "#00ff00");
    });

    $(window).resize(function(){
        $("#tamano").css("background-color", "yellow");
    })

    $(window).keydown(function(){
        $("#tecla").css("background-color", "yellow");
    });

    $("#imagen1").dblclick(function(){
        $(this).toggle();
    });

    $("#tresSegundos").click(function(){
        $(this).hide(3000);
    });

    $("#imagen2").click(function(){
        $(this).fadeOut(3000)
    });

    $("button").click(function(){
        $("#imagen3").show();
    });

    $("nav">"section").click(function(){
        $(this>"article").slideToggle();
    });
});