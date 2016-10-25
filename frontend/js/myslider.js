//Slider//
define(['jquery', 'slick'], function($) {
    
    $('.slider').slick({
      dots: true,
  });
    
    function ViewUpdate() {
    var viewportWidth = $(window).width();
    if (viewportWidth < 815) {
        $('.benefits__slider').slick({
        dots: true,
        arrows: false,
  });
    }
        else {
        $('.benefits__slider').slick('unslick');  
        }
}

$(window).load(ViewUpdate);
$(window).resize(ViewUpdate);
    
});
