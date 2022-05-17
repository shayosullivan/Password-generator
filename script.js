// Assignment Code
var generateBtn = document.querySelector("#generate");

// Assigning all the arrays
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = [
  "!",
  "%",
  "&",
  ",",
  "*",
  "+",
  "-",
  ".",
  "/",
  "<",
  ">",
  "?",
  "~",
];
var alphaLower = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
var alphaUpper = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

// different variable
var confirmLength = "";
var confirmSpecialCharacter;
var confirmNumericCharacter;
var confirmUpperCase;
var confirmLowerCase;

// prompt for lenght of password
function generatePassword() {
  // decided on what will be in the password
  var confirmSpecialCharacter = confirm(
    "Click OK if you want to include special characters"
  );
  var confirmNumericCharacter = confirm(
    "Click OK if you want to include numeric characters"
  );
  var confirmLowerCase = confirm(
    "Click OK if you want to include lowercase characters"
  );
  var confirmUpperCase = confirm(
    "Click OK if you want to include uppercase characters"
  );

  //loop if doesnt meet requirements
  while (
    confirmUpperCase === false &&
    confirmLowerCase === false &&
    confirmSpecialCharacter === false &&
    confirmNumericCharacter === false
  ) {
    alert("You must choose at least one parameter");
    var confirmSpecialCharacter = confirm(
      "Click OK if you want to include special characters"
    );
    var confirmNumericCharacter = confirm(
      "Click OK if you want to include numeric characters"
    );
    var confirmLowerCase = confirm(
      "Click OK if you want to include lowercase characters"
    );
    var confirmUpperCase = confirm(
      "Click OK if you want to include uppercase characters"
    );
  }
  var randomPassword = "";

  var passwordCharacters = [];

  if (confirmSpecialCharacter) {
    passwordCharacters = passwordCharacters.concat(specialChar);
    randomPassword =
      randomPassword +
      specialChar[Math.floor(Math.random() * specialChar.length)];
  }

  if (confirmNumericCharacter) {
    passwordCharacters = passwordCharacters.concat(number);
    randomPassword =
      randomPassword + number[Math.floor(Math.random() * number.length)];
  }

  if (confirmLowerCase) {
    passwordCharacters = passwordCharacters.concat(alphaLower);
    randomPassword =
      randomPassword +
      alphaLower[Math.floor(Math.random() * alphaLower.length)];
  }

  if (confirmUpperCase) {
    passwordCharacters = passwordCharacters.concat(alphaUpper);
    randomPassword =
      randomPassword +
      alphaUpper[Math.floor(Math.random() * alphaUpper.length)];
  }

  console.log(passwordCharacters);

  confirmLength = prompt(
    "How many characters would you like your password to contain?"
  );
  // loop
  while (confirmLength <= 7 || confirmLength >= 51) {
    alert("Password length must be between 8-50 characters Try again");
    confirmLength = prompt(
      "How many characters would you like your password to contain?"
    );
  }
  console.log(randomPassword);
  for (var i = randomPassword.length; i < confirmLength; i++) {
    randomPassword =
      randomPassword +
      passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
    //console.log(randomPassword);
  }

  // fixed the pre page prompt
  return randomPassword;
}

// had to change return as it wasnt working, changed to the html
var passwordElement = document.getElementById("password");

//Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
