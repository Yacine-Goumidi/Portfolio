const panels = document.querySelectorAll('.panel');

panels.forEach(panel => {
    panel.addEventListener('click', (e) => {
        e.preventDefault(); // empêche navigation immédiate

        removeActiveClasses();
        panel.classList.add('active');

        const target = panel.getAttribute('href');

        // attend 400ms pour voir l'animation avant navigation
        setTimeout(() => {
            window.location.href = target;
        }, 400);
    });
});

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active');
    });
}
