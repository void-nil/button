const btn = document.getElementById('btn');
const ic = document.getElementById('image-container');
const sound = new Audio('assets/sound.mp3')
const colors = [
  "linear-gradient(to right, rgb(13, 106, 255), rgb(134, 12, 255))",
  "linear-gradient(to right, rgb(255, 36, 54), rgb(255, 127, 36))",
];

let currentIndex = 0;
sound.preload = 'auto';
sound.volume = 0.5;

btn.addEventListener('click', () => {
    btn.disabled = true;
    // Sound effect
    sound.play();
    // Display image
    ic.style.display = 'block'
    // Switch colors
    btn.style.background = colors[currentIndex];
    currentIndex = (currentIndex + 1) % colors.length;
    // Hide image again
    setTimeout(() => {
        ic.style.display = 'none';
        btn.disabled = false;
    }, 3000);
});

function updateText() {

    if (window.innerWidth <= 600) {
      btn.textContent = "Don't press";
    } else {
      btn.textContent = "Don't press this button";
    }
  }

window.addEventListener("load", updateText);
window.addEventListener("resize", updateText);


  