 $(document).ready(function(){
    
    var room_expanded = false;
    var building_expanded = false;
    $("#plus_other_places").click(function(){
        if (!room_expanded){
            $("#otherplace").slideToggle();
            room_expanded = true;
            $('#plus_other_places').attr('src', 'icons/minus-button.png');
        }
        else {
            $("#otherplace").slideToggle();
            room_expanded = false;
            $('#plus_other_places').attr('src', 'icons/add-plus-button.png');
            

        }
       
    });
    $("#plus_building").click(function(){
        if (!building_expanded){
            $("#buildingPreference").slideToggle();
            building_expanded = true;
            $('#plus_building').attr('src', 'icons/minus-button.png');

        }
        else {
            $("#buildingPreference").slideToggle();
            building_expanded = false;
            $('#plus_building').attr('src', 'icons/add-plus-button.png');
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
        if (places == 'foodplaces' && locations == 'geisel'){
            window.localStorage.setItem('place', 'audreys');
            window.location.href='map.html';
        }
        else {
            window.location.href='other_searching_list.html';
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
     });

});
