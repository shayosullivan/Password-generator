// Assignment Code
var generateBtn = document.querySelector("#generate");

// Assigning all the arrays
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];
var alphaLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var alphaUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// different variable 
var confirmLength = "";
var confirmSpecialCharacter;
var confirmNumericCharacter;
var confirmUpperCase;
var confirmLowerCase;

// prompt for lenght of password
function generatePassword() {
    var confirmLength = (prompt("How many characters would you like your password to contain?"));
  }
  
// loop
while(confirmLength <= 7 || confirmLength >= 51) {
    alert("Password length must be between 8-50 characters Try again");
    var confirmLength = (prompt("How many characters would you like your password to contain?"));
    } 

    // decided on what will be in the password
    var confirmSpecialCharacter = confirm("Click OK if you want to include special characters");
    var confirmNumericCharacter = confirm("Click OK if you want to include numeric characters");    
    var confirmLowerCase = confirm("Click OK if you want to include lowercase characters");
    var confirmUpperCase = confirm("Click OK if you want to include uppercase characters");

     //loop if doesnt meet requirements
     while(confirmUpperCase === false && confirmLowerCase === false && confirmSpecialCharacter === false && confirmNumericCharacter === false) {
        alert("You must choose at least one parameter");
        var confirmSpecialCharacter = confirm("Click OK if you want to include special characters");
        var confirmNumericCharacter = confirm("Click OK if you want to include numeric characters");    
        var confirmLowerCase = confirm("Click OK if you want to include lowercase characters");
        var confirmUpperCase = confirm("Click OK if you want to include uppercase characters");   
    } 
  

//Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
  
  }
  
  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);
  