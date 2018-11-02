 $(document).ready(function(){
    
    var pref_expanded = false;
    var building_expanded = false;
    $("#plus_preferences").click(function(){
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
    $("#plus_building").click(function(){
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

});