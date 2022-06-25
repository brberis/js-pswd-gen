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
  var pwLength = '';
  while (pwLength > 128 || pwLength < 8 || isNaN(pwLength) ) {
    pwLength = window.prompt("Please enter the number of characters of your password. Between 8 and 128 characters."); 
    pwLength = parseInt(pwLength);
    if (pwLength < 128 || pwLength > 8) {            
      break;
    }else{
      window.alert("Must be a number between 8 ane 128");
    }
  }
  passConf.length = pwLength;
}

// password case type
var caseType = function() {
 
  while (pwCase > 3 || pwCase < 1 || isNaN(pwCase)) {
    var pwCase = window.prompt("Please select: 1 = Lowercase, 2 = Uppercase, 3 = Both."); 
    pwCase = parseInt(pwCase);
    if (pwCase < 3 || pwCase > 1) {            
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

// password special characters
var spclChar = function() {
 
  while (pwSpecial > 3 || pwSpecial < 1 || isNaN(pwSpecial)) {
    var pwSpecial = window.prompt("Do you want special characters in your password? Please select: 1 = Yes, 2 = No, 3 = Random selection."); 
    pwSpecial = parseInt(pwSpecial);
    if (pwSpecial < 3 || pwSpecial > 1) {            
      break;
    }else{
      window.alert("Must be a number between 1 and 3 (1 = Lowercase, 2 = Uppercase, 3 = Both).");
    }
  }

  switch(parseInt(pwSpecial)) {
    case 1:
      passConf.specialChar = 1;
    case 2:
      passConf.specialChar = 0;
    case 3:
      passConf.specialChar = 2;
  }
}

// Create tha character base soap 
var stringBase = function(pConfig) {
  debugger;
  var base = "";
  if (pConfig.lowercase) {
    base =+ charBase.lowercase;

  } else if (pConfig.uppercase) {
    base =+ charBase.uppercase;

  } else if (pConfig.numeric) {
    base =+ charBase.numeric;

  } else if (pConfig.specialChar > 0) {
    base =+ charBase.special;
  }
  console.log('base: ' + base);

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
