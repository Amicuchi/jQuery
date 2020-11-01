$(document).ready(function(){

    // Opções para os Métodos Show - Hide - Toggle
    // Show - Hide - Toggle SEM ATRASO
    $("#btn_show").click(function(){
        $("#div_ex1").show();
    });
    $("#btn_hide").click(function(){
        $("#div_ex1").hide();
    });
    $("#btn_toggle").click(function(){
        $("#div_ex1").toggle();
    });

    // Show - Hide - Toggle COM ATRASO de 2 segundos
    $("#btn_hide2seg").click(function(){
        $("#div_ex1").hide(2000);
    });
    $("#btn_show2seg").click(function(){
        $("#div_ex1").show(2000);
    });
    $("#btn_toggle2seg").click(function(){
        $("#div_ex1").toggle(2000);
    });

    // SLIDE (Up - Down - Toggle)
    $("#btn_SlideDown").click(function(){
        $("#div_ex2").slideDown();
    });
    $("#btn_SlideUp").click(function(){
        $("#div_ex2").slideUp();
    });
    $("#btn_SlideToggle").click(function(){
        $("#div_ex2").slideToggle();
    });
    $("#btn_SlideDown2seg").click(function(){
        $("#div_ex2").slideDown(2000);
    });
    $("#btn_SlideUp2seg").click(function(){
        $("#div_ex2").slideUp(2000);
    });
    $("#btn_SlideToggle2seg").click(function(){
        $("#div_ex2").slideToggle(2000);
    });

    // FADE (In - Out - Toggle)
    $("#btn_FadeIn").click(function(){
        $("#div_ex3").fadeIn();
    });
    $("#btn_FadeOut").click(function(){
        $("#div_ex3").fadeOut();
    });
    $("#btn_FadeToggle").click(function(){
        $("#div_ex3").fadeToggle();
    });
    $("#btn_FadeIn2seg").click(function(){
        $("#div_ex3").fadeIn(2000);
    });
    $("#btn_FadeOut2seg").click(function(){
        $("#div_ex3").fadeOut(2000);
    });
    $("#btn_FadeToggle2seg").click(function(){
        $("#div_ex3").fadeToggle(2000);
    });
    $("#btn_FadeTo").click(function(){
        $("#div_ex3").fadeTo(1000, 0.5);
    });


    // ANIMATE
    // Altera a altura da div e define para 100px
    $("#btn_animateHeight").click(function(){
        $("#div_ex4").animate({ height:"250px" });
    });
    // Altera diversas propriedades da div
    // Atrasa as alterações em 2000 milissegundos (2 segundos)
    $("#btn_animateHeightVarios").click(function(){
        $("#div_ex5").animate({
            height:"250px", 
            width:"250px", 
            margin:"25px"}, 
            2000);
    });

    // Aqui, criaremos uma sequência de alterações.
    $("#btn_animateHeightSequencias").click(function(){
        $("#div_ex6").animate({ height:"250px" }, 1000);
        $("#div_ex6").animate({ height:"50px", width:"300px" }, 2000);
        $("#div_ex6").animate({ height:"100px", width:"30px", margin:"20px" }, 2500);
    });
    


});