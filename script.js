const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
const numberChars = "0123456789";
const symbolChars = "!@#$%^&*()_+";

const passwordInput = document.getElementById("password");
const lengthInput = document.getElementById("length");

const uppercase = document.getElementById("uppercase");
const lowercase = document.getElementById("lowercase");
const numbers = document.getElementById("numbers");
const symbols = document.getElementById("symbols");

const generateBtn = document.getElementById("generateBtn");

// Generate Password Function
function generatePassword() {

  let characters = "";

  if (uppercase.checked) {
    characters += uppercaseChars;
  }

  if (lowercase.checked) {
    characters += lowercaseChars;
  }

  if (numbers.checked) {
    characters += numberChars;
  }

  if (symbols.checked) {
    characters += symbolChars;
  }

  if (characters === "") {
    alert("Select at least one option");
    return;
  }

  let password = "";

  for (let i = 0; i < lengthInput.value; i++) {

    const randomIndex =
      Math.floor(Math.random() * characters.length);
      console.log(randomIndex)

    password += characters[randomIndex];
  }

  passwordInput.value = password;
}

// Button Event
generateBtn.addEventListener("click", generatePassword);

// Copy Password
const copyBtn = document.getElementById("copyBtn");

copyBtn.addEventListener("click", () => {

  if(passwordInput.value === "") return;

  navigator.clipboard.writeText(passwordInput.value);

  alert("Password Copied!");
});