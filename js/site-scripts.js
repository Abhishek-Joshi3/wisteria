//Equal Height
!function n(t,r,e){function i(u,f){if(!r[u]){if(!t[u]){var c="function"==typeof require&&require;if(!f&&c)return c(u,!0);if(o)return o(u,!0);throw new Error("Cannot find module '"+u+"'")}var a=r[u]={exports:{}};t[u][0].call(a.exports,function(n){var r=t[u][1][n];return i(r||n)},a,a.exports,n,t,r,e)}return r[u].exports}for(var o="function"==typeof require&&require,u=0;u<e.length;u++)i(e[u]);return i}({1:[function(n,t,r){!function(n){function t(){var t,r=n("[data-eq]").map(function(){return n(this).data("eq")}).get();(t={},r.forEach(function(n){t[n+"::"+typeof n]=n}),Object.keys(t).map(function(n){return t[n]})).forEach(function(t){var r=0;n('[data-eq="'+t+'"]').css("min-height","").each(function(){n(this).outerHeight()>r&&(r=n(this).outerHeight())}).css("min-height",r+"px")})}n(window).on("load",function(){t()}),n(window).resize(function(){t()})}(jQuery)},{}]},{},[1]);

//Loader
$(window).on('load', function() {
//$('#status').fadeOut();
$('#preloader').delay(150).fadeOut('fast'); 
$('body').delay(50).css({'overflow':'visible'});
})

// Scroll to Top
$(".totop").click(function() {
$("html, body").animate({ scrollTop: 0 }, "slow");
return false;
});
$(window).scroll(function() {
if ($(this).scrollTop()) {
  $('.totop:hidden').stop(true, true).fadeIn();
} else {
  $('.totop').stop(true, true).fadeOut();
}
});


// Main Slider
$('.amenities_slider').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    speed: 2000,
    pauseOnHover:false,
    fade:false,
    arrows:false,
    dots:false,
    responsive: [ 
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        
          autoplay: false,
      }
    }       
  ]
});

$('.plan_slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 2000,
    pauseOnHover:false,
    fade:false,
    arrows:true,
    dots:false,
});

//Scroll to Menu
function scrollNav() {
$('.header .nav-link').click(function(){ 
  //Animate
  $('html, body').stop().animate({
      scrollTop: $( $(this).attr('href') ).offset().top - 80
  }, 900);
  return false;
});

$(".header .nav-link").click(function () {
  $(".header .nav-link").removeClass("active");
  $(this).addClass("active");   
});

$(".header .nav-link").click(function (event) {
  $(".navbar-collapse").collapse('hide');
});


}
scrollNav();



// Show Popup on Page Load
// $(window).on('load', function() {
//     $('#enquiryNow').modal('show');
// });

//Counter
$('.counter').countUp({
  'time': 1200,
  'delay': 10
});