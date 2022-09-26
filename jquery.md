# jQuery
"Write less, do more"
- Biblioteca de JS
- Converte para JS padrão (ECMAScript)
- Crossbrowser
- Rápido carregamento, captura e transmissão de dados
- Manipula o DOM
- Facilita a consulta (query) de elementos
- Extensível com plugins
- Instalação: https://jquery.com/download/

## Seletores
### Simples
```
    $('h4') //tag
    $('.featured-item') //class
    $('#featured') //id
```
### Compostos
```
    $('h4, h6')
    $('div h4')
```

/*
 * Callback
 * - entendendo ações que começam ao término de outra
 *  

$('.exemplo:nth(2)')
.hide(2000, function(){
    // este é o callback
    console.log($(this).find('h4').text() + ' esgotado')
})
.show(2000, function(){
    console.log($(this).find('h4').text() + ' em estoque')
})*/


/*
 * Animações
*/
const duracao = 1000 // 1 segundo
$('.exemplo:nth(1)')
//.hide(duracao)
//.show(duracao)
.fadeOut(duracao)
.fadeIn(duracao)
//.toggle(duracao)
//.toggle(duracao)