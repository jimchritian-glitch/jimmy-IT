const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const modeToggle = document.querySelector('.mode-toggle');
const body = document.body;

if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('open');
    });

    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('open');
        });
    });
}

if (modeToggle) {
    modeToggle.addEventListener('click', () => {
        body.classList.toggle('dark');
        body.classList.toggle('light');
    });
}
