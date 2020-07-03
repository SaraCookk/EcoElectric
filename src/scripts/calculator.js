$(document).ready(function(){
    $("#navbar").load("./templates/header.html");
    $("#footer").load("./templates/footer.html");
    $(".count").prop('disabled', true);
    $('input.count').each(
      function(index){
        var input = $(this);
        if(input.val() >= 1) {
          $( "div.bulb-descr[name=" + input.attr('id') + "]" ).show();
        } else {
          $( "div.bulb-descr[name=" + input.attr('id') + "]" ).hide();
        }
      }
    );
    $('div.bulb-summary-descr').each(function(index){
      $(this).hide();
    })
    $(document).on('click','.plus, .minus',function(){
      var bulb = $(this).attr('name');
      var counter = $('input.count[id=' + bulb + ']' );
      var description = $( "div.bulb-descr[name=" + bulb + "]" );
      var summary = $( "div.bulb-summary[name=" + bulb + "]" );
      var summaryDescr = $( "div.bulb-summary-descr#" + bulb + "-sum");
      if ($(this).hasClass('plus')) {
        $(counter).val(parseInt($(counter).val()) + 1 );
      } else {
        $(counter).val(parseInt($(counter).val()) - 1 );
        if ($(counter).val() == -1) {
           $(counter).val(0);
        }
      }
      if ($(counter).val() >= 1) {
        summary.children('[name=' + bulb + ']').text($(counter).val())
        summaryDescr.show();
        description.show();
      } else {
        summaryDescr.hide();
        description.hide();
      }
    });
    $(document).on('change','select.custom-select',function(){
      $('div.bulb-summary[name=' + $(this).attr('id') + ']').show();
      $('p[name=' + $(this).attr('id') + ']').text($(this).val());
    })
  });
