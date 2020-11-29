$(document).ready(function(){

// ///////Dark&Light button///////

// // Check LocalStorage for Existing Key and set Mode
// if (localStorage.getItem("mode") == "dark") {
//     $( "body" ).addClass( "dark" );
//         $( ".inner-switch" ).text( "ON" );
//     } else if (localStorage.getItem("mode") == "light"){
//         $( "body" ).removeClass( "dark" );
//         $( ".inner-switch" ).text( "OFF" );
//     }
//     // Check LocalStorage for Existing Key then Detect Browswer "prefers-color-scheme" and set Mode
//     var mq = window.matchMedia( '(prefers-color-scheme: dark)' );
//     if (localStorage.getItem("mode") == "light"){
//         $( "body" ).removeClass( "dark" );
//         $( ".inner-switch" ).text( "OFF" );
//     } else if ( mq.matches ){
//         $( "body" ).addClass( "dark" );
//         $( ".inner-switch" ).text( "ON" );
//     }

//     // Toggle Mode and set LocalStorage Key
//     $( ".inner-switch" ).on("click", function() {
//         if( $( "body" ).hasClass( "dark" )) {
//           $( "body" ).removeClass( "dark" );
//           $( ".inner-switch" ).text( "OFF" );
//           localStorage.setItem("mode","light");
//         } else {
//           $( "body" ).addClass( "dark" );
//           $( ".inner-switch" ).text( "ON" );
//           localStorage.setItem("mode","dark");
//         }
//     });

const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'bx-sun'

///////////Selected topic (if user selected)/////////////
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark':'light'
const getCurrentIcon = () =>themeButton.classList.contains(iconTheme) ? 'bx-moon':'bx-sun'

if(selectedTheme){
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'bx-moon' ? 'add' : 'remove'](iconTheme)
}

themeButton.addEventListener('click', ()=>{
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.getItem('selected-icon', getCurrentIcon())

})

///////////toggle menu///////////
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
});

///////////////////////////////