$(document).ready(function(){
    
    var place = window.localStorage.getItem('place');
    console.log(place);

    if (place == 'bathroom1'){
        console.log('Bathroom1 selected');

        $('#myMap').attr('src', "https://maps.mapwize.io/#/f/p/ucsd/entrance/t/p/ucsd/bathroom_1?k=5917a04807958398&z=21.176");
    }
    else if (place == 'bathroom2'){
        console.log('Bathroom2 selected');
        
        $('#myMap').attr('src', "https://maps.mapwize.io/#/f/p/ucsd/entrance/t/p/ucsd/bathroom_east_2?k=5917a04807958398&z=21.165");
    }
    else if (place == 'bathroom8'){
        console.log('Bathroom8 selected');
        $('#myMap').attr('src', "https://maps.mapwize.io/#/f/p/ucsd/entrance/t/p/ucsd/gn_bathroom?k=5917a04807958398");
    }
    else if (place == 'Classroom'){
        console.log('Classroom selected');
        $('#myMap').attr('src', "https://maps.mapwize.io/#/f/p/ucsd/entrance/t/p/ucsd/classroom_1?k=5917a04807958398&z=21.025");
    }
    else if (place == 'audreys'){
        $('#myMap').attr('src', "https://maps.mapwize.io/#/f/p/ucsd/entrance/t/p/ucsd/audrey_s?k=5917a04807958398&z=20.34");
    }
    else if (place == 'geisel_study'){
        $('#myMap').attr('src', "https://maps.mapwize.io/#/f/p/ucsd/entrance/t/p/ucsd/group_study_room?k=5917a04807958398");
    }else if (place == 'nursing'){
        $('#myMap').attr('src', "https://maps.mapwize.io/#/f/p/ucsd/entrance/t/p/ucsd/bathroom_east_2_2?k=5917a04807958398&z=20.711");
    }
    else if (place == 'csb'){
        $('#myMap').attr('src', "https://maps.mapwize.io/#/f/p/cognitive_science_building/csb_180/t/p/cognitive_science_building/bathroom_m?k=32c095f4e615a71b&z=19.895");
    }
    
    else {
        $('#myMap').attr('src', "https://maps.mapwize.io/#/v/ucsd/0?k=5917a04807958398&z=18");
    }

});