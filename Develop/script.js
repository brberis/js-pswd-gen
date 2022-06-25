// Assignment code here

// GLOBAL SCOPE

// character sets
var charBase = {
  lowercase: "abcdefghiklmnopqrstuvwxyz",  
  uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXTZ",  
  numeric: "1234567890",
  special: "#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
}


// password configuration object
var passConf = {
  length: null,
  lowercase: false, 
  uppercase: false, 
  numeric: false, 
  specialChar: 0, // 0 = no, 1 = yes, 2 = random selection
  reset: function() {
    this.length = null;
    this.lowercase = false;
    this.uppercase = false;
    this.numeric = false;
    this.specialChar = 0; 
  }
}

// PASSWORD CRITERIA:

// password length
var passwordLength = function() {
  while (!pwLength) {
    var pwLength = window.prompt("Please enter the number of characters you want for your password. Between 8 and 128 characters."); 
    if (parseInt(pwLength) > 128 || parseInt(pwLength) < 8 || !parseInt(pwLength)) {
      window.alert("Must be a number between 8 ane 128");
      passwordLength();
    }
  }
  passConf.length = pwLength;
  return true;
}

// password case type
var caseType = function() {
 
  while (!pwCase) {
    var pwCase = window.prompt("Please select: 1 = Lowercase, 2 = Uppercase, 3 = Both."); 
    if (parseInt(pwCase) > 3 || parseInt(pwLength) < 1 || !parseInt(pwCase)) {
      window.alert("Must be a number between 1 and 3 (1 = Lowercase, 2 = Uppercase, 3 = Both).");
      caseType();
    }
  }
  switch(pwCase) {
    case pwCase = 1:
      passConf.lowercase = true;
    case pwCase = 2:
      passConf.uppercase = true;
    case pwCase = 3:
      passConf.lowercase = true;
      passConf.uppercase = true;
  }
}

var passwordCreator = function(pconf) {
  var rString = ''; 
  for (var i = 0; i < pconf.length; i++) {  
    var randomRes = Math.floor(Math.random() * charBase.lowercase.length);  
    rString += charBase.lowercase.substring(randomRes, randomRes + 1);  
  }  
  return rString;
}

var generatePassword = function(length, ) {
  console.log("start");
  passwordLength();
  return passwordCreator(passConf);
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
