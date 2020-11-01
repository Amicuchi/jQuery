/* No JQuery, o sintaxe básica é:
 * $(seletor).ação();
**/

/* Para o exemplo proposto, de esconder o título, vamos precisar seguir alguns passos.
 * 1º) Verrificar se o documento foi carregado.
 * 2º) Capturar o clique do mouse
 * 3º) Executar a ação necessária para cumprir a proposta do botão. (Ex.: Ocultar o texto)
**/

//Função que verifica se o documento a ser carregado já está pronto.
$(document).ready(function(){
    // Depois de verificar se o documento está pronto, 
    // essa função "captura" o clique no botão.
    $('#btn_hide').click(function(){
        $('H1').hide();     // Ao clicar no botão, a função vai oculta o seletor H1.
    });

    $('#btn_azul').click(function(){
        // Ao clicar no botão, a função altera a cor do texto do seletor H1 para azul.
        $('H1').css("color", "blue");
        $('#mensagem').text("Cor alterada com sucesso");
            /* O método text permite inserir uma mensagem no html.
             * para isso, será necessário criar uma tag "SPAN" vazia no local 
             * que se deseja inserir o texto e identificar a tag span com um "id"
             * que receberá a mensagem.
            **/
        $('#mensagem').css('color', 'red')
        $('#mensagem').css('border', '1px solid red');
        $('#mensagem').delay(3000);
            /* Para que a mensagem não fique na tela por mais tempo que o
             * necessário, achei por bem, incluir um delay.
             * Assim, a mensagem permanecerá por 3seg e desaparecerá.
             * Para que a mensagem não desapareça muito abruptamente, 
             * abaixo, inseri um método fadeOut que dará suavidade.
            **/
        $('#mensagem').fadeOut('fast');
    });

    $('#btn_vermelho').click(function(){
        // Ao clicar no botão, a função altera a cor do texto do seletor H1 para vermelho.
        $('H1').css("color", "red");
        $('#mensagem').text("Cor alterada com sucesso")
                      .css('color', 'red')
                      .css('border', '1px solid red')
                      .delay(3000);
            /* Perceba que diferente do "#btn_azul", aqui não ficamos repetindo
             * $('#mensagem') em todas as linhas.
             * apenas foi dada uma quebra de linha antes de cada ponto/método.
             * Isso é como se todas as linhas estivesse numa linha só.
             * A vantagem disso é que o código fica mais limpo e 
             * facilita a percepção de tudo que está sendo realizado em cada seletor.
             * Não há economida de linhas, mas uma melhora visual.
            **/
    });

    $('#btn_verde').click(function(){
        // Ao clicar no botão, a função altera a cor do texto do seletor H1 para vermelho.
        $('H1').css("color", "green");
        $('#mensagem').text("Cor alterada com sucesso")
                      .css({
                          color: 'green',
                          border: '1px solid green',
                          backGround: 'yellow'
                        })
                      .delay(3000)
            /* Perceba que diferente do "#btn_vermelho", aqui conseguimos limpar
             * ainda mais o código, deixando menos métodos, mas o mesmo resultado.
             * Para isso, tratamos o método CSS como se fosse um
            **/
                      .fadeOut();
    });


    $('#btn_FadeIn').click(function(){
        $('H1').fadeIn();   // Exibe o H1 de maneira mais suave.
                            // Dentro do fadeIn, pode-se utilizar como argumento:
                            // - 'slow' para tornar o efeito ainda mais suave.
                            // - 'fast' para tornar o efeito mais rápido/abrupto.
                            // - valor numérico que define o tempo de início e fim do comando.                            
    });

    $('#btn_FadeOut').click(function(){
        $('H1').fadeOut();      // Oculta o H1 mais suavemente.
        $('H1').delay(2000);    // Gera um atraso em "x" mili segundos.
                                // 2000ms = 2 seg
    });

    $('#btn_classe').click(function(){
        $('H1').css("color", "green");
        $('#msg_2').text("Cor alterada com sucesso")
                   .css({
                          color: 'green',
                          border: '1px solid green',
                          fontSize: '24px',
                        })
                   .delay(3000)
                   .fadeOut()
                   .addClass('green');
                        // Método utilizado para incluir/adicionar uma classe no HTML.
                        // Nesse caso, a classe green será adicionada à msg_2,
                        // alterando a cor do background.
            $('#btn_classe').removeClass('red');
                // Método utilizado para remover uma determinada classe.
                // Deve ser aplicado ao elemento que deve ser alterado.
    });

    $('#l1').click(function(){
        $('#img1').show();
        $('#img2').hide();
        $('#img3').hide();
        $('#img4').hide();
    });
    $('#l2').click(function(){
        $('#img2').show();
        $('#img1').hide();
        $('#img3').hide();
        $('#img4').hide();
    });
    $('#l3').click(function(){
        $('#img3').show();
        $('#img1').hide();
        $('#img2').hide();
        $('#img4').hide();
    });
    $('#l4').click(function(){
        $('#img4').show();
        $('#img1').hide();
        $('#img2').hide();
        $('#img3').hide();
    });
});