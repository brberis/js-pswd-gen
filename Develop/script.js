// Assignment code here
var passObj {
  length = 8,
  lowercase = true, 
  uppercase = true, 
  numeric = true, 
  specialChar = 1,
}
// PASSWORD CRITERIA:

// password length
var passwordLength = function() {

  var pwLength = window.prompt("Please enter the number of characters you want for your password. Between 8 and 128 characters."); 
  return pwLength;
}

// character types
var characterTypes = function() {

}

var generatePassword = function(length, ) {
  console.log("start");
  return "AdfdsSDfdsF43@D!"
}

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
