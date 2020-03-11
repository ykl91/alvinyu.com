// $('.hamburger').on("click",function(){
//     if( !$('body').hasClass('mobileopen') ) {
//         $('body').addClass('mobileopen');
//     } else {
//         $('body').removeClass('mobileopen');
//     }
//     return false; 
// });

// $('.link_click').on('click', function(){
//     $('body').removeClass('mobileopen');
// });


    $('.portfolio-items').isotope({
        itemSelector: '.item',
        layoutMode: 'fitRows'
    });
    $('.portfolio-menu ul li').click(function(){
        $('.portfolio-menu ul li').removeClass('active');
        $(this).addClass('active');

        var selector = $(this).attr('data-filter');
        $('.portfolio-items').isotope({
            filter: selector
        });
        return false;
    });

/****************/

$(function(){
    $('.navbar, nav').click(function(){
      $('.navbar').toggleClass('navbar-on');
      $('nav').fadeToggle();
      $('nav').removeClass('nav-hide');
    });
  });

/****************/

function counting(){
    var count = setInterval(function(){
        var c = parseInt($('.counting').text());
        $('.counting').text((++c).toString());
        if (c == 100){
            clearInterval(count);
            $('.counting').addClass('hide')
            $('.page-preloader').addClass('active')
        }
    },60)
}
counting()