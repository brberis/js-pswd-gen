/**
* @author  Cristobal A Barberis
* @version 0.1, 06/06/22
*/

// character sets
var charBase = {
  uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXTZ",  
  lowercase: "abcdefghiklmnopqrstuvwxyz",  
  numeric: "1234567890",
  special: "#$%&'()*+,-./:;<=>?@[\]^_{|}~"
}

var userMessages = {
  passwordLength: "Enter the length of your password. Min. 8, Max. 128 characters.",
  passwordLetters: "Do you want to include letters in your password? 1 = Yes, 2 = No.",
  passwordCaseType: "Enter the type of characters: 1 = Lowercase, 2 = Uppercase, 3 = Both.",
  passwordNumeric: "Do you want numeric characters? 1 = Yes, 2 = No.",
  passwordSpecial: "Do you want special characters? 1 = Yes, 2 = No.",
  passwordNoSelect: "Please select at least one of the previews type of characters."
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

// user prompts
var numPrompt = function(min, max, message) {
  while (response > max || response < min || isNaN(response)) {
    var response = window.prompt(message); 
    response = parseInt(response);
    if (response < max + 1 && response > min - 1) {            
      break;
    }else{
      if ((max - min) === 1) {
        window.alert("Must be a number, " + min + " or " +  max + ".");
      }else{
        window.alert("Must be a number between " + min + " and " + max);
      }
    }
  }
  return response;
}

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
  // prompt password legth
  passConf.length = numPrompt(8, 128, userMessages.passwordLength);

  // password options
  var optionSelect = 0;
  while (optionSelect === 0){
    // password letters and case type prompt
    var pwLetters = numPrompt(1, 3, userMessages.passwordLetters);
    if (pwLetters === 1){
      var pwType = numPrompt(1, 3, userMessages.passwordCaseType);
      switch(pwType) {
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

    // password numeric prompt
    var pwNumeric = numPrompt(1, 2, userMessages.passwordNumeric);
      switch(pwNumeric) {
        case 1:
          passConf.numeric = true;
          break;
      }

    // password special char prompt
    var pwSpecial = numPrompt(1, 2, userMessages.passwordSpecial);
      switch(pwSpecial) {
        case 1:
          passConf.special = true;
          break;
      }

    // if there is no selection
    for(var i in passConf){
      if (passConf[i] == true){
        optionSelect++;
      }
    }
    if (optionSelect === 0){
      window.alert(userMessages.passwordNoSelect);
    }else{
      break;
    }

  }
  // create password
  var password = passwordCreator();

  // reset vaules
  passConf.reset();

  return password;
}

// ### INTERFACE ### 

// **** The interface, HTML and CSS was written by UM Coding Boot Camp. (https://bootcamp.miami.edu) ****
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
