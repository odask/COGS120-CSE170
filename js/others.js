$(document).ready(function(){
    
    
    var place_selected = false;
    
    $("#study_rooms").click(function(){
        if (place_selected == false){
            $(".subMenu").slideToggle();
            place_selected = true;
        }
        else {
            $(".subMenu").slideToggle();
            place_selected = false;
            $(".room_preferences1, .room_preferences2, #search1").css("display", "none");
          
        }
        
    });

    $("#food").click(function(){
        if (place_selected == false){
            $(".foodSubMenu").slideToggle();
            place_selected = true;
        }
        else {
            $(".foodSubMenu").slideToggle();
            place_selected = false;
            $(".food_pc, #search1").css("display", "none");
          
        }
        
    });

    $('#geisel_food').click(function() {
        $('.food_pc').hide();
        $('#searchBtn').show();
    });


    $("input[name=building]:radio").click(function () {
        if ($('input[name=building]:checked').val() == "geisel") {
            $('.room_preferences2').hide();
            $('.room_preferences1').show();

        } else if ($('input[name=building]:checked').val() == "pc") {
            $('.room_preferences2').show();
            $('.room_preferences1').hide();

        } else if ($('input[name=building]:checked').val() == "pc_food") {
            $('.food_pc').show();
        } 


    });

    $("input[name=room]:radio").click(function() {
        if($('input[name=room]:checked').val() == "205" || $('input[name=room]:checked').val() == "206" ||
        $('input[name=room]:checked').val() == "bk"){
          $('#searchBtn').show();
        }
    });

    $("#dropdown").on("change", function() {
        if (this.value == "classroom"){
            window.location.href='classroom.html';
        }
        else if (this.value == "bathroom"){
            window.location.href='restroom.html';
        }
     });

     $("#searchBtn").click(function() {
        window.localStorage.setItem('place', 'audreys');
        window.location.href='map.html';
        });

});