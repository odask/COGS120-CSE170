jQuery(function($) {

  $(".option1").click(function() {
    $(this).next(".decription").stop().slideToggle(500);
    $(this).find(".hide, .show").toggle();
  });

  $(".option2").click(function() {
    $(this).next(".decription2").stop().slideToggle(500);
    $(this).find(".hide, .show").toggle();
  });

  $("#bathroom1").click(function() {
    window.localStorage.setItem('place', 'bathroom1');
    window.location.href='map.html';
    });

    $("#bathroom2").click(function() {
      window.localStorage.setItem('place', 'bathroom2');
      window.location.href='map.html';
      });
  

});
