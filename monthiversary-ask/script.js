// Elements
const envelope = document.getElementById("envelope-container");
const letter = document.getElementById("letter-container");
const noBtn = document.querySelector(".no-btn");
const yesBtn = document.querySelector('img[alt="Yes"]');
const noWrapper = document.querySelector(".no-wrapper");

const title = document.getElementById("letter-title");
const buttons = document.getElementById("letter-buttons");
const finalText = document.getElementById("final-text");

// Click envelope
envelope.addEventListener("click", () => {
    envelope.style.display = "none";
    letter.style.display = "flex";

    setTimeout(() => {
        document.querySelector(".letter-window").classList.add("open");
    }, 50);
});

// Move No button
noBtn.addEventListener("mouseenter", () => {
    const x = Math.random() * 500 - 250;
    const y = Math.random() * 300 - 150;

    noWrapper.style.transform = `translate(${x}px, ${y}px)`;
});

yesBtn.addEventListener("click", () => {
    title.textContent = "Yippieeeee! ❤️";
    buttons.style.display = "none";
    finalText.style.display = "block";

    if (catImg) {
        catImg.src = "Cats.png"; // or whatever your happy cat image is called
    }
});