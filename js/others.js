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
    var room_expanded = false;
    var building_expanded = false;
    var toast = document.getElementById("snackbar");
    var nearMe = false;

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

    $("#otherrooms").click(function(){
        if (!room_expanded){
            $("#otherplace").slideToggle();
            room_expanded = true;
            $("#otherrooms").text("Other Places -");
        }
        else {
            $("#otherplace").slideToggle();
            room_expanded = false;
            $("#otherrooms").text("Other Places +");

        }

    });
    $("#building").click(function(){
        if (!building_expanded){
            $("#buildingPreference").slideToggle();
            building_expanded = true;
            $('#building').text("Building -");

        }
        else {
            $("#buildingPreference").slideToggle();
            building_expanded = false;
            $('#building').text("Building +");
        }
    });

    $("#searchBtn").click(function() {
        var places = [];
        $('input[name=option]:checked').map(function() {
            places.push($(this).val());
        });

        var locations = [];
        $('input[name=location]:checked').map(function() {
            locations.push($(this).val());
        });

        console.log(places);
        console.log(locations);
        if (places.length == 0 && locations.length == 0 && nearMe == false){
            $('#snackbar').text("Please select a type and building.");
            toast.className = "show";
            // After 3 seconds, remove the show class from DIV
            setTimeout(function(){ toast.className = toast.className.replace("show", ""); }, 3000);
            return; 
        } else if (places.length == 0){
            $('#snackbar').text("Please select a type.");
            toast.className = "show";
            // After 3 seconds, remove the show class from DIV
            setTimeout(function(){ toast.className = toast.className.replace("show", ""); }, 3000);
            return;
        } else if (locations.length == 0 && nearMe == false){
            $('#snackbar').text("Please select a building.");
            toast.className = "show";
            // After 3 seconds, remove the show class from DIV
            setTimeout(function(){ toast.className = toast.className.replace("show", ""); }, 3000);
            return;
        }
        if (nearMe){
            console.log("Near me switch");
            console.log(places);
            console.log(places[0]);
            switch(places[0]){
                case 'foodplaces':
                    window.localStorage.setItem('place', 'audreys');
                    window.location.href='map.html';
                    break;
                case 'studyroom':
                    window.localStorage.setItem('place', 'geisel_study');
                    window.location.href='map.html';
                    break;
                case 'nursingroom':
                    window.localStorage.setItem('place', 'nursing');
                    window.location.href='map.html';
                    break;
            }
        }
        else {
            if (places == 'foodplaces' && locations == 'geisel'){
                window.localStorage.setItem('place', 'audreys');
                window.location.href='map.html';
            }
            else if (places == 'studyroom' && locations == 'geisel'){
                window.localStorage.setItem('place', 'geisel_study');
                window.location.href='map.html';
            }
            else if (places == 'nursingroom' && locations == 'geisel'){
                window.localStorage.setItem('place', 'nursing');
                window.location.href='map.html';
            }
            else {
                $('#snackbar').text("Building coming soon. Sorry!");
                toast.className = "show";
                // After 3 seconds, remove the show class from DIV
                setTimeout(function(){ toast.className = toast.className.replace("show", ""); }, 3000);
                return;
            }

        } 
       

    });

    // $('input[name=nearme]:checkbox').change(function(){
    //     if(this.checked){
    //         //hide building
    //         $('#buildingDiv').fadeOut();
    //         $('#building').fadeOut();
    //     }
    //     else
    //        //show building selection when nearme is unchecked
    //        $('#buildingDiv').show();
    //        $('#building').show();
    //  });

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
           //alert("Test not checked");   
           $('#buildingDiv').show();
           $('#building').show();
           nearMe = false;
        }
    });


/*    $("#dropdown").on("change", function() {
        if (this.value == "classroom"){
            window.location.href='classroom.html';
        }
        else if (this.value == "restroom"){
            window.location.href='restroom.html';
        }
     });*/
 $("#dropdown").on("change", function() {
        if (this.value == "restroom"){
            window.location.href='restroom.html';
        }
        else if (this.value == "classroom"){
            window.location.href='classroom.html';
        }
        else if (this.value == "search"){
            window.location.href='search.html';
        }
     });

});
