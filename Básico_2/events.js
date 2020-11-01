$(document).ready(function(){

    $('#btn_clicado').click(function(){
        console.log("Botão clicado");
    });

    $("#btn_DuploClique").dblclick(function(){
        console.log("Clique duplo");
    });
    
    $("#btn_Hover").hover(function(){
        console.log("Passou o mouse");
    });
});



