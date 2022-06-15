// VARIABLES
var password = document.getElementById("password");
var lengthInput = document.getElementById("length-input");
var upper = document.getElementById("upper");
var lower = document.getElementById("lower");
var nums = document.getElementById("nums");
var special = document.getElementById("special");
var passwordLengthRangeError = document.getElementById("password-length-range-error");
var passwordLengthNaN = document.getElementById("password-length-NaN");
var preferenceError = document.getElementById("preference-error");

var numbers = "1234567890";
var lowLetters = "abcdefghijklmnopqrstuvwxyz";
var upLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var specialChars = "!@#$%^&*+-_'~.:;="

var passwordLength = "";
var printOptions = "";

var allPreferences = [
  {type: "isUpper", boolValue: false},
  {type: "isLower", boolValue: false},
  {type: "isNum", boolValue: false},
  {type: "isSpecial", boolValue: false}
];

function generatePassword(){
  function getLength(){
    // reset error messages
    passwordLengthRangeError.textContent = "";
    passwordLengthNaN.textContent = "";
    preferenceError.textContent = "";

    passwordLength = lengthInput.value;

    // MAKE SURE LENGTH IS A NUMBER
    console.log("MAKE SURE IT'S A NUMBER FUNCTION");    
    // If passwordLength is NOT Not-a-Number (ie. if it IS a number)...
    if(!isNaN(passwordLength)){
      console.log("Is a number");
      passwordLength = Math.round(parseInt(passwordLength));
      console.log(passwordLength);
    }else{
      passwordLengthNaN.textContent = "Please enter a numeric value.";
      console.log("Not a number");
      return;
    }

    // MAKE SURE THE LENGTH IS NOT TOO LONG/SHORT
    console.log("MAKE SURE IT'S NOT TOO SHORT/LONG FUNCTION");
    if(passwordLength < 8 || passwordLength > 128 || !passwordLength){
      passwordLengthRangeError.textContent = "Your password length must be between 5-15 characters.";
      return;
    }
    else{
      console.log("Within preference ranges.");
    }
    return passwordLength;
  }


  function getCharPreference(){
    allPreferences[0].boolValue = upper.checked;
    allPreferences[1].boolValue = lower.checked;
    allPreferences[2].boolValue = nums.checked;
    allPreferences[3].boolValue = special.checked;
    console.log("After prompts: ", allPreferences[0].boolValue, allPreferences[1].boolValue, allPreferences[2].boolValue, allPreferences[3].boolValue);

    // CHECK THAT THERE ARE PREFERENCES
    console.log("CHECK THAT THERE ARE PREFERENCES");
    if(!allPreferences[0].boolValue && !allPreferences[1].boolValue && !allPreferences[2].boolValue && !allPreferences[3].boolValue){
      preferenceError.textContent = "You must select at least 1 character type.";
      return;
    }
    console.log("There are preferences.");

    // GATHER WANTED PREFERENCES
    // Is this necessary?
    console.log("GATHER WANTED PREFERENCES");
    var wantedPreferences = [];


    for(var i = 0; i < allPreferences.length; i++){
      var x = 0;
      if(allPreferences[i].boolValue){
        console.log("wantedPreference: ", allPreferences[i].type, allPreferences[i].boolValue.toString());
        wantedPreferences.push({type:allPreferences[i].type, boolValue:allPreferences[i].boolValue});
        x++;
      }
    }

    // STRING TOGETHER PREFERENCES
    console.log("CREATE A STRING OF PREFERENCES");
    var finalPreferences = "";

    for(var i = 0; i < wantedPreferences.length; i++){
      finalPreferences += wantedPreferences[i].type.toString();
    }   
    console.log(finalPreferences);

    // MAKE A VAR OF PREFERRED CHARACTERS
    console.log("MAKE A VAR OF PREFERRED CHARACTERS");
    var finalVar = "";

    if(finalPreferences.includes("isUpper")){
      finalVar += upLetters;
      console.log(finalVar);
    }
    if(finalPreferences.includes("isLower")){
      finalVar += lowLetters;
      console.log(finalVar);
    }
    if(finalPreferences.includes("isNum")){
      finalVar += numbers;
      console.log(finalVar);
    }
    if(finalPreferences.includes("isSpecial")){
      finalVar += specialChars;
      console.log(finalVar);
    }

    console.log("finalVar", finalVar);
    return finalVar;
  }

  function printPassword(){
    console.log("RANDOMIZE WANTED PREFERENCES INTO PASSWORD");
    printOptions = getCharPreference();
    
    for(var i = 0; i < passwordLength; i++){
        password.innerHTML += printOptions.charAt(Math.floor(Math.random() * printOptions.length));
    }
    console.log("password: ", password.innerHTML);


  }

  getLength();
  printPassword();

}


// START ALGORITHM
// generatePassword();




// // Get references to the #generate element
// var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword(); // Might need to change this to make it more specific
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
