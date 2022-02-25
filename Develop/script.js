// Assignment code here
var lowerCase = [
  "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l","m","n","o","p","q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
]
var upperCase = [ 
 "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"
]
var specialCharacters = [
  "!", "@", "#", "$", "%", "&", "*", "-", "=", "+", "_"
]
var numbers = [
  "1", "2", "3", "4", "5", "6", "7", "8", "9"
]


function generatePassword(){ 
  var combinedCharacters = [];
  //Prompt asking user what password qualifications they'd like
  var passwordLength = prompt("How long would you like your password to be? Your password must be between 8 and 128 characters.");
  var useLowerCase = confirm("Would you like to use lowercase characters?");
  var useUpperCase = confirm("Would you like to use uppercase characters?");
  var useSpecialCharacters = confirm("Would you like to use special characters?");
  var useNumbers = confirm("Would you like to use numbers?");
  //Combining users response to get combineCharcters to use for password
  if(useLowerCase){
    combinedCharacters = combinedCharacters.concat(lowerCase);
  }
  if(useUpperCase){
    combinedCharacters = combinedCharacters.concat(upperCase);
  }
  if(useSpecialCharacters){
    combinedCharacters = combinedCharacters.concat(specialCharacters);
  }
  if(useNumbers){
    combinedCharacters = combinedCharacters.concat(numbers);
  }
  // Validation of password length, and that at leat i character was chosen
  if(passwordLength < 8 || passwordLength > 128){
    alert("Your password must be between 8 and 128 characters!");
    return "";
  }
  if(combinedCharacters.length < 1){
    alert("You need to choose an option!");
    return "";
  }
  // Generating new password
var randomPassword = "";

for(var i = 0; i < passwordLength; i++){
  var randomIndex = Math.random() * combinedCharacters.length;
  randomIndex = Math.floor(randomIndex);
  randomPassword += combinedCharacters[randomIndex];
}
// Returning password to be displayed
return randomPassword;
}

var setPasswordCharacter = function(){
  var randomIndex = Math.random() * combinedCharacters.length;
  randomIndex = Math.floor(randomIndex);
   return combinedCharacters[randomIndex];
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
