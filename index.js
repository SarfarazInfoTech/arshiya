// FOR CHECKING PHONE NUMBER
function validate() {
  var phoneNumber = document.getElementById("phone-number").value;
  var phoneRGEX = /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/;
  var phoneResult = phoneRGEX.test(phoneNumber);
  if (phoneResult == false) {
    alert("Please enter a valid phone number!");
    return false;
  }
  else{
    alert("Correct Phone no. : " + phoneNumber);
  }
}

// FOR CHECKING EMAIL ADDRESS
function ValidateEmail(inputText) {
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (inputText.value.match(mailformat)) {
    alert("Valid email address!");
    document.form1.text1.focus();
    return true;
  } else {
    alert("Please enter a valid email address!");
    document.form1.text1.focus();
    return false;
  }
}