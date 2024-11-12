var username = document.forms['form']['username'];
var email = document.forms['form']['email'];
var password  = document.forms['form']['password'];
var confirmpassword  = document.forms['form']['confirmpassword'];

var username_error = document.getElementById('username_error');
var email_error = document.getElementById('email_error');
var Pass_error = document.getElementById('Pass_error');
var confirmpassword_error = document.getElementById('confirmpassword_error');

username.addEventListener('textInput',username_verify);
email.addEventListener('textInput',email_verify);
password.addEventListener('textInput',pass_verify);
confirmpassword.addEventListener('textInput',confirmpassword_verify);

function validated()
{
    if(username.value.length < 9)
    
        {
            username.style.border = "1px solid red";
            username_error.style.display = "block";
            username.focus();
          return false;
        }
    if(email.value.length < 9)
    
    {
        email.style.border = "1px solid red";
            email_error.style.display = "block";
            email.focus();
      return false;
    }
   if(password.value.length < 9)
   {
    password.style.border ="1px solid red";
    pass_error.style.display= "block";
    password.focus();
    return false;
   }
   if(confirmpassword.value.length < 9)
    {
        confirmpassword.style.border ="1px solid red";
        confirmpassword_error.style.display= "block";
     confirmpassword.focus();
     return false;
    }

} 
function username_verify()
{
    if(username.value.length >=8)
    
        {
            username.style.border = "1px solid silver";
            username_error.style.display = "none";
          return true;
}
}
 function email_verify()
{
    if(email.value.length >=8)
    
        {
            email.style.border = "1px solid silver";
                email_error.style.display = "none";
          return true;
}
}
function pass_verify()
{
    if(password.value.length >= 5)
        {
         password.style.border ="1px solid silver";
         pass_error.style.display= "none";
         return true;
        }
}
function confirmpassword_verify()
{
    if(confirmpassword.value.length >= 5)
        {
            confirmpassword.style.border ="1px solid silver";
            confirmpassword_error.style.display= "none";
         return true;
        }
}
