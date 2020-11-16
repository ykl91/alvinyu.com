$(document).ready(function(){

///////Dark&Light button///////

// Check LocalStorage for Existing Key and set Mode
if (localStorage.getItem("mode") == "dark") {
    $( "body" ).addClass( "dark" );
        $( ".inner-switch" ).text( "ON" );
    } else if (localStorage.getItem("mode") == "light"){
        $( "body" ).removeClass( "dark" );
        $( ".inner-switch" ).text( "OFF" );
    }
    // Check LocalStorage for Existing Key then Detect Browswer "prefers-color-scheme" and set Mode
    var mq = window.matchMedia( '(prefers-color-scheme: dark)' );
    if (localStorage.getItem("mode") == "light"){
        $( "body" ).removeClass( "dark" );
        $( ".inner-switch" ).text( "OFF" );
    } else if ( mq.matches ){
        $( "body" ).addClass( "dark" );
        $( ".inner-switch" ).text( "ON" );
    }

    // Toggle Mode and set LocalStorage Key
    $( ".inner-switch" ).on("click", function() {
        if( $( "body" ).hasClass( "dark" )) {
          $( "body" ).removeClass( "dark" );
          $( ".inner-switch" ).text( "OFF" );
          localStorage.setItem("mode","light");
        } else {
          $( "body" ).addClass( "dark" );
          $( ".inner-switch" ).text( "ON" );
          localStorage.setItem("mode","dark");
        }
    });

///////////////////////////////

//Page Transition
// $(".animsition").animsition({
//     inClass: 'fade-in',
//     outClass: 'fade-out',
//     inDuration: 1500, //1500
//     outDuration: 800,
//     linkElement: '.animsition-link',
//     // e.g. linkElement: 'a:not([target="_blank"]):not([href^="#"])'
//     loading: true,
//     loadingParentElement: 'body', //animsition wrapper element
//     loadingClass: 'animsition-loading',
//     loadingInner: '', // e.g '<img src="loading.svg" />'
//     timeout: false,
//     timeoutCountdown: 5000, //5000
//     onLoadEvent: true,
//     browser: [ 'animation-duration', '-webkit-animation-duration'],
//     // "browser" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
//     // The default setting is to disable the "animsition" in a browser that does not support "animation-duration".
//     overlay : false,
//     overlayClass : 'animsition-overlay-slide',
//     overlayParentElement : 'body',
//     transition: function(url){ window.location.href = url; }
//   });


///////////////////////////////

//toggle menu
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
});

///////////////////////////////