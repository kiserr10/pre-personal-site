$(document).ready(function () {
$(function (showGif) {
    $('.bradPittGif').addClass('hidden').hide()
    $(".toggleGif").click(function () {
        if ($(".bradPittGif").hasClass("hidden")) {
            $(".bradPittGif").removeClass("hidden").toggle(500);
        }
        else {
            $(".bradPittGif").addClass("hidden").toggle(500);
        }
    });
  });
});
