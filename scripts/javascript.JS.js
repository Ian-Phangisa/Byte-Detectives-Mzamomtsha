
var name_Error=document.getElementById("fullnameError");
var phone_Error=document.getElementById("cellphoneError");
var email_Error=document.getElementById("emailError");
var id_Error=document.getElementById("idError");
var address_Error=document.getElementById("address_Error");
var next_Error=document.getElementById("next_Error");


// Full Names Validation
function validateFullname(){
    var fullName=document.getElementById("fname").value;

    if(fullName.length == 0){
        
        return false;
    }
   else if(!fullName.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        name_Error.innerHTML= 'Write Full Name';
        return false;

    }
   
   name_Error.innerHTML='<i class="fas fa-check-circle"></i>';
    return true;
}
// Phone number validation

function validatePhone(){
    var cellphone=document.getElementById("cellphone").value;
    if(cellphone.length == 0){
        phone_Error.innerHTML='Cellphone number is required';
        return false;
    }
  
    
  
  
     else if(cellphone.length != 10){
        phone_Error.innerHTML='Cellphone number must be 10 digits';
        
        return false;
    }
    else if(!cellphone.match(/^[0-9]{10}$/)){
        phone_Error.innerHTML='only digits please';
        return false;
    }

    else if(!cellphone.match(/^[0][0-9]{9}$/)){
        phone_Error.innerHTML='Cellphone number must start with 0 ';
        return false;
    }

    

  
    else{
    phone_Error.innerHTML='<i class="fas fa-check-circle"></i>';
    return true;
    }
}


// Phone number Email
function validateEmail(){
    var email= document.getElementById("email").value;
    if(email.length == 0){
        email_Error.innerHTML= 'Email  is required';
        return false

}
 else if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
    email_Error.innerHTML='Invalid Email';
    return false;
}
else{
email_Error.innerHTML='<i class="fas fa-check-circle"></i>';
return true;
}
}

// Phone number Id
function validateId(){
    var id_number=document.getElementById("idNumber").value;
    if(id_number.length === 0){
        id_Error.innerHTML='id number is required';
        return false;
    }

  
  else if(id_number.length !=13){
        id_Error.innerHTML='Id number must be 13 digits';
        return false;
    }
   else if(!id_number.match(/^[0-9]{13}$/)){
        id_Error.innerHTML='only digits please';
        return false;
    }
    else{
    id_Error.innerHTML='<i class="fas fa-check-circle"></i>';
    return true;
    }
}
function ValidateAddress(){
    var address=document.getElementById("P_address").value;
    if(address.length > 0){
    id_Error.innerHTML='<i class="fas fa-check-circle"></i>';
    return true;
    }
}
    


function validateNext(){
 if(!validateFullname() || !validatePhone() || !validateEmail() || !validateId() || !ValidateAddress()){
        alert("please fill in the required filled");
        return false;
}
else{
    fileError.innerHTML='<i class="fas fa-check-circle"></i>';
        return true;

 
}
}


 var fileError=document.getElementById("fileError");
 var fileError=document.getElementById("fileError1");
 


  function validateFile(){
    var input=document.getElementById("birthFile");
    
    const file=input.files[0];
    if(!file){
        fileError.innerHTML="No file selected";
        return false;
    }
    const limit=2000;
    const size=file.size/1024;
    if(size>limit){
        fileError.innerHTML=`File to big: ${(size/1000).toFixed(2)} MB`;
        return false;

    }else{
        fileError.innerHTML='<i class="fas fa-check-circle"></i>';
        return true;
    }
   


  }
   var  username_Error=document.getElementById("username_Error");
  function UsernameId(){
    var username=document.getElementById("username").value;
    if(username.length == 0){
        username_Error.innerHTML='id number is required';
        return false;
    }

  
  else if(username.length !=13){
    username_Error.innerHTML='Id number must be 13 digits';
        return false;
    }
   else if(!username.match(/^[0-9]{13}$/)){
    username.innerHTML='only digits please';
        return false;
    }
    else{
        username_Error.innerHTML='<i class="fas fa-check-circle"></i>';
    return true;
    }
}
    
    var CpasswordError=document.getElementById("CpasswordError");
    
  function checkPassword(){
    var password=document.getElementById("password").value;
    var Confrimpassword=document.getElementById("Confirmpassword").value;
    if(password.length !=0){
      
        if(password==Confrimpassword){
            
            CpasswordError.innerHTML='<i class="fas fa-check-circle"></i>';
          
            return true;
        }
        else{
            CpasswordError.innerHTML="Password dont match";
            return false;
        }

        }
    }
   
  
    function validateSubmit(){
        if(!UsernameId()|| !checkPassword()){
            alert("please fill the required filled");
          return false;
        }
        else{
            alert("Your application has been submitted");
            return  true;
        }
    }

        
    





 function change(){
    document.getElementById("changenav").style.backgroundColor=" red";
 }
 function bigImg(x) {

    x.style.backgroundColor ="#aaa205";
    document.getElementById("txt").style.color=" white";
    var abb=document.getElementById("ss");
    abb.style.color="#083b66";
    }

function normalImg(x) {

x.style.backgroundColor = "#083b66";
document.getElementById("txt").style.color="#aaa205";
var abb=document.getElementById("ss");
    abb.style.color="#aaa205";


}
var navlinks=document.getElementById("navlinks");
function showMenu(){
    navlinks.style.right="0";
}

function hideMenu(){
   navlinks.style.right="-200px";
}



