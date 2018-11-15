$(document).ready(function(){
  var building_expanded = false;
  $("#plus_building").click(function(){
      if (!building_expanded){
          $("#buildingpreference").slideToggle();
          building_expanded = true;
          $('#plus_building').attr('src', 'icons/minus-button.png');
      }
      else {
          $("#buildingpreference").slideToggle();
          building_expanded = false;
          $('#plus_building').attr('src', 'icons/add-plus-button.png');

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
       if($('input[name=room]:checked').val() == "101"){
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
        localStorage.setItem('place', 'Classroom');
        window.location.href='map.html';

     });
});
