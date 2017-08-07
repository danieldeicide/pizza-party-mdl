$( document ).ready(function(){
  $('.parallax').parallax();
})
getPanelWidth = function() {
    var screenWidth = $(window).width();
    panelSize = screenWidth > '991' ? Math.floor(screenWidth * 0.5) : Math.floor(screenWidth * 0.7);
    console.log(panelSize);
    return panelSize;
};
$('.button-collapse').sideNav({
    menuWidth: getPanelWidth(),
    edge: 'left', // Choose the horizontal origin
    draggable: false,
    closeOnClick: true
  }
);
  $('.carousel.carousel-slider').carousel({fullWidth: true });
