$( document ).ready(function(){
  $('.parallax').parallax();
})
$(".button-collapse").sideNav();
$('.button-collapse').sideNav({
    menuWidth: 300, // Default is 240
    edge: 'left', // Choose the horizontal origin
    closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
  }
);
