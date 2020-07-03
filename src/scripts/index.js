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
  });
