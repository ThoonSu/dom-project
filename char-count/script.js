const textInput = document.getElementById("text-input");
const charCount = document.getElementById("char-count");

// Set a maximum character limit
const maxChars = 150;

function checkCount() {
  const currentLength = textInput.value.length;

  // Update the character count
  charCount.textContent = currentLength;

  // Change the text color if the limit is exceeded
  if (currentLength > maxChars) {
    charCount.style.color = "red";
  } else {
    charCount.style.color = "#61dafb";
  }
}
