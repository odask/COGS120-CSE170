jQuery(function($) {

  $(".option1").click(function() {
    $(this).next(".decription").stop().slideToggle(500);
    $(this).find(".hide, .show").toggle();
  });

  $(".option2").click(function() {
    $(this).next(".decription2").stop().slideToggle(500);
    $(this).find(".hide, .show").toggle();
  });

});
