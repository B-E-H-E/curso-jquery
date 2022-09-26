// instanciar jQuery e evitar conflitos | USAR CASO USE OUTRAS BIBLIOTECAS
jQuery( function($){
    let titulos = $('h4') //tag

console.log(titulos);    
})

//Manipulação Hover
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

// Ouvinte de eventos .nav-modal-open
$('.nav-modal-open').on('click', function(event){
    event.preventDefault();

    let elem = $(this).attr('rel');
    
    $('.nav-modal-body').html($('#'+elem).html());

    $('.nav-modal-header h5.nav-modal-title').html($(this).text());

    let myModal = new bootstrap.Modal($('#modalId'));
    myModal.show();
})

$('#carrossel-contato').on('click', function (event){
    event.preventDefault();

    $('#nav-contato').click();
})

// Validação de formulários (PARA CAMPOS VAZIOS)
function validateForm (elem) {
    if (elem.val() ==  '') {        
        elem.addClass('invalid-form-input');
        elem.parent().find('.text-muted').show();        
        return false;
    } else {
        elem.removeClass('invalid-form-input');
        elem.parent().find('.text-muted').hide(); 
    }
}

$('body').on('blur', '#nome', function(){
    validateForm($(this));
})
$('body').on('blur', '#email', function(){
    validateForm($(this));
})

// Callback Duplo
// focus = mask & blur = preenchimento
$('body')
.on('focus', '#date', function(){    
    $(this).mask('00/00/0000');
})
.on('blur', '#date', function(){    
    validateForm($(this));
})

$('body')
.on('focus', '#cep', function(){    
    $(this).mask('00000-000');
})
.on('blur', '#cep', function(){    
    validateForm($(this));
})

// Submit event
$('body').on('submit', '.nav-modal-body .form', function(event){
    event.preventDefault();

    const inputName = $('#nome');
    const inputEmail = $('#email');

    validateForm(inputName);
    validateForm(inputEmail);

    if ( inputName.hasClass('invalid-form-input') || inputEmail.hasClass('invalid-form-input')) {
        console.log('Campos inválidos');
        return false;
    } else {
        $(this).submit();
        return true;
    }
})

