$( document ).ready(function(){
  $('.parallax').parallax();
})
$(".button-collapse").sideNav();
$('.button-collapse').sideNav({
    menuWidth: 240, // Default is 240
    edge: 'left', // Choose the horizontal origin
    draggable: false,
    closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
  }
);
  $('.carousel.carousel-slider').carousel({fullWidth: true });
