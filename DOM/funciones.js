$(document).ready(function() {
    $("#boton").click(function(){
        alert("Bienvenido, " + $("#nombre").val() + " " + $("#apellido").val() + ". Se te ha generado un nuevo correo electrónico con la dirección " + $("#nombre").val() + "." +  $("#apellido").val() + "@diw.com");
    });

    $("#btn0").click(function(){
        $("#display").append("0");

    });
    
    $("#btn1").click(function(){
        $("#display").append("1");

    });

    $("#btn2").click(function(){
        $("#display").append("2");
    });

    $("#btn3").click(function(){
        $("#display").append("3");
    });

    $("#btn4").click(function(){
        $("#display").append("4");
    });

    $("#btn5").click(function(){
        $("#display").append("5");
    });

    $("#btn6").click(function(){
        $("#display").append("6");
    });

    $("#btn7").click(function(){
        $("#display").append("7");
    });

    $("#btn8").click(function(){
        $("#display").append("8");
    });

    $("#btn9").click(function(){
        $("#display").append("0");
    });

    $("#btnC").click(function(){
        $("#display").text(" ");
    })
});