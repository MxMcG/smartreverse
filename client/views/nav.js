(function ($) {
  $(document).ready(function(){

  // fade in .navbar
  $(function () {
    $(window).scroll(function () {
      // set distance user needs to scroll before we fadeIn navbar

      if ($(this).scrollTop() > 550) {
        $('.navbar').css('background', '#3a4349')
        $('.navbar-inverse .navbar-toggle .icon-bar').css('background-color', 'white')
      } else if ($(this).scrollTop() < 550) {
        $('.navbar').css('background', 'transparent');
        $('.navbar-inverse .navbar-toggle .icon-bar').css('background-color', '#3a4349')
      }

    });


  });

});
  }(jQuery));