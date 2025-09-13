const popup = document.getElementById("welcomePopup");
const enterBtn = document.getElementById("enterBtn");
const music = document.getElementById("bgMusic");
const wusSound = document.getElementById("wusSound");
const ppImage = document.getElementById("ppImage");

let spinInterval;

// Klik “Masuk”
enterBtn.addEventListener("click", () => {
  popup.style.display = "none";
  music.play();
  
  // mainkan efek pertama
  playSpinWithWus();
  // ulang tiap ±6 detik biar ada jeda enak
  spinInterval = setInterval(playSpinWithWus, 6000);
});

function playSpinWithWus() {
  // mainkan audio dulu
  wusSound.currentTime = 0;
  wusSound.play();
  
  // kasih jeda 1 detik sebelum animasi jalan
  setTimeout(() => {
    ppImage.classList.remove("spin");
    void ppImage.offsetWidth; // reflow
    ppImage.classList.add("spin");
  }, 1000); // delay 1 detik
}

// Hover efek aura lightning
document.querySelectorAll(".info-card, .skill-card").forEach(card => {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(255,204,0,0.3), rgba(0,0,0,0.7))`;
  });
  card.addEventListener("mouseleave", () => {
    card.style.background = "rgba(0,0,0,0.6)";
  });
});