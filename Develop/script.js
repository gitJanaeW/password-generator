// VARIABLES
var password = document.getElementById("password");

function getOptions(){
// NOTE:  There are a lot of if/then statements in the "GENERATE CHARACTERS" section. Is it 
// possible to create a variable for all of those if/then questions
// that will store the user inputted response in a variable and return it...?
};

// FUNCTION TO CONTAIN OTHER USER QUESTION FUNCTIONS
function controlData(){
  var passwordLength = window.prompt("How many characters would you like your password to be?");
  console.log(passwordLength, isNaN(passwordLength), typeof(passwordLength)); // It's defined here
  
  // MAKE SURE IT'S A NUMBER
  function controlType(){
    console.log("MAKE SURE IT'S A NUMBER FUNCTION");
    console.log(passwordLength, isNaN(passwordLength), typeof(passwordLength));  // Not defined here.
    
    // If passwordLength is NOT Not-a-Number (ie. if it IS a number)...
    if(!isNaN(passwordLength)){
      console.log("Is a number");
      passwordLength = Math.round(parseInt(passwordLength)); //Do I need to return passwordLength for its new value to be accessed outside of this function?
      controlLength();
    }else{
      // Why is the recurse being skipped?
      window.alert("Please enter a numeric value.");
      var passwordLength = window.prompt("How many characters would you like your password to be?");
      console.log("Not a number");
      controlType();
    }  
  };
  
  controlType();
  
  // MAKE SURE IT'S NOT TOO LONG
  function controlLength(){
    console.log("MAKE SURE IT'S NOT TOO LONG FUNCTION");

    if(passwordLength < 5){
      window.alert("Password must be longer than 5 characters.");
      controlType();
    }
    else if(passwordLength > 15){
      window.alert("Password must be shorter than 15 characters.");
      controlType();
    }
    else{
      console.log("Go to lettersConfirm()");
    }
  };
  

  // ASK USET TO CONFIRM OTHER PREFERENCES
  var isUpper = window.confirm("Would you like to have lowercase letters in your password?");
  var isLower = window.confirm("Would you like to have lowercase letters?");

}

controlData();




// GENERATE CHARACTERS
// Would you like characters at all?
var isLetters = window.confirm("Would you like letters?");
  //  IF YES, would you like uppercase characters?
  var isLowLetters = window.confirm("Would you like uppercase letters?");
    // IF YES, store true value for later

  // Would you like lowercase characters?
  var isUpLetters = window.confirm("Would you like lowercase letters?");
    // IF YES, store true value for later

// GENERATE NUMBERS
var isNums = window.confirm("Would you like numbers?");
  // IF YES, store true value for later

// GENERATE SPECIAL CHARACTERS
var isSpecial = window.confirm("Would you special characters?");
  // IF YES, store true value for later





// GENERATE PASSWORD FUNCTION
// Switch statement of the potential wants?







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
