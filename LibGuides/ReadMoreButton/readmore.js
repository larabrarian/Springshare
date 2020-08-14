$(document).ready(function() {
  //READ MORE OPTION
  $('.read-more').css({'cursor': 'pointer', 'color': '#337ab7', 'border-bottom': '1px dotted #337ab7'});
  $('.read-more-hidden').hide();
  $(".read-more").click(function() {
    var clickVal = $(this).attr("id");
    if ($('#' + clickVal + '-content').is(":hidden")) {
      $('#' + clickVal).text("Hide details...");
      $('#' + clickVal + '-content').show();
    } else {
      $('#' + clickVal).text("Read more...");
      $('#' + clickVal + '-content').hide();
    }
  });
});
