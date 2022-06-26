// Assignment code here

// ## GLOBAL SCOPE ##

// soup of characters
var characterSoup = "";

// character sets
var charBase = {
  uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXTZ",  
  lowercase: "abcdefghiklmnopqrstuvwxyz",  
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


// ## PASSWORD CRITERIA ##

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

// Create tha character base soup 
var createCharSoup = function() {
  if (passConf.lowercase) {
    characterSoup += charBase.lowercase;
  }
  if (passConf.uppercase) {
    characterSoup += charBase.uppercase;
  }
  if (passConf.numeric) {
    characterSoup += charBase.numeric;
  }
  if (passConf.special) {
    characterSoup += charBase.special;
  }

}
// check if passwprd meet with the criteria
var passwordCheck = function (newPass) {
  var passwordPassed = false;

  // Check using criteria regex
  var lowerRegex = /(.*[a-z].*)/;
  var isLower = lowerRegex.test(newPass);
  var upperRegex = /(.*[A-Z].*)/;
  var isUpper = upperRegex.test(newPass);
  var numRegex = /(.*\d.*)/;
  var isNumeric = numRegex.test(newPass);
  var specialRegex =/(.*\W.*)/;
  var isSpecial = specialRegex.test(newPass);

  while (
    passConf.lowercase != isLower ||
    passConf.uppercase != isUpper ||
    passConf.numeric != isNumeric ||
    passConf.special != isSpecial 
    ){
      // console.log("passConf");
      // console.log(passConf.lowercase);
      // console.log(passConf.lowercase);
      // console.log(passConf.lowercase);
      // console.log(passConf.lowercase);
      // console.log("newPass");
      // console.log(isLower);
      // console.log(isUpper);
      // console.log(isNumeric);
      // console.log(isSpecial);
      
      if (
        passConf.lowercase === isLower &&
        passConf.uppercase === isUpper &&
        passConf.numeric === isNumeric &&
        passConf.special === isSpecial
        ){
          console.log("password passed " + true);
          break;
        }
      passwordCreator();
      console.log("password passed " + false);
    }
    return true;

}

var passwordCreator = function() {
  var newPass = ''; 
  for (var i = 0; i < passConf.length; i++) {  
    var randomNum = Math.floor(Math.random() * characterSoup.length);  
    newPass += characterSoup.substring(randomNum, randomNum + 1);  
  }  
  console.log('newPass' , newPass);
  if (passwordCheck(newPass)){
    console.log("newPass passed", newPass);
    return newPass;
  }
}

function generatePassword() {
  console.log("start");
  passwordLength();
  caseType();
  numChar();
  spclChar();
  createCharSoup();
  var password = passwordCreator();

  // reset vaules
  passConf.reset();
  characterSoup = ""

  console.log(passConf);
  console.log(characterSoup);
  console.log(password);
  return password;
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
