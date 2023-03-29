const myForm = document.getElementById('myForm');
const EAddr = document.getElementById('input-address');
const Amount = document.getElementById('input-amount');
const OTP = document.getElementById('input-otp');
const sendBTN = document.getElementById('sendBTN');

//A form of way to prevent certain methods of submitting without valid entries
//All field valid > able to click
sendBTN.disabled = true;

function validateForm() {
  //check if any field empty
    if (EAddr.value == "") {
      //alert("ETH Address must be filled out");
      return false;
    }
    if (Amount.value == "") {
        //alert("Amount must be filled out");
        return false;
      }
      if (OTP.value == "") {
        //alert("OTP must be filled out");
        return false;
      }
      sendBTN.disabled = false;
      return true;
  }



EAddr.addEventListener('keyup', function (event) {
    isValidAddress = EAddr.value;
    //Regex for ETH address
    var rege = /^0x[a-fA-F0-9]{40}$/;
    
      if (isValidAddress.match(rege)) {
        validateForm();
      } else {
        sendBTN.disabled = true;
      }
  });
  Amount.addEventListener('keyup', function (event) {
    validAmount = Amount.value;
    //regex for positive num
    var rege = /^\d+$/;
    
      if (validAmount.match(rege)) {
        validateForm();
      } else {
        sendBTN.disabled = true;
      }
  });
    
  OTP.addEventListener('keyup', function (event) {
    validOTP = OTP.value;
    //regex for positive num
    var rege = /^\d+$/;
    
    if (validOTP.match(rege)) {
      validateForm();
    } else {
      sendBTN.disabled = true;
    }
  });
  sendBTN.addEventListener('click', function (event) {
    if (validateForm()) {
        myForm.submit();
        alert("Form is successfully submitted");
      }
  });