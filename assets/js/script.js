// Assignment Code
var generateBtn = document.querySelector('#generate');

// Character types
// Capital Letters
var capLetter = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// Lowercase Letters
var lowLetter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Numbers
var numElement = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Special Characters
var specialChar = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "=", "+"];

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector('#password');

    passwordText.value = password;
}

function generatePassword() {
    var pwlength = parseInt(prompt("Please enter password length. Must be between 8 - 128 characters"));
    if (!pwlength) {
        alert("Length cannot be blank!");
        generatePassword();
    } else if (pwlength) {
        while (pwlength < 8 || pwlength > 128) {
            pwlength = prompt("Password length must be between 8 and 128 characters. Please enter a new length");
            // Ask for criteria
            var confirmUpper = confirm("Will there be Uppercase charaters?");
            var confirmLower = confirm("Will there be Lowercase characters?");
            var confirmNum = confirm("Will there be Numbers?");
            var confirmSpecial = confirm("Will there be Special Characters?");
            if (confirmUpper === false && confirmLower === false && confirmNum === false && confirmSpecial === false) {
                alert("At least one criteria needs to be selected!");
                console.log(confirmUpper);
            }
        }
    }
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
