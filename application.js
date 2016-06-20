jQuery(document).ready(function() {


$('body').on('click', 'button', function() {
  //unhide
  $("section").removeClass("hidden");
  //remove button???
  $(this).remove();
});



});
