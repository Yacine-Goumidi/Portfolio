const playBtn = document.getElementById("playBtn");
const gameSection = document.getElementById("gameSection");
const fullscreenBtn = document.getElementById("fullscreenBtn");
const unityFrame = document.getElementById("unityFrame");

playBtn.addEventListener("click", () => {
    gameSection.classList.remove("hidden");
    gameSection.scrollIntoView({ behavior: "smooth" });
});

fullscreenBtn.addEventListener("click", () => {
    if (unityFrame.requestFullscreen) {
        unityFrame.requestFullscreen();
    } else if (unityFrame.webkitRequestFullscreen) {
        unityFrame.webkitRequestFullscreen();
    }
});
