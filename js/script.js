$(document).ready(function() {


    // Navigation Scroll
    $(function() {
      $('a[href*=\\#]:not([href=\\#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top
            }, 1000);
            return false;
          }
        }
      });
    });

    /* FAQ */

    $(document).ready(function(){
        $('dd').hide();
        $('dt').click(function()
        {var up = $(this).nextUntil('dt');
            up.slideToggle(100);});
    });


    /* Map */
    new GMaps({
    div: '.map',
    lat: 53.270962,
    lng: -9.062691,
    scrollwheel: false,
    zoom: 16
  });
});
