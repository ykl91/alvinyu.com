$(document).ready(function() {
    //Preloader
    preloaderFadeOutTime = 1000;
    function hidePreloader() {
    var preloader = $('.spinner-wrapper');
    preloader.fadeOut(preloaderFadeOutTime);
    }
    hidePreloader();
    });