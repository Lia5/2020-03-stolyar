$(function() {
    if(jQuery('.scroll-to').length) {
        var $page = $('html, body');
        $('.scroll-to[href*="#"]').click(function() {
            $page.animate({
                scrollTop: $($.attr(this, 'href')).offset().top
            }, 400);
            if ( window.innerWidth < 1082 || window.screen.width < 1082) {
                $('.main-menu').removeClass('active');
                $('.menu-toggle').removeClass('active');
            }
            return false;
        });
    }
	// Custom JS
    $('.products__items').owlCarousel({
        loop: true,
        dots: false,
        margin: 10,
        nav: true,
        navText: ['<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1000 1000" enable-background="new 0 0 1000 1000" xml:space="preserve"><metadata> Svg Vector Icons : http://www.onlinewebfonts.com/icon </metadata><g><g transform="matrix(1 0 0 -1 0 1008)"><path d="M756.2,741.8L990,508L756.2,274.2l-27,27L918.1,490H10v36h908.1L729.3,714.8L756.2,741.8z"/></g></g></svg>', '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1000 1000" enable-background="new 0 0 1000 1000" xml:space="preserve"><metadata> Svg Vector Icons : http://www.onlinewebfonts.com/icon </metadata><g><g transform="matrix(1 0 0 -1 0 1008)"><path d="M756.2,741.8L990,508L756.2,274.2l-27,27L918.1,490H10v36h908.1L729.3,714.8L756.2,741.8z"/></g></g></svg>'],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });
    $('.idea__items').owlCarousel({
        loop: false,
        dots: false,
        margin: 10,
        nav: true,
        navText: ['<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1000 1000" enable-background="new 0 0 1000 1000" xml:space="preserve"><metadata> Svg Vector Icons : http://www.onlinewebfonts.com/icon </metadata><g><g transform="matrix(1 0 0 -1 0 1008)"><path d="M756.2,741.8L990,508L756.2,274.2l-27,27L918.1,490H10v36h908.1L729.3,714.8L756.2,741.8z"/></g></g></svg>', '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1000 1000" enable-background="new 0 0 1000 1000" xml:space="preserve"><metadata> Svg Vector Icons : http://www.onlinewebfonts.com/icon </metadata><g><g transform="matrix(1 0 0 -1 0 1008)"><path d="M756.2,741.8L990,508L756.2,274.2l-27,27L918.1,490H10v36h908.1L729.3,714.8L756.2,741.8z"/></g></g></svg>'],
        responsive: {
            0: {
                items: 1
            },
            580: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });
  
    //select-number form
    if(jQuery('.phone-mask').length) {
        jQuery(function($){
            $(".phone-mask").mask("+38(999) 999-9999");
        });
    }
    function getQueryVariable(variable) {
        var query = window.location.search.substring(1);
        var vars = query.split("&");
        for (var i=0;i<vars.length;i++) {
            var pair = vars[i].split("=");
            if(pair[0] == variable){return pair[1];}
        }
        return(false);
    }

    $('form').find('input.utm_source').each(function() {
        var a = getQueryVariable('utm_source');
        if(a){
            $(this).val(a);
        }
    }); 
    $('form').find('input.utm_medium').each(function() {
        var a = getQueryVariable('utm_medium');
        if(a){
            $(this).val(a);
        }
    });
    $('form').find('input.utm_campaign').each(function() {
        var a = getQueryVariable('utm_campaign');
        if(a){
            $(this).val(a);
        }
    });
    $('form').find('input.utm_term').each(function() {
        var a = getQueryVariable('utm_term');
        if(a){
            $(this).val(a);
        }
    });
    $('form').find('input.utm_content').each(function() {
        var a = getQueryVariable('utm_content');
        if(a){
            $(this).val(a);
        }
    });
    
    if(jQuery('.modal__wrap').length) {
        let modalWrap = $('.modal__wrap');
        
        //popup
        $(".modal-open").click(function (e){
          e.preventDefault();
          var numModal = $(this).attr('href');
          var modal =  $(numModal);
          modalWrap.removeClass('fadeOutUp');
          modalWrap.addClass('fadeInDown');
          modal.removeClass('disabled');
          modal.addClass('flex');
          $('body').addClass('body-modal-open');
          // body.addClass('body-modal');
        });
      
        // $(".modal-open").bind('touchstart', function(e){
        //   e.preventDefault();
        //   var numModal = $(this).attr('href');
        //   var modal =  $(numModal);
        //   modalWrap.removeClass('fadeOutUp');
        //   modalWrap.addClass('fadeInDown');
        //   modal.removeClass('disabled');
        //   modal.addClass('flex');
        //   // body.addClass('body-modal');
        // });
      
      
        $('.modal-close').click(function (){
      
          modalWrap.removeClass('fadeInDown');
          modalWrap.addClass('fadeOutUp');
          setTimeout(function() {
              $('.modal').addClass('disabled');
            }, 700);
          setTimeout(function() {
              $('.modal').removeClass('flex');
              $('body').removeClass('body-modal-open');
            }, 800);  
      
        });
      
        $('.modal').mouseup(function (e){ // событие клика по веб-документу
          var div = $(".modal__body"); // тут указываем ID элемента
          var close = $('.modal-close');
          if (close.is(e.target)) {
      
          } else if (!div.is(e.target) // если клик был не по нашему блоку
          && div.has(e.target).length === 0) { // и не по его дочерним элементам
              var modalWrap = $('.modal__wrap');
              modalWrap.removeClass('fadeInDown');
              modalWrap.addClass('fadeOutUp');
              setTimeout(function() {
                  $('.modal').addClass('disabled');
              }, 700);
              setTimeout(function() {
                  $('.modal').removeClass('flex');
                  $('body').removeClass('body-modal-open');
              }, 800); 
            
          }
        });
      }

    //click on form submit button - AMO
    $('.kviz__btn').on('click', function(e){
        e.preventDefault();
        var btn = $(this);
        $($(this).parent().parent().parent()).each(function () {
            var form = $(this);
            console.log(form);
            form.find('.rfield').addClass('empty_field');

                // Функция проверки полей формы

                form.find('.rfield').each(function(){
                if($(this).val() != ''){
                    // Если поле не пустое удаляем класс-указание
                    $(this).removeClass('empty_field');

                if (!form.find('.empty_field').length) {
                    var numModal = btn.attr('href');
                    var modal =  $(numModal);
                    var modalWrap = $('.modal__wrap');
                    modalWrap.removeClass('fadeOutUp');
                    modalWrap.addClass('fadeInDown');
                    $('.modal').addClass('disabled');
                    modal.removeClass('disabled');
                    modal.addClass('flex');
                    $('body').addClass('body-modal-open');
                   
                    var form2 = form.closest('form');
                    if(form2.attr("name")){
                        var form2 = document.forms.fileform;
                        var formData = new FormData(form2);
                        console.log(formData);
                        $.ajax({
                            method: "POST",
                            data: formData,
                            url: '../sendamo.php',
                            type: 'POST',
                            success: function (data) {
                                    //тут трек GA если надо
                                    // alert(data);
                                    $('.rfield').val('');
                                    console.log(data);
                                },
                            
                            cache: false,
                            contentType: false,
                            processData: false
                        });
                    } else {
                        jQuery.ajax({
                            method: "POST",
                            data: form2.serialize(),
                            url: '../sendamo.php',
                            dataType: "json",
                            success: function (data) {
                                //тут трек GA если надо
                                
                                $('.rfield').val('');
                                console.log(data);
                            },
                        }); 
                    }
                    
                    // jQuery.ajax({
                    //     method: "POST",
                    //     data: form2.serialize(),
                    //     url: '../sendamo.php',
                    //     dataType: "json",
                    //     success: data
                    // });
                    // let formData = new FormData($(form2));
                    // $.ajax({
                    //     url: '../sendamo.php',
                    //     type: 'POST',
                    //     data: formData,
                    //     success: function (data) {
                    //         //тут трек GA если надо
                    //         alert(data);
                    //         console.log(data);
                    //     },
                    //     cache: false,
                    //     contentType: false,
                    //     processData: false
                    // });

                    fbq('track', 'Lead');
                    btn.attr('href', "#").removeClass('kviz__btn').css('pointer-events', 'none');
                    btn.parent().css('opacity', '0.5').css('pointer-events', 'none');
                    }
                // fbq('track', 'Lead');

                } else {}
            });
        })
    });
    if(jQuery('.scroll-to').length) {
        var $page = $('html, body');
        $('.scroll-to[href*="#"]').click(function() {
            $page.animate({
                scrollTop: $($.attr(this, 'href')).offset().top
            }, 400);
            return false;
        });
    }
    $('.nav__phone').click(function(){
        fbq('track', 'Contact');
    });
    $('.consult__title a').click(function(){
        fbq('track', 'Contact');
    });
    $('.subtitle a').click(function(){
        fbq('track', 'Lead_net');
    });
    $('.consult__icons a').click(function(){
        fbq('track', 'Lead_net');
    });
    fbq('track', 'ViewContent');
});



$(window).scroll(function(){
    $('.btn-to-top').toggleClass('active', $(this).scrollTop() > 200);
});

document.addEventListener('DOMContentLoaded', function(){
//menu
    var menu = document.querySelector('.menu-toggle');
    menu.addEventListener('click', function(){
        var nav = document.querySelector('.main-menu');
        nav.classList.toggle('active');
        var navGamb = document.querySelector('.menu-toggle');
        navGamb.classList.toggle('active');
        var navBody = document.getElementByTagName('body');
        navBody.classList.toggle('body-modal-open');
    });

});




