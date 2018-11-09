jQuery(function($) {

  //local storage check
  console.log("Getting items from local storage");
  //var preference = localStorage.getItem('preference');
  var building = localStorage.getItem('building');
  var preference = JSON.parse(localStorage.getItem('preference2'));
  var nearMe = localStorage.getItem('nearMe');

  console.log(preference);
  console.log(building);
  //console.log(preference2);

  if (building != 'none') {
    $("#building_name").text(building);
    if (building == 'Geisel Library'){
      $(".nearMe").hide();
    }
  }
  else {
    $("#building_name").text("Cognitive Science Building");
  }

  
  if (preference.length > 0) {
    console.log("we did this");
    console.log(preference);
    $("#name").text(preference + " Bathroom");
  } else {
    $("#bathroom_name1").text("Male,Female");
    $("#bathroom_name2").text("Male,Female");
    $("#csb_bathroom").text("Male,Female");
  }

  if (preference.includes("Gender Neutral")){
    console.log("Gender neutral option");
    $("#bathroom_name1").text("BATHROOM");
    $(".option2").hide();
    $(".nearMe").hide();

  }
  else {
    if (preference.length > 0){
      $("#bathroom_name1").text(preference);
      $("#bathroom_name2").text(preference);
      $("#csb_bathroom").text(preference);
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

  $(".nearMe").click(function() {
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

  
  $("#nearMeBtn").click(function() {
    window.localStorage.setItem('place', 'csb');
    window.location.href='map.html';
    });

});
