$(document).ready(function(){
  
  var heroSlider = $("#hero-slider").sequence({
    pagination: true,
    autoPlay: true,
    moveActiveFrameToTop: false,
    cycle: true
  }).data("sequence");

  var quoteSlider = $("#quote-slider").sequence({
    pagination: '.js-quote-slider-pagination',
    autoPlay: true,
    moveActiveFrameToTop: false,
    cycle: true
  }).data("sequence");
  
  var aboutSlider = $("#about-slider").sequence({
    pagination: '.js-about-slider-pagination',
    autoPlay: true,
    moveActiveFrameToTop: false,
    cycle: true
  }).data("sequence");

});