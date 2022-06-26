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
  special: false,
  reset: function() {
    this.length = null;
    this.lowercase = false;
    this.uppercase = false;
    this.numeric = false;
    this.special = false; 
  }
}

// PASSWORD CRITERIA:

// password length
var passwordLength = function() {
  var pwLength = '';
  while (pwLength > 128 || pwLength < 8 || isNaN(pwLength) ) {
    pwLength = window.prompt("Please enter the length your password. Min. 8, Max. 128 characters."); 
    pwLength = parseInt(pwLength);
    if (pwLength < 129 && pwLength > 7) {            
      break;
    }else{
      window.alert("Must be a number between 8 and 128");
    }
  }
  passConf.length = pwLength;
}

// password case type
var caseType = function() {
 
  while (pwCase > 3 || pwCase < 1 || isNaN(pwCase)) {
    var pwCase = window.prompt("What type of letters do you want to your password? Please enter: 1 = Lowercase, 2 = Uppercase, 3 = Both."); 
    pwCase = parseInt(pwCase);
    if (pwCase < 4 && pwCase > 0) {            
      break;
    }else{
      window.alert("Must be a number between 1 and 3 (1 = Lowercase, 2 = Uppercase, 3 = Both).");
    }
  }

  switch(pwCase) {
    case 1:
      passConf.lowercase = true;
    case 2:
      passConf.uppercase = true;
    case 3:
      passConf.lowercase = true;
      passConf.uppercase = true;
  }
}

// password numeric characters
var numChar = function() {

  while (pwNumeric > 2 || pwNumeric < 1 || isNaN(pwNumeric)) {
    var pwNumeric = window.prompt("Do you want numeric characters in your password? Please enter: 1 = Yes, 2 = No."); 
    pwNumeric = parseInt(pwNumeric);
    if (pwNumeric < 3 && pwNumeric > 0) {            
      break;
    }else{
      window.alert("Must be number 1 or 2 (1 = Yes, 2 = No).");
    }
  }

  switch(pwNumeric) {
    case 1:
      passConf.numeric = true;
  }
}


// password special characters
var spclChar = function() {
 
  while (pwSpecial > 2 || pwSpecial < 1 || isNaN(pwSpecial)) {
    var pwSpecial = window.prompt("Do you want special characters in your password? Please enter: 1 = Yes, 2 = No"); 
    pwSpecial = parseInt(pwSpecial);
    if (pwSpecial < 3 && pwSpecial > 0) {            
      break;
    }else{
      window.alert("Must be enter 1 or 2 (1 = Yes, 2 = No).");
    }
  }

  switch(pwSpecial) {
    case 1:
      passConf.special = true;
  }
}

// Create tha character base soap 
var stringBase = function(pConfig) {
  var baseStg = "";
  if (pConfig.lowercase) {
    baseStg += charBase.lowercase;
  }
  if (pConfig.uppercase) {
    baseStg += charBase.uppercase;
  }
  if (pConfig.numeric) {
    baseStg += charBase.numeric;
  }
  if (pConfig.special) {
    baseStg += charBase.special;
  }
  console.log('base: ' + baseStg);
  return baseStg;

}

var passwordCreator = function(pConfig) {
  var rString = ''; 
  for (var i = 0; i < pConfig.length; i++) {  
    var randomRes = Math.floor(Math.random() * charBase.lowercase.length);  
    rString += charBase.lowercase.substring(randomRes, randomRes + 1);  
  }  
  return rString;
}

var generatePassword = function() {
  console.log("start");
  passwordLength();
  caseType();
  numChar();
  spclChar();
  var sbase = stringBase(passConf)

  console.log(passConf);
  console.log(sbase);

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
