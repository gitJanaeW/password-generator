// VARIABLES
var password = document.getElementById("password");

// Make a password object is true false isChars, etc. Do a for loop to access
// each object child's true/false value and then (maybe?) a switch statement to
// print the resulting password with user preferences

// FUNCTION TO CONTAIN OTHER USER QUESTION FUNCTIONS
function controlData(){
  
  var passwordLength = "";

  function askLength(){
    passwordLength = window.prompt("How many characters would you like your password to be?");
    console.log(passwordLength, isNaN(passwordLength), typeof(passwordLength));
    controlType();
  }

  askLength();

  // MAKE SURE IT'S A NUMBER & NOT TOO LONG/SHORT
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
  
  // MAKE SURE IT'S NOT TOO LONG
  function controlLength(){
    console.log("MAKE SURE IT'S NOT TOO SHORT/LONG FUNCTION");
    if(passwordLength < 5){
      window.alert("Password must be longer than 5 characters.");
      askLength();
    }
    else if(passwordLength > 15){
      window.alert("Password must be shorter than 15 characters.");
      askLength();
    }
    else{
      console.log("Go to lettersConfirm()");
      // break; Why won't this break work?
    }
  };
  

  // ASK USER TO CONFIRM OTHER PREFERENCES
  console.log("STORE USER PREFERENCES");
  var isUpper = window.confirm("Would you like to have lowercase letters in your password?");
  var isLower = window.confirm("Would you like to have uppercase letters?");
  var isNums = window.confirm("Would you like to have numbers?");
  var isSpecial = window.confirm("Would you like to have special characters?");

  // CHECK WHICH PREFERENCES ARE WANTED
  // This should check allPreferences for true values only and store those true
  // values in a separate array
  function getPreferredChars(){
    console.log("CHECK WHICH PREFERENCES ARE WANTED");

    var allPreferences = [isUpper, isLower, isNums, isSpecial];
    var wantedPreferences = [];

    // OFFICE HOURS: How do I know if this is looping correctly or not? Having trouble reading the log
    for(i = 0; i <= allPreferences.length; i++){
      if(allPreferences[i]){
        var x = 0;
        wantedPreferences[x] = wantedPreferences.push(allPreferences[i]);
        x++;
        // console.log(allPreferences[i], wantedPreferences[x]);
        console.log(wantedPreferences[x]);
      }
    }

    return wantedPreferences;
    
  };

  getPreferredChars();

}

controlData();

// GENERATE CHARACTERS







// Where the final password will be stored
password.innerHTML = ("");

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
