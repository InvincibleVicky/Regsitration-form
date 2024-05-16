function MatchPassword(){
  
  let pass =  document.form1.password.value;
  let pass2 = document.form1.password2.value;

  if(pass == pass2){
    return true;
  }
  else{
    alert("Password Should be Same");
    return false;
  }
}

function EmailValidate(){
  let email = document.form1.email.value;
  let atPosition = email.indexOf("@");
  let dotPosition = email.lastIndexOf(".");

  if(atPosition<1 || dotPosition < atPosition+2){
    alert("Invalid Email Format");
    return false;
  }else{
    return true;
  }
}

function numFormat(){
  let num = document.form1.num.value;

  if(isNaN(num)){
    alert("Enter Number only");
    return false;
  }
  else{
    return true;
  }
}