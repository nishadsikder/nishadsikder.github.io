
var navb = document.getElementById("navbar-nav");
var navlink = navb.getElementsByClassName("nav-link");
for (var i = 0; i < navlink.length; i++) {
  navlink[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}

  // Preloader
  $(window).on('load', function() {
    if ($('#preloader').length) {
      $('#preloader').delay(500).fadeOut('slow', function() {
        $(this).remove();
      });
    }
  });