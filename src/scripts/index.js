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
    window.onscroll = function() {scrollFunction()};
      function scrollFunction() {
        if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
          document.getElementById("navbar-eco").style.padding = "0px 0px";
          document.getElementById("navbar-eco").style.backgroundColor = "white";
          document.getElementById("logo").style.width = "120px";
        } else {
          document.getElementById("navbar-eco").style.padding = "10px 0px";
          document.getElementById("navbar-eco").style.backgroundColor = "rgba(0,0,0,0)";
          document.getElementById("logo").style.width = "200px";
        }
      }
  });
