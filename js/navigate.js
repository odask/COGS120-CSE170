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
    else {
        $('#myMap').attr('src', "https://maps.mapwize.io/#/v/ucsd/0?k=5917a04807958398&z=18");
    }

});