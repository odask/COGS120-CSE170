$(document).ready(function(){

  //If guest is true, hide the profile icon
  var guest = window.localStorage.getItem('guest');
  console.log(guest);
  if (guest == 'true'){
      console.log("Guest is true");
      //hide the profile icon
      $('#profileBtn').hide();
  }
  else {
      console.log("Guest is false");
  }
  var building_expanded = false;
  var toast = document.getElementById("snackbar");
  $("#building").click(function(){
      if (!building_expanded){
          $("#building").text("Building -");
          $("#buildingpreference").slideToggle();
          building_expanded = true;
          
      }
      else {
          $("#buildingpreference").slideToggle();
          building_expanded = false;
          $("#building").text("Building +");

      }

  });



   $("input[name=building]:radio").click(function () {
         if ($('input[name=building]:checked').val() == "geisel") {
             $('.room_preferences2').hide();
             $('.room_preferences1').show();

         } else if ($('input[name=building]:checked').val() == "centerhall") {
             $('.room_preferences2').show();
             $('.room_preferences1').hide();
             $('.first_floor').show();
         }
     });

     $('.second_floor').hide();
     $("#dropdown_floor").on("change", function() {
        if (this.value == "1_floor"){
          $('.second_floor').hide();
          $('.first_floor').show();
        } else {
            $('.first_floor').hide();
            $('.second_floor').show();
        }
     });

     $("input[name=room]:radio").click(function() {
       if($('input[name=room]:checked')){
         $('#searchBtn').show();
       }

     });

     $("#dropdown").on("change", function() {
        if (this.value == "bathroom"){
            window.location.href='restroom.html';
        }
        else if (this.value == "other"){
            window.location.href='other_catergories.html';
        }
        else if (this.value == "search"){
            window.location.href='search.html';
        }
     });

     $('#dropdown_floor').on("change", function() {
        if (this.value == "1_floor"){
            $('.first_floor').show();
            $('.second_floor').hide();
        }
        else if (this.value == "2_floor"){
            $('.first_floor').hide();
            $('.second_floor').show();
        }
     });

     $('#searchBtn').click(function (){
        //Get the value
        if ($('input[name=building]:checked').val() == "centerhall") {
            //throw an error

            $('#snackbar').text("Building coming soon. Sorry!");
            toast.className = "show";
            // After 3 seconds, remove the show class from DIV
            setTimeout(function(){ toast.className = toast.className.replace("show", ""); }, 3000);
            return;
        }
        localStorage.setItem('place', 'Classroom');
        window.location.href='map.html';

     });
});
