// ### GLOBAL SCOPE ###

// character sets
var charBase = {
  uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXTZ",  
  lowercase: "abcdefghiklmnopqrstuvwxyz",  
  numeric: "1234567890",
  special: "#$%&'()*+,-./:;<=>?@[\]^_{|}~"
}

// password configuration object
var passConf = {
  length: null,
  lowercase: false, 
  uppercase: false, 
  numeric: false, 
  special: false,
  reset: function() {
    this.length = null;
    this.lowercase = false;
    this.uppercase = false;
    this.numeric = false;
    this.special = false; 
  }
}


// ### CRITERIA PROMPTS ###

// password length prompt
var passwordLength = function() {
  var pwLength = '';
  while (pwLength > 128 || pwLength < 8 || isNaN(pwLength)) {
    pwLength = window.prompt("Enter the length of your password. Min. 8, Max. 128 characters."); 
    pwLength = parseInt(pwLength);
    if (pwLength < 129 && pwLength > 7) {            
      break;
    }else{
      window.alert("Must be a number between 8 and 128.");
    }
  }
  passConf.length = pwLength;
}

// password case type prompt
var caseType = function() {
  while (pwCase > 3 || pwCase < 1 || isNaN(pwCase)) {
    var pwCase = window.prompt("Enter the type of characters: 1 = Lowercase, 2 = Uppercase, 3 = Both."); 
    pwCase = parseInt(pwCase);
    if (pwCase < 4 && pwCase > 0) {            
      break;
    }else{
      window.alert("Must be a number between 1 and 3.");
    }
  }

  switch(pwCase) {
    case 1:
      passConf.lowercase = true;
      break;
    case 2:
      passConf.uppercase = true;
      break;
    case 3:
      passConf.lowercase = true;
      passConf.uppercase = true;
      break;
  }
}

// password numeric characters prompt
var numChar = function() {
  while (pwNumeric > 2 || pwNumeric < 1 || isNaN(pwNumeric)) {
    var pwNumeric = window.prompt("Do you want numeric characters? 1 = Yes, 2 = No."); 
    pwNumeric = parseInt(pwNumeric);
    if (pwNumeric < 3 && pwNumeric > 0) {            
      break;
    }else{
      window.alert("Must be a number, 1 or 2.");
    }
  }

  switch(pwNumeric) {
    case 1:
      passConf.numeric = true;
      break;
  }
}


// password special characters prompt
var spclChar = function() {
  while (pwSpecial > 2 || pwSpecial < 1 || isNaN(pwSpecial)) {
    var pwSpecial = window.prompt("Do you want special characters? 1 = Yes, 2 = No."); 
    pwSpecial = parseInt(pwSpecial);
    if (pwSpecial < 3 && pwSpecial > 0) {            
      break;
    }else{
      window.alert("Must be a number, 1 or 2.");
    }
  }

  switch(pwSpecial) {
    case 1:
      passConf.special = true;
      break;
  }
}


// ### PASSWORD GENERATOR ###

// create password from character soup
var passwordCreator = function() {
  var newPass = ''; 
  // iterate over the passConf object and extract from charBase on demand
  while(passConf.length != newPass.length) {
    for(var i in passConf){
      if (passConf[i] == true){
        var keyType = i;
        var randomNum = Math.floor(Math.random() * charBase[keyType].length);  
        newPass += charBase[keyType].substring(randomNum, randomNum + 1);  
        if (passConf.length == newPass.length){
          break;
        }
      }
    }
  }

  // Shuffle newPass
  newPass = newPass.split('').sort(function(){return 0.5-Math.random()}).join('');
  return newPass;
}

// main function
function generatePassword() {
  passwordLength();
  caseType();
  numChar();
  spclChar();
  var password = passwordCreator();

  // reset vaules
  passConf.reset();
  characterSoup = ""

  return password;
}

// ### INTERFACE ### 

// * The interface, HTML and CSS was written by UM Coding Boot Camp. (https://bootcamp.miami.edu) *
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
