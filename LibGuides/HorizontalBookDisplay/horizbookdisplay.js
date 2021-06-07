//Uses jQuery
$(document).ready(function() {
  //Show widget title in admin view
  var $cmdDiv = $('#s-lg-admin-command-bar');
  if ($cmdDiv.length) {
    $('.js-widget-title').css('display', 'block');
  };
  //Get ID for box containing script/books
  var boxID = $('#horiz-book-display').parents().eq(3).attr("id");
  //If box contains 4 books, divide into 4 equal columns
  if ($('#' + boxID + ' .s-lg-book').length === 4) {
    $('#' + boxID + ' .s-lg-book').parents('ul').addClass("row");
    $('#' + boxID + ' .s-lg-book').parents('li').addClass("col-sm-3");
  //If box contains 3 books, divide into 3 equal columns
  } else if ($('#' + boxID + ' .s-lg-book').length === 3) {
    $('#' + boxID + ' .s-lg-book').parents('ul').addClass("row");
    $('#' + boxID + ' .s-lg-book').parents('li').addClass("col-sm-4");
  //If box contains 2 books, divide into 2 equal columns
  } else if ($('#' + boxID + ' .s-lg-book').length === 2) {
    $('#' + boxID + ' .s-lg-book').parents('ul').addClass("row");
    $('#' + boxID + ' .s-lg-book').parents('li').addClass("col-sm-6");
  }
});
