$(document).ready(function(){
  $('.button__services').each(function(i){
    $(this).on('click',function(){
      $('.services__front').eq(i).toggleClass('services__front_none');
      $('.services__back').eq(i).toggleClass('services__back_visiable');
    })
  })
  
  $('.button__services_back').each(function(i){
    $(this).on('click',function(){
      $('.services__back').eq(i).removeClass('services__back_visiable');
      $('.services__front').eq(i).removeClass('services__front_none');
    })
  })

  $('.response__slider').slick({
    centerMode: true,
    centerPadding: '150px',
    slidesToShow: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: false,
          centerPadding: '0px',
          slidesToShow: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: false,
          centerPadding: '0px',
          slidesToShow: 1
        }
      }
    ]
  });

  $('#button__header').on('click',function(){
    $('.overlay, #modal__call').fadeIn();
    $('.hamburger').removeClass('hamburger_active');
    $('.header').removeClass('header_active');
  })

  $('.button__footer').on('click',function(){
    $('.overlay, #modal__call').fadeIn();
    $('.hamburger').removeClass('hamburger_active');
    $('.header').removeClass('header_active');
  })




  function fadeOutElement(item){
    $(item).on('click',function(){
      $('.overlay').fadeOut('slow');
    })
  }

  fadeOutElement('.modal__call-exit');
  fadeOutElement('.modal__application-exit');
  
$('#hamburger').on('click',function(){
  $(this).toggleClass('hamburger_active');
  $('.header').toggleClass('header_active');
})

// smooth scroll
$(window).scroll(function(){
    if($(this).scrollTop()> 1600){
      $('.up').fadeIn();
    }else{
      $('.up').fadeOut();
    }
  });

  $("a[href=#up]").click(function(){
    const _href = $(this).attr("href");
    $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
    return false;
});

})

