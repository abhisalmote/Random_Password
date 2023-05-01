// Define the createPassword function in the global scope
function createPassword() {
    const passwordBox = document.getElementById("Password");
    const length = 12;
    const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowerCase = "abcdefghijklmnopeqrstuvwxyz";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()_+<>?:./;'`";
    
    let password = "";
    while(length > password.length){
        password = password + upperCase[Math.floor(Math.random() * upperCase.length)];
        password = password + lowerCase[Math.floor(Math.random() * lowerCase.length)];
        password = password + numbers[Math.floor(Math.random() * numbers.length)];
        password = password + symbols[Math.floor(Math.random() * symbols.length)];
    }
    passwordBox.value = password;
  }
  
  document.addEventListener("DOMContentLoaded", function() {
    const button = document.querySelector("button");
    
    // Attach the createPassword function to the button click event
    button.addEventListener("click", createPassword);
  });
  