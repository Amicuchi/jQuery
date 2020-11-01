$(document).ready(function(){

    /*Add, Remove, ChangeClass(Toggle)*/
    $('#btn_AddClass').click(function(){
        $("p").addClass("class_test");
    });
    $('#btn_RemoveClass').click(function(){
        $("p").removeClass("class_test");
    });
    $('#btn_ChangeClass').click(function(){
        $("p").toggleClass("class_test");
    });
    
    /*Método CSS*/
    $('#btn_MetodoCSSRetornaValor').click(function(){
        $('#metodoCssRetornaValor').append(
            $("div").css("background-color")
        );
    });
    $('#btn_MetodoCSSRetornaVetor').click(function(){
        $('#metodoCssRetornaVetor').append(
            $("div").css([
                            "width", 
                            "height", 
                            "background-color"
                        ])
        );
    });
    $('#btn_MetodoCSSAlteraValor').click(function(){
        $("div").css("background-color", "red");
    });

});