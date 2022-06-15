// VARIABLES
// id getters
var password = document.getElementById("password");
var lengthInput = document.getElementById("length-input");
var upper = document.getElementById("upper");
var lower = document.getElementById("lower");
var nums = document.getElementById("nums");
var special = document.getElementById("special");
var passwordLengthRangeError = document.getElementById("password-length-range-error");
var passwordLengthNaN = document.getElementById("password-length-NaN");
var preferenceError = document.getElementById("preference-error");

// Password preference vars
var numbers = "1234567890";
var lowLetters = "abcdefghijklmnopqrstuvwxyz";
var upLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var specialChars = "!@#$%^&*+-_'~.:;=";

// Misc
var passwordLength = "";
var printOptions = "";
var allPreferences = [
  upper, lower, nums, special
];

function generatePassword(){
  function getLength(){
    // RESET ERROR MESSAGES
    passwordLengthRangeError.textContent = "";
    passwordLengthNaN.textContent = "";
    preferenceError.textContent = "";

    passwordLength = lengthInput.value;

    // MAKE SURE LENGTH IS A NUMBER  
    // If passwordLength is NOT Not-a-Number (ie. if it IS a number)...
    if(!isNaN(passwordLength)){
      passwordLength = Math.round(parseInt(passwordLength));
    }else{
      passwordLengthNaN.textContent = "Please enter a numeric value.";
      return;
    }

    // MAKE SURE THE LENGTH IS NOT TOO LONG/SHORT
    if(passwordLength < 8 || passwordLength > 128 || !passwordLength){
      passwordLengthRangeError.textContent = "Your password length must be between 8-128 characters.";
      return;
    }
    else{
      return passwordLength;
    }

  }


  function getCharPreference(){
    // STORE BOOL VALUE OF RADIO BUTTONS
    for(var i = 0; i < allPreferences.length; i++){
      allPreferences[i] = allPreferences[i].checked;
    } 

    // allPreferences[0] = upper.checked;
    // allPreferences[1] = lower.checked;
    // allPreferences[2] = nums.checked;
    // allPreferences[3] = special.checked;
    
    console.log(upper.checked, lower.checked, nums.checked, special.checked);

    // CHECK THAT THERE ARE PREFERENCES
    if(!allPreferences[0] && !allPreferences[1] && !allPreferences[2] && !allPreferences[3]){
      preferenceError.textContent = "You must select at least 1 character type.";
      return;
    }

    // GATHER WANTED PREFERENCES
    var finalVar = "";
    if(allPreferences[0]){
      finalVar += upLetters;
    }
    if(allPreferences[1]){
      finalVar += lowLetters;
    }
    if(allPreferences[2]){
      finalVar += numbers;
    }
    if(allPreferences[3]){
      finalVar += specialChars;
    }
    return finalVar;
  }

  function printPassword(){
    // RANDOMIZE WANTED PREFERENCES
    printOptions = getCharPreference();
    
    for(var i = 0; i < passwordLength; i++){
        password.innerHTML += printOptions.charAt(Math.floor(Math.random() * printOptions.length));
    }
  }

  getLength();
  printPassword();
}