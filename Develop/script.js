// VARIABLES (gather/organize later)
var password = document.getElementById("password");

// FUNCTION TO CONTAIN ALL OTHER FUNCTIONS
function generatePassword(){
  
  var passwordLength = "";

  function askLength(){
    passwordLength = window.prompt("How many characters would you like your password to be?");
    console.log(passwordLength, isNaN(passwordLength), typeof(passwordLength));
    controlType();
  }

  askLength();

  // MAKE SURE passwordLength IS A NUMBER
  function controlType(){
    console.log("MAKE SURE IT'S A NUMBER FUNCTION");    
    // If passwordLength is NOT Not-a-Number (ie. if it IS a number)...
    if(!isNaN(passwordLength)){
      console.log("Is a number");
      passwordLength = Math.round(parseInt(passwordLength)); //Do I need to return passwordLength for its new value to be accessed outside of this function?
      console.log(passwordLength, isNaN(passwordLength), typeof(passwordLength));
      controlLength();
    }else{
      // Why is the recurse being skipped?
      window.alert("Please enter a numeric value.");
      passwordLength = window.prompt("How many characters would you like your password to be?");
      console.log("Not a number");
      controlType();
    }  
  };
  
  // MAKE SURE passwordLength IS NOT TOO SHORT/LONG
  function controlLength(){
    console.log("MAKE SURE IT'S NOT TOO SHORT/LONG FUNCTION");
    if(passwordLength < 5 || passwordLength > 15 || !passwordLength){
      window.alert("Your password length must be between 5-15 characters.");
      askLength();
    }
    else{
      console.log("Within preference ranges.");
    }
  };

  
  // OFFICE HOURS : This section should be a function but the console yells at me when I make it a function. Why?
  console.log("STORE USER PREFERENCES");
  var allPreferences = [
    {type: "isUpper", boolValue: false},
    {type: "isLower", boolValue: false},
    {type: "isNum", boolValue: false},
    {type: "isSpecial", boolValue: false}
  ];

  allPreferences[0].boolValue = window.confirm("Would you like to have uppercase letters in your password?");
  allPreferences[1].boolValue = window.confirm("Would you like to have lowercase letters?");
  allPreferences[2].boolValue = window.confirm("Would you like to have numbers?");
  allPreferences[3].boolValue = window.confirm("Would you like to have special characters?");

  console.log("After prompts: ", allPreferences[0].boolValue, allPreferences[1].boolValue, allPreferences[2].boolValue, allPreferences[3].boolValue);

  // MAKE SURE THERE *ARE* PREFERENCES
  function checkIsPreference(){
    console.log("CHECK THAT THERE ARE PREFERENCES");
    if(!allPreferences[0].boolValue && !allPreferences[1].boolValue && !allPreferences[2].boolValue && !allPreferences[3].boolValue){
      window.alert("You must select at least 1 character type.");
      askPreference();
    }else{
      console.log("There are preferences.");
      getPreferences();
    }
  }

  checkIsPreference();

  var wantedPreferences = [];

  // GATHER WANTED PREFERENCES
  function getPreferences(){
    console.log("GATHER WANTED PREFERENCES");
    // OFFICE HOURS: When this var is global, .push on line __ throws an error. When it's local, it's undefined. Didn't have this issue until stringPreferences() was made
    var x = 0;

    for(var i = 0; i < allPreferences.length; i++){
      if(allPreferences[i].boolValue){
        console.log(i);
        console.log("wantedPreference: " + allPreferences[i].type + " " + allPreferences[i].boolValue.toString());
        wantedPreferences.push({type:allPreferences[i].type, boolValue:allPreferences[i].boolValue});
        x++;
      }
    }
    stringPreferences();
  }

  
  // STRING TOGETHER PREFERENCES
  function stringPreferences(){
    console.log("CREATE A STRING OF PREFERENCES");
    var finalPreferences = "";

    for(var i = 0; i < wantedPreferences.length; i++){
      finalPreferences = finalPreferences + toString(wantedPreferences[x].type);
      console.log(finalPreferences);
    }
  }
}

// START ALGORITHM:
generatePassword();











// Where the final password will be stored
password.innerHTML = ("");

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword(); // Might need to change this to make it more specific
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
