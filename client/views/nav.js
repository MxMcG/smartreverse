(function ($) {
  $(document).ready(function(){

  // fade in .navbar
  $(function () {
    $(window).scroll(function () {
      // set distance user needs to scroll before we fadeIn navbar

      if ($(this).scrollTop() > 550) {
        $('.navbar').css('background', '#3a4349')
        $('.navbar-inverse .navbar-nav > li > a ').css('color', 'white')
      } else if ($(this).scrollTop() < 550) {
        $('.navbar').css('background', 'transparent');
        $('.navbar-inverse .navbar-nav > li > a ').css('color', '#3a4349')
      }

    });


  });

});
  }(jQuery));