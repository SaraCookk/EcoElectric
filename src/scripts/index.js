$(document).ready(function(){
  $("#navbar").load("./templates/header.html");
  $("#footer").load("./templates/footer.html");
  $(document).on('click', 'button.button', function(){
    $(".overlay").fadeToggle(200);
    $(this).toggleClass('btn-open').toggleClass('btn-close');
  });
  $(document).on('click', '.overlay', function(){
    $(".overlay").fadeToggle(200);
    $(".button a").toggleClass('btn-open').toggleClass('btn-close');
    open = false;
  });

  window.onscroll = function() {
    scrollFunction()
  };
});

function scrollFunction() {
  var navbar = document.getElementById("navbar-eco");
  var logo = document.getElementById("logo");
  if (navbar) {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
      navbar.style.padding = "0px 0px";
      navbar.style.backgroundColor = "white";
      logo.style.width = "120px";
    } else {
      navbar.style.padding = "10px 0px";
      navbar.style.backgroundColor = "rgba(0,0,0,0)";
      logo.style.width = "200px";
    }  
  }
}

$.fn.isInViewport = function() {
  var elementTop = $(this).offset().top;
  var elementBottom = elementTop + $(this).outerHeight();
  var viewportTop = $(window).scrollTop();
  var viewportBottom = viewportTop + $(window).height();
  return elementBottom > viewportTop && elementTop < viewportBottom;
};

$(window).on('resize scroll', function() {
  $('.count').each(function() {
    var counter = $(this).attr('id');
    if ($(this).isInViewport()) {
      $(this).prop('Counter',0).animate({
        Counter: counter
    }, {
        duration: 4000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now).toLocaleString('en'));
        }
    });
    $(window).unbind('scroll resize');
    }
  });
});
