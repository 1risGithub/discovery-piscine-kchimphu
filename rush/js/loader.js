$(window).on("load", function () {
  $("#loader").fadeOut(500);
});

$(document).ready(function () {
  $("#year").text(new Date().getFullYear());
});
