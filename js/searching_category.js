jQuery(function($) {

  //local storage check
  console.log("Getting items from local storage");
  //var preference = localStorage.getItem('preference');
  var building = localStorage.getItem('building');
  var preference = JSON.parse(localStorage.getItem('preference2'));

  console.log(preference);
  console.log(building);
  //console.log(preference2);

  if (building) {
    $("#building_name").text(building);
  }

  
  if (preference) {
    $("#name").text(preference + " Bathroom");
  }

  if (preference.includes("Gender Neutral")){
    console.log("Gender neutral option");
    $("#bathroom_name1").text("BATHROOM");
    $(".option2").hide();

  }
  else {
    if (preference){
      $("#bathroom_name1").text(preference);
      $("#bathroom_name2").text(preference);
     }
    // else if (preference == 'Gender Neutral'){
    //   $("#bathroom_name1").text("BATHROOM");
    //   $(".option2").hide();
    // }
  }
    

  $(".option1").click(function() {
    $(this).next(".decription").stop().slideToggle(500);
    $(this).find(".hide, .show").toggle();
  });

  $(".option2").click(function() {
    $(this).next(".decription2").stop().slideToggle(500);
    $(this).find(".hide, .show").toggle();
  });

  $("#bathroom1").click(function() {
    if (preference.includes("Gender Neutral")){
      window.localStorage.setItem('place', 'bathroom8');
    }
    else {
      window.localStorage.setItem('place', 'bathroom1');
    }
    window.location.href='map.html';
    });

  $("#bathroom2").click(function() {
      window.localStorage.setItem('place', 'bathroom2');
      window.location.href='map.html';
      });

  
  

});
