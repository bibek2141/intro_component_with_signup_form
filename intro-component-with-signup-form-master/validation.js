
function formValidation(theForm){
  var firstName = document.getElementById('fname').value;
  var lastName = document.getElementById('lname').value;
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;
  var message=[]

  if(firstName.length===0 ){
    message.push("First name is missing.\n");
  }
  if(lastName.length===0){
    message.push("Last name is missing.\n");
  }
  if(email.length===0){
    message.push("Email is missing.\n");
  }
  if(password.length ===0){
    message.push("Password is missing.\n");
  }
  else if (password.length <=6 && password.length > 0) {
    message.push("Password should be greater than 6 letters.")
  }

  alert(message.join(""));


}
