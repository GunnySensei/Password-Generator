// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// generate password based on rules

function generatePassword () {
  var length = window.prompt('Enter the length of your password between 8 and 128 characters.');
  console.log(length);
  var lowercase = window.prompt('Would you like to include lowercase characters? [Enter: YES or NO]');
  console.log(lowercase);
  var uppercase = window.prompt('Would you like to include uppercase characters? [Enter: YES or NO]');
  console.log(uppercase);
  var numeric = window.prompt('Would you like to include numeric characters? [Enter: YES or NO]');
  console.log(numeric);
  var specialChar = window.prompt('Would you like to include special characters? [Enter: YES or NO]');
  console.log(specialChar);

}

var lengthCheck = function(length) {
}