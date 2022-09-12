// instanciar jQuery e evitar conflitos | USAR CASO USE OUTRAS BIBLIOTECAS
jQuery( function($){
    let titulos = $('h4') //tag

console.log(titulos);    

})

//Manipulação Hover (mouseenter + mouseleave) \/ \/ \/
$('.exemplo').hover(
    function(){ //função mouseenter
        $(this).addClass('active-test-class');
    },    
    function(){ //função mouseleave
        $(this).removeClass('active-test-class');
});

$('.nav-item').on('click', function(){
    $(this).addClass('page-active');
    $(this).siblings().removeClass('page-active');
})