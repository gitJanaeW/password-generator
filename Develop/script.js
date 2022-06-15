// VARIABLES
var password = document.getElementById("password");
var upper = document.getElementById("upper");
var lower = document.getElementById("lower");
var special = document.getElementById("special");
var length = document.getElementById("length").value; // Adding value will access not just the id, but rather the numeric value in the id

var numbers = "1234567890";
var lowLetters = "abcdefghijklmnopqrstuvwxyz";
var upLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var specialChars = "!@#$%^&*+-_'~.:;="

var passwordLength = "";

var allPreferences = [
  {type: "isUpper", boolValue: false},
  {type: "isLower", boolValue: false},
  {type: "isNum", boolValue: false},
  {type: "isSpecial", boolValue: false}
];

function generatePassword(){
  function getLength(){
    passwordLength = length;
    console.log("passwordLength", passwordLength)
    // MAKE SURE LENGTH IS A NUMBER
    console.log("MAKE SURE IT'S A NUMBER FUNCTION");    
    // If passwordLength is NOT Not-a-Number (ie. if it IS a number)...
    if(!isNaN(passwordLength)){
      console.log("Is a number");
      passwordLength = Math.round(parseInt(passwordLength)); // Do I need to return passwordLength for its new value to be accessed outside of this function?
      console.log(passwordLength, isNaN(passwordLength), typeof(passwordLength));
      // askLength();
    }else{
      window.alert("Please enter a numeric value.");
      console.log("Not a number");
      return;
    }

    // MAKE SURE THE LENGTH IS NOT TOO LONG/SHORT
    console.log("MAKE SURE IT'S NOT TOO SHORT/LONG FUNCTION");
    if(passwordLength < 5 || passwordLength > 15 || !passwordLength){
    window.alert("Your password length must be between 5-15 characters.");
    return;
    }
    else{
    console.log("Within preference ranges.");
    }
    return passwordLength;
  }


  function getCharPreference(){
    allPreferences[0].boolValue = upper;
    allPreferences[1].boolValue = lower;
    allPreferences[2].boolValue = nums;
    allPreferences[3].boolValue = special;
    console.log("After prompts: ", allPreferences[0].boolValue, allPreferences[1].boolValue, allPreferences[2].boolValue, allPreferences[3].boolValue);

    // CHECK THAT THERE ARE PREFERENCES
    console.log("CHECK THAT THERE ARE PREFERENCES");
    if(!allPreferences[0].boolValue && !allPreferences[1].boolValue && !allPreferences[2].boolValue && !allPreferences[3].boolValue){
      window.alert("You must select at least 1 character type.");
      getCharPreference();
    }
    console.log("There are preferences.");

    // GATHER WANTED PREFERENCES
    // Is this necessary?
    console.log("GATHER WANTED PREFERENCES");
    var wantedPreferences = [];
    var x = 0;

    for(var i = 0; i < allPreferences.length; i++){
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
    var printOptions = getCharPreference();
    
    for(var i = 0; i < passwordLength; i++){
        password.innerHTML += printOptions.charAt(Math.floor(Math.random() * printOptions.length));
    }
    console.log("password: ", password.innerHTML);
  }

  getLength();
  printPassword();
}

// ALGORITHM STARTS WITH GENERATEBTN ONCLICK




// Get references to the #generate element
// var generateBtn = document.querySelector("#generate");

// Write password to the #password input

  
// var passwordText = document.querySelector("#password"); // COME BACK TO QUERY SELECTOR
// passwordText.value = password;



