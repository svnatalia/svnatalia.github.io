$(document).ready(function(){
    
    // Smooth scroll on Jquery

    $("a[href^='#']").click(function(){
        const _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
        return false;
    });

    // Modal action on Jquery

    $('.modal__close, .overlay').on('click', function() {
        $('.overlay, #consultation, #thanks').fadeOut('slow')
    });

    $('[data-modal=booking]').each(function(i) {
        $(this).on('click', function() {
            $('#consultation .modal__wrapper_descr').text($('.booking__title').eq(i).text())
            $('.overlay, #consultation').fadeIn('slow');
        })
    });


    // Buttons click on Jquery

    $('button[name="servs"]').click(function () {
        location.href = "shootingstylization.html";
    });
    $('button[name="portf"]').click(function () {
        location.href = "portfolio.html";
    });


    // Validate form on Jquery

    function validateForms(form){
        $(form).validate({
            rules: {
                name: "required",
                surname: "required",
                email: {
                    required: true,
                    email: true
                },
                phone: {
                    required: true,
                    number: true
                }
            }
        });
    };

    validateForms('.consultation__wrapper_form');
    validateForms('.collaboration__wrapper_form');
    validateForms('.modal__wrapper_form');

    // Mask for validate on Jquery

    // $('input[name=phone]').mask("+9 (999) 999-99-99");

    // Forms and messages

    $('form').on('click', function(e) {
        e.stopPropagation();
    });
    
    $('form').submit(function(e) {
        e.preventDefault();
        if (!$(this).valid()) return;
    
        $.ajax({
            type: "POST",
            url: "mailer/smart.php",
            data: $(this).serialize()
        }).done(function() {
            $(this).find("input").val("");
            $('#consultation').fadeOut();
            $('.overlay, #thanks').fadeIn('slow');
            $('form').trigger('reset');
        });
        return false;
    });
});

// Menu on/off on JS

window.addEventListener('DOMContentLoaded', () => {
    const header__wrapper = document.querySelector('.header__wrapper'),
    header__wrapper_item = document.querySelectorAll('.header__wrapper_item'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        header__wrapper.classList.toggle('header__wrapper_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            header__wrapper.classList.toggle('header__wrapper_active');
        })
    })
})

// Hidden menu on JS

const button_menu = document.querySelectorAll('.button_menu'),
menu = document.querySelectorAll('.header__wrapper_services');

button_menu.addEventListener('click', () => {
menu.classList.add('active');
});