$(document).ready(function(){
    //On click of login, get the username and password
    //FOR NOW, ANY EMAIL AND PASSWORD WILL BE ACCEPTED AND LOG
    //THE USER IN
    $("#submitBtn").click(function(){
       console.log("Login button clicked");

       var email = document.getElementById("email").value;
       var password = document.getElementById("password").value;
       window.localStorage.setItem('guest', false);
       window.location.href='index.html';

    
    //    if (email == 'admin@ucsd.edu' && password == "password"){
    //        console.log("Let him in");
    //        window.localStorage.setItem('user', email);
    //        window.localStorage.setItem('password', password);
    //        window.localStorage.setItem('guest', false);
    //        window.location.href='index.html';
    //    }
    //    else{
    //        //Toast Message here
    //        //Plus username and password borders to red

    //    }


    });

    $("#guestBtn").click(function(){
        console.log("Login as guest button clicked");
     
        window.localStorage.setItem('user', "");
        window.localStorage.setItem('password', "");
        window.localStorage.setItem('guest', true);

        window.location.href='index.html';

 
     });




});