var generateBtn = document.querySelector("generate");

const upperCaseSet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
const lowerCaseSet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
const numberSet = ["0","1","2","3","4","5","6","7","8","9"]
const symbols = ["!","#","$","%","&","'","(",'"',")","*",",","+","-",".","/",":",";","<","=",">","?","@","[","","]","^","_","`","{","|","}","~"]
 // Added a symbols in order to be used for the password generator//
 

 // Adding a function//
 function generatePassword() {
    // Adding a if/else statement
       charNum = prompt("How long would you like your password to be? (between 8 and 128 characters)");
       if (charNum < 8 || charNum > 128) {
         alert("Password must be between 8 and 128 characters!");
         return;
       } else if (isNaN(charNum)) {
         alert("Invalid entry");
         return;
       }
       else {
        alert("Password length set!");
        