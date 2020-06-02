function displayConversion() {
  let inputField = document.getElementById('nato-input');
  let outputField = document.getElementById('nato-output');
  let inputLetter = inputField.value;
  inputLetter = nato(inputLetter);
  outputField.innerHTML = inputLetter;
}
