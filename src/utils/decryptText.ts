export function decryptText(elementId: string, text: string) {
  const characters = new Array(30)
    .fill("")
    .map((_) => String.fromCharCode((Math.random() * 94 + 33) | 0))
    .join("");

  const textContainer = document.getElementById(elementId);

  let currentText = new Array(text.length).fill("_"); // Initialize with placeholders
  let cyclesPerChar = new Array(text.length).fill(0); // Track cycles for each character
  const maxCycles = 30; // Maximum cycles before revealing the correct character

  const randomChar = () =>
    characters[Math.floor(Math.random() * characters.length)];

  function updateText() {
    for (let i = 0; i < text.length; i++) {
      if (i === 1) {
        textContainer.classList.remove("break-all");
      }
      if (cyclesPerChar[i] < maxCycles) {
        // As it approaches maxCycles, increase the chance of setting the correct character
        const probability = cyclesPerChar[i] / maxCycles;
        if (Math.random() < probability) {
          currentText[i] = text[i];
        } else {
          currentText[i] = text[i] === " " ? " " : randomChar();
        }
      } else {
        currentText[i] = text[i]; // Once max cycles is hit, set to correct character
      }
    }
    textContainer.textContent = currentText.join("");
  }

  function decipher() {
    const interval = setInterval(() => {
      let allDeciphered = true;

      for (let i = 0; i < text.length; i++) {
        if (cyclesPerChar[i] < maxCycles) {
          allDeciphered = false;
          cyclesPerChar[i]++;
        } else if (currentText[i] !== text[i]) {
          allDeciphered = false;
        }
      }

      updateText();

      if (allDeciphered) {
        clearInterval(interval);
        textContainer.textContent = text; // Set the final text
      }
    }, 60); // Adjust the timing as necessary
  }

  return decipher()
}
