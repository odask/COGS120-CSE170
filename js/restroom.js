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

    $("#dropdown").on("change", function() {
        if (this.value == "classroom"){
            window.location.href='classroom.html';
        }
        else if (this.value == "other"){
            window.location.href='other_catergories.html';
        }
     });

    //what does clicking search do?
    //gets the preference and building
    //saves it into local storage
    //then goes to searching_category_template page
    $("#searchBtn").click(function() {
        //Get the preference
        var pref = $('input[name="option"]:checked');
       
        var checkboxValues = [];
        $('input[name=option]:checked').map(function() {
            checkboxValues.push($(this).val());
        });
        console.log(checkboxValues);
        //Get the building
        var location = $('input[name="location"]:checked');
        //save them in local storage
        localStorage.setItem('preference', pref[0].value);
        localStorage.setItem('preference2', JSON.stringify(checkboxValues));
        localStorage.setItem('building', location[0].value);
        //go to searching_category_template
        window.location.href='searching_category_template.html';
        });

});