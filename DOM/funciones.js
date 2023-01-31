$(document).ready(function() {
    $("#boton").click(function(){
        alert("Bienvenido, " + $("#nombre").val() + " " + $("#apellido").val() + ". Se te ha generado un nuevo correo electrónico con la dirección " + $("#nombre").val() + "." +  $("#apellido").val() + "@diw.com");
    });

    $("button").click(function(){
        $("#display").click()
    })
});