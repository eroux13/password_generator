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

// User choices
var choices;

// Empty array to push characters in
var finalPassword = [];

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
    } else if (pwlength < 8 || pwlength > 128) {
        pwlength = prompt("Password length must be between 8 and 128 characters. Please enter a new length");
        generatePassword();
    } else if (pwlength >= 8 && pwlength <= 128) {
        // Ask for criteria
        var confirmUpper = confirm("Will there be Uppercase charaters?");
        var confirmLower = confirm("Will there be Lowercase characters?");
        var confirmNum = confirm("Will there be Numbers?");
        var confirmSpecial = confirm("Will there be Special Characters?");
        // Use case for no inputs
        if (confirmUpper === false && confirmLower === false && confirmNum === false && confirmSpecial === false) {
            alert("At least one criteria needs to be selected!");
            generatePassword();
        }
        // Use case for all criteria
        else if (confirmUpper && confirmLower && confirmNum && confirmSpecial) {
            choices = capLetter.concat(lowLetter, numElement, specialChar);
        }
        // Use case for 3 criterias
        else if (confirmUpper && confirmLower && confirmNum) {
            choices = capLetter.concat(lowLetter, numElement);
        }
        else if (confirmUpper && confirmLower && confirmSpecial) {
            choices = capLetter.concat(lowLetter, specialChar);
        }
        else if (confirmUpper && confirmSpecial && confirmNum) {
            choices = capLetter.concat(specialChar, numElement);
        }
        else if (confirmLower && confirmSpecial && confirmNum) {
            choices = lowLetter.concat(lowLetter, numElement);
        }
        // Use case for 2 criterias
        else if (confirmUpper && confirmLower) {
            choices = capLetter.concat(lowLetter);
        }
        else if (confirmUpper && confirmNum) {
            choices = capLetter.concat(numElement);
        }
        else if (confirmUpper && confirmSpecial) {
            choices = capLetter.concat(specialChar);
        }
        else if (confirmNum && confirmLower) {
            choices = numElement.concat(lowLetter);
        }
        else if (confirmSpecial && confirmLower) {
            choices = specialChar.concat(lowLetter);
        }
        else if (confirmNum && confirmSpecial) {
            choices = numElement.concat(specialChar);
        }
        // Use case for 1 criteria
        else if (confirmUpper) {
            choices = capLetter;
        }
        else if (confirmLower) {
            choices = lowLetter;
        }
        else if (confirmNum) {
            choices = numElement;
        }
        else if (confirmSpecial) {
            choices = specialChar;
        }
        // Select characters based off of user input length
        for (var i = 0; i < pwlength; i++) {
            var confirmChoices = choices[Math.floor(Math.random() * choices.length)];
            finalPassword.push(confirmChoices);
        }
        // Use join() to concatenate characters
        var displayPassword = finalPassword.join("");
        return displayPassword;
    }
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
