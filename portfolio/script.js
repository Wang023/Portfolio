
// hamburger script

const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
    const isOpen = hamburger.classList.toggle('open');
    navLinks.classList.toggle('open');
    
    // Prevent scrolling when menu is open
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
    hamburger.setAttribute('aria-expanded', isOpen);
});

// Close menu when clicking links
navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('open');
        navLinks.classList.remove('open');
        document.body.style.overflow = 'auto';
        hamburger.setAttribute('aria-expanded', false);
    });
});
