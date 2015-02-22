var validateField = function(fieldElem, infoMessage, validateFn) {
	// TODO: Implement validateField.
};

$(document).ready(function() {
//Username validation
	var unamePattern = /^[A-Za-z0-9]{0,150}$/;
	// TODO: Use validateField to validate form fields on the page.
	$( "<td id = 'unamecell'></td>" ).appendTo( "#userNameRow" );
	$( "#username").focus(function() {
	$( "#userNameRow" ).find("#uname").remove();
	
	if ($( "#username" ).val() == "" ){
	$( "#userNameRow" ).find("#unameOk").remove();
	$( "#userNameRow" ).find("#unameError").remove();
	$("<span id = 'uname' class='info'>Please choose an username.</span>").appendTo("#unamecell");
}	
});
	$( "#username").change(function(){
	
	if (unamePattern.test($( "#username").val())){
	$( "#userNameRow" ).find("#uname").remove();
	$( "#userNameRow" ).find("#unameOk").remove();
	$( "#userNameRow" ).find("#unameError").remove();
	$( "<span id='unameOk' class='ok'>Username available!</span>" ).appendTo( "#unamecell" );
	
	}
	else{
	$( "#userNameRow" ).find("#uname").remove();
	$( "#userNameRow" ).find("#unameOk").remove();
	$( "#userNameRow" ).find("#unameError").remove();
	$( "<span id = 'unameError' class='error'>Invalid username! Use only characters and numbers</span>" ).appendTo( "#unamecell" );
	}
	if($( "#username").val() == ""){
	$( "#userNameRow" ).find("#unameOk").remove();
	$( "#userNameRow" ).find("#unameError").remove();
	$( "#userNameRow" ).find("#uname").remove();
	$("<span id = 'uname' class='info'>Please choose an username.</span>").appendTo("#unamecell");
	
	}
	
	});
//Password validation
	var pwdPattern = /^(?=.*\d).{8,100}$/;
	$( "<td id = 'pwdcell'></td>" ).appendTo( "#passwordRow" );

	// TODO: Use validateField to validate form fields on the page.
	$( "#password").focus(function() {
	$( "#passwordRow" ).find("#pwd").remove();
	if ($( "#password" ).val() == "" ){
	$( "#passwordRow" ).find("#pwdOk").remove();
	$( "#passwordRow" ).find("#pwdError").remove();
	$( "<span id = 'pwd' class='info'>Password must be between 4 and 8 digits long and include at least one numeric digit.</span>" ).appendTo( "#pwdcell" );}
	
	
});
	$( "#password").change(function(){
	
	if (pwdPattern.test($( "#password").val())){
	$( "#passwordRow" ).find("#pwd").remove();
	$( "#passwordRow" ).find("#pwdOk").remove();
	$( "#passwordRow" ).find("#pwdErr").remove();
	$( "<span id= 'pwdOk' class='ok'>Correct password.</span>" ).appendTo( "#pwdcell" );
	}
	else{
	$( "#passwordRow" ).find("#pwd").remove();
	$( "#passwordRow" ).find("#pwdOk").remove();
	$( "#passwordRow" ).find("#pwdErr").remove();
	$( "<span id = 'pwdErr' class='error'>Password must be between 4 and 8 digits long and include at least one number.</span>" ).appendTo( "#pwdcell" );
	}
	if($( "#password" ).val() == "" ){
	$( "#passwordRow" ).find("#pwd").remove();
	$( "#passwordRow" ).find("#pwdOk").remove();
	$( "#passwordRow" ).find("#pwdErr").remove();
	$( "<span id = 'pwd' class='info'>Password must be between 4 and 8 digits long and include at least one number.</span>" ).appendTo( "#pwdcell" );}
	
	});

//Email validation
var emailPattern = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
$( "<td id = 'emailcell'></td>" ).appendTo( "#emailRow" );
	// TODO: Use validateField to validate form fields on the page.
	$( "#email").focus(function() {
	$( "#emailRow" ).find("#mail").remove();
	
	if ($( "#email" ).val() == "" ){
	$( "#emailRow" ).find("#mailOk").remove();
	$( "#emailRow" ).find("#mailErr").remove();
	$( "<span id = 'mail' class='info'>Enter your email.</span>" ).appendTo( "#emailcell" );}
	
	
});
	$( "#email").change(function(){
	if (emailPattern.test($( "#email").val())){
	$( "#emailRow" ).find("#mail").remove();
	$( "#emailRow" ).find("#mailOk").remove();
	$( "#emailRow" ).find("#mailErr").remove();
	$( "<span id= 'mailOk' class='ok'>Valid email.</span>" ).appendTo( "#emailcell" );
	}
	else{
	$( "#emailRow" ).find("#mail").remove();
	$( "#emailRow" ).find("#mailOk").remove();
	$( "#emailRow" ).find("#mailErr").remove();
	$( "<span id = 'mailErr' class='error'>Invalid email.</span>" ).appendTo( "#emailcell" );
	}
	if($( "#email" ).val() == "" ){
	$( "#emailRow" ).find("#mail").remove();
	$( "#emailRow" ).find("#mailOk").remove();
	$( "#emailRow" ).find("#mailError").remove();
	$( "<span id = 'mail' class='info'>Enter your email.</span>" ).appendTo( "#emailcell" );
	}
	});
});


