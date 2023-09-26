// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

//Defined characters for password generator 
var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numberChars = "0123456789";
var specialChars = "!@#$%^&*()_-+=<>?";

//Function to randomly generate a character from a string
function getRandomCharacter(characters) {
  var randomIndex = Math.floor(Math.random() * characters.length);
  return characters.charAt(randomIndex);
}

//Function to generate password based on user criteria 
function generatePassword() {
  var password = "";
  var characterSet = "";

  var length = parseInt(prompt("Enter the password length (8-128 characters):"));

  if (isNaN(length) || length < 8 || length > 128) {
    alert("Password length must be between 8 and 128 characters.");
    return "";
  }

  if (confirm("Include lowercase letters?")) {
    characterSet += lowercaseChars;
  }
  if (confirm("Include uppercase letters?")) {
    characterSet += uppercaseChars;
  }
  if (confirm("Include numbers?")) {
    characterSet += numberChars;
  }
  if (confirm("Include special characters?")) {
    characterSet += specialChars;
  }

  if (characterSet === "") {
    alert("Please select at least one character type.");
    return "";
  }

  for (var i = 0; i < length; i++) {
    password += getRandomCharacter(characterSet);
  }
  
  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
