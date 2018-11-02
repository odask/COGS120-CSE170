$(document).ready(function(){
   $("#building_preference").click(function(){
       $(".subMenu").slideToggle();
   });

   $("input[name=building]:radio").click(function () {
         if ($('input[name=building]:checked').val() == "geisel") {
             $('.room_preferences2').hide();
             $('.room_preferences1').show();

         } else if ($('input[name=building]:checked').val() == "centerhall") {
             $('.room_preferences2').show();
             $('.room_preferences1').hide();

         }
     });

     $("input[name=room]:radio").click(function() {
       if($('input[name=room]:checked').val() == "101"){
         $('#search1').show();
       }

     });

     $("#dropdown").on("change", function() {
        if (this.value == "bathroom"){
            window.location.href='restroom.html';
        }
        else if (this.value == "other"){
            window.location.href='other_catergories.html';
        }
     });
});
