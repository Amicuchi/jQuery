$(document).ready(function(){
    $('#btn_Append').click(function(){
        $('#h1_append').append("<p>Usando o Append</p>");
    });

    $('#btn_AppendTo').click(function(){
        $("<p>Usando o AppendTo!</p>").appendTo('#h1_appendTo');
    });

    $('#btn_Prepend').click(function(){
        $('#h1_prepend').prepend("<p>Usando o Prepend</p>");
    });

    $('#btn_PrependTo').click(function(){
        $("<p>Usando o PrependTo</p>").prependTo('#h1_prependTo');
    });

    $("#btn_html").click(function(){
        $('#h1_html').append(
            $("#divExemplo").html()
        );
    });

    $('#btn_text').click(function(){
        $('#h1_Text').append(
            $("p").text()
        );
    });

});