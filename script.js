// Assignment Code
var generateBtn = document.querySelector("#generate");

var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];
var alphaLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var alphaUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

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
    while(length <=7 || length>= 129) {
      window.alert('Your password must be between 8 and 128 characters. Try again.')
      var length = window.prompt('Enter the length of your password between 8 and 128 characters.');
    }

  var lowercase = window.confirm('Would you like to include lowercase characters?');
  var uppercase = window.confirm('Would you like to include uppercase characters?');
  var numeric = window.confirm('Would you like to include numeric characters?');
  var special = window.confirm('Would you like to use special characters?');

  while (lowercase === false && uppercase === false && numeric === false && special === false) {
    window.alert('You must select at least one perameter.');
    var lowercase = window.confirm('Would you like to include lowercase characters?');
    var uppercase = window.confirm('Would you like to include uppercase characters?');
    var numeric = window.confirm('Would you like to include numeric characters?');
    var special = window.confirm('Would you like to use special characters?');
  }

  var randomPass = [];

  if(lowercase) {
    randomPass = randomPass.concat(alphaLower);
  }

  if(uppercase) {
    randomPass = randomPass.concat(alphaUpper);
  }

  if(numeric) {
    randomPass = randomPass.concat(number);
  }

  if(special) {
    randomPass = randomPass.concat(specialChar)
  }

  console.log(randomPass);

  var finalPass = '';

  for(var i = 0; (i <= length-1); i++) {
    finalPass = finalPass + randomPass[Math.floor(Math.random() * randomPass.length)];
    console.log(finalPass);
  }
  return finalPass;
}
