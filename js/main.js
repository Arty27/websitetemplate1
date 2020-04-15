$(document).ready(function () {

    $(window).scroll(function(){
        var top=$(window).scrollTop();
        if(top>70){
              $('header').addClass('transperent-bg');
          }
          else{
              if($('header').hasClass('transperent-bg')){
                  $('header').removeClass('transperent-bg');
              }
          }
    });

    $('.slider').ripples({
        resolution: 256, 
        dropRadius: 30,
        perturbance: 0.04,
        interactive: true,
        crossOrigin: ''  
    });

    $("input").focus(function(){
        $(this).css("background-color","trasnperent");
        $(this).css("font-weight","bold");
    });

    $("input").blur(function(){
          $(this).css("background-color","trasnperent");
          $(this).css("font-weight","bold");
    });
      
     
});




var submitted=false;
var typed = new Typed('.text', {
    strings: ['Welcome to <strong style="color:#d34500">SwanFlows</strong>.', 'What do want from Us?',],
    typeSpeed: 50,
    loop: true
  });


    
function validateName() {
	var name = document.getElementById('name').value;
	if(name.length == 0) {
		alert("Name can't be blank") ;
			return false;
	}
	if (!name.match(/^[a-zA-Z]{3,}(?: [a-zA-Z]+){0,2}$/)) {
		alert("Please enter your correct name") ;//Validation Message
			return false;
		}
	return true;
}
	
function validateEmail () {
    var email = document.getElementById('email').value;
	if(email.length == 0) {
    alert("Email can't be blank") ;//Validation Message
	    return false;
    }
    if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
		alert("Please enter a correct email address") ;//Validation Message
		return false;
    }
    return true;
}
	
	
function validateForm() {
	if(!validateName() || !validateEmail()) {
		alert("Form not submitted");//Validation Message
			return false;
		}
		else {
        submitted=true;
        //alert("Message Sent!")
        console.log("Success")
		return true;
        }
}
		