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

///////////toggle menu///////////
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
});

///////////////////////////////