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
    while(length <=7 || length>= 129) {
      window.alert('Your password must be between 8 and 128 characters. Try again.')
      var length = window.prompt('Enter the length of your password between 8 and 128 characters.');
    }

  var lowercase = window.confirm('Would you like to include lowercase characters?');
  var uppercase = window.confirm('Would you like to include uppercase characters?');
  var numeric = window.confirm('Would you like to include numeric characters?');
  var specialChar = window.confirm('Would you like to use special characters?');

  while (lowercase === false && uppercase === false && numeric === false && specialChar === false) {
    window.alert('You must select at least one perameter.');
    var lowercase = window.confirm('Would you like to include lowercase characters?');
    var uppercase = window.confirm('Would you like to include uppercase characters?');
    var numeric = window.confirm('Would you like to include numeric characters?');
    var specialChar = window.confirm('Would you like to use special characters?');
  }
}
