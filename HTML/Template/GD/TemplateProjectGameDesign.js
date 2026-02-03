// Récupération des éléments
const playBtn = document.getElementById("playBtn");
const gameSection = document.getElementById("gameSection");
const fullscreenBtn = document.getElementById("fullscreenBtn");
const unityFrame = document.getElementById("unityFrame");

// ─── Lancer la sandbox ───
playBtn.addEventListener("click", () => {
    gameSection.classList.remove("hidden");
    gameSection.scrollIntoView({ behavior: "smooth" });
});

// ─── Toggle fullscreen ───
fullscreenBtn.addEventListener("click", () => {
    if (!document.fullscreenElement) {
        // Entrer en fullscreen
        if (unityFrame.requestFullscreen) {
            unityFrame.requestFullscreen();
        } else if (unityFrame.webkitRequestFullscreen) { // Safari
            unityFrame.webkitRequestFullscreen();
        }
    } else {
        // Sortir du fullscreen
        document.exitFullscreen();
    }
});

// ─── Mise à jour automatique du texte du bouton ───
document.addEventListener("fullscreenchange", () => {
    const enterText = fullscreenBtn.dataset.enter;
    const exitText = fullscreenBtn.dataset.exit;

    fullscreenBtn.textContent = document.fullscreenElement
        ? exitText
        : enterText;
});
