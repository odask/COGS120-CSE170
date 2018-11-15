$(document).ready(function(){
  $("#dropdown").on("change", function() {
       if (this.value == "bathroom"){
           window.location.href='restroom.html';
       }
       else if (this.value == "classroom"){
           window.location.href='classroom.html';
       }
       else if (this.value == "other"){
           window.location.href='other_catergories.html';
       }
  });
});
