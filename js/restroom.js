$(document).ready(function(){

   var pref_expanded = false;
   var building_expanded = false;
   var toast = document.getElementById("snackbar");
   var nearMe = false;
   console.log("I'm in restroom.js");

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

   $("#preferences").click(function(){
       if (!pref_expanded){
           $("#bathpreference").slideToggle();
           pref_expanded = true;
           $('#plus_preferences').attr('src', 'icons/minus-button.png');
       }
       else {
           $("#bathpreference").slideToggle();
           pref_expanded = false;
           $('#plus_preferences').attr('src', 'icons/add-plus-button.png');


       }

   });
   $("#building").click(function(){
       if (!pref_expanded){
           $("#buildingPreference").slideToggle();
           pref_expanded = true;
           $('#plus_building').attr('src', 'icons/minus-button.png');

       }
       else {
           $("#buildingPreference").slideToggle();
           pref_expanded = false;
           $('#plus_building').attr('src', 'icons/add-plus-button.png');
       }
   });



   $("#dropdown").on("change", function() {
       if (this.value == "classroom"){
           window.location.href='classroom.html';
       }
       else if (this.value == "search"){
           window.location.href='search.html';
       }
       else if (this.value == "other"){
           window.location.href='other_catergories.html';
       }
    });


     $('#myForm input[type="checkbox"]').change(function() {
        if(this.checked){
            //hide building
            //alert("Test checked");
            $('#buildingDiv').fadeOut();
            $('#building').fadeOut();
            nearMe = true;
        }
        else{
           //show building selection when nearme is unchecked
           alert("Test not checked");
           $('#buildingDiv').show();
           $('#building').show();
           //nearMe = false;
        }
    });




   //what does clicking search do?
   //gets the preference and building
   //saves it into local storage
   //then goes to searching_category_template page
   $("#searchBtn").click(function() {
       //Get the preference
       //var pref = $('input[name="option"]:checked');

       var checkboxValues = [];
       $('input[name=option]:checked').map(function() {
           checkboxValues.push($(this).val());
       });
       console.log(checkboxValues.length);
       var location = $('input[name="location"]:checked');
       console.log(location.length);
       //Get Near me checkbox value(T/F)
       //var nearMe = $('#myForm input[name=nearme]').prop('checked');
       if (nearMe){
            console.log("NearMe checked");
            console.log(nearMe);
            localStorage.setItem('nearMe', nearMe);
            //building is optional
            console.log(localStorage.getItem('nearMe'));

            if (location.length != 0){
                //add it
                console.log("I went here");
                localStorage.setItem('building', location[0].value);
            }
            else {
                console.log("Else clause");
                localStorage.setItem('building', "none");
            }
       } else {
           console.log("NearMe NOT checked");
           localStorage.setItem('nearMe', false);
           console.log(localStorage.getItem('nearMe'));
           //We need to specify the building and preferences

           //throw an error if location and preferences are both empty
           if (location.length == 0 || checkboxValues.length == 0){
            $('#snackbar').text("Please select a building or preferences.");
                toast.className = "show";
                // After 3 seconds, remove the show class from DIV
                setTimeout(function(){ toast.className = toast.className.replace("show", ""); }, 3000);
                return;
           }
           //Get the building
           if (location[0].value == 'Price Center'){
               console.log("I got to this part");
                $('#snackbar').text("Building coming soon. Sorry!");
                toast.className = "show";
                // After 3 seconds, remove the show class from DIV
                setTimeout(function(){ toast.className = toast.className.replace("show", ""); }, 3000);
                return;

           }
           localStorage.setItem('building', location[0].value);


       }


       //save them in local storage
       //localStorage.setItem('preference', pref[0].value);
       localStorage.setItem('preference2', JSON.stringify(checkboxValues));

       //go to searching_category_template
       window.location.href='searching_category_template.html';
       });

});
function myFunction() {
    // Get the snackbar DIV
    var x = document.getElementById("snackbar");

    // Add the "show" class to DIV
    x.className = "show";

    // After 3 seconds, remove the show class from DIV
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}
