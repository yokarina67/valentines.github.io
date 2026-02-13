// Elementos
const envelope = document.getElementById("envelope-container");
const envelopeText = document.getElementById("envelope-text");
const letter = document.getElementById("letter-container");
const noBtn = document.querySelector(".no-btn");
const yesBtn = document.querySelector(".btn[alt='Yes']");

const title = document.getElementById("letter-title");
const catImg = document.getElementById("letter-cat");
const buttons = document.getElementById("letter-buttons");
const finalContainer = document.getElementById("final-container");

// Click sobre el sobre
envelope.addEventListener("click", () => {
    envelope.style.display = "none";
    envelopeText.style.display = "none";
    letter.style.display = "flex";

    setTimeout(() => {
        document.querySelector(".letter-window").classList.add("open");
    }, 50);
});

// Lógica para hacer crecer YES y añadir halo al pulsar NO
let yesScale = 1;

yesBtn.style.position = "relative";
yesBtn.style.transformOrigin = "center center";
yesBtn.style.transition = "transform 0.3s ease";

noBtn.addEventListener("click", () => {
    yesScale += 0.5;
    yesBtn.style.transform = `translate(-50%, -50%) scale(${yesScale})`;
    yesBtn.style.position = "fixed";
    yesBtn.style.top = "50%";
    yesBtn.style.left = "50%";

    yesBtn.classList.add("halo");
    setTimeout(() => yesBtn.classList.remove("halo"), 1000);
});

yesBtn.addEventListener("click", () => {
    title.textContent = "Nos vemos el domingoo!!♡";

    // Ocultamos el gato original
    catImg.style.display = "none";

    buttons.style.display = "none";
    finalContainer.style.display = "flex";
});
