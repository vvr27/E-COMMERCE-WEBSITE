document.addEventListener('DOMContentLoaded', () => {
    // Mobile menu toggle
    const menu = document.querySelector('#menu');
    const menuToggle = document.querySelector('#menu-toggle');

    menuToggle.addEventListener('click', () => {
        menu.classList.toggle('active');
    });

    // Smooth scroll to section
    const menuLinks = document.querySelectorAll('#menu a');

    menuLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = e.target.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            targetSection.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Highlight active menu item on scroll
    const sections = document.querySelectorAll('section');
    const options = {
        threshold: 0.7
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                menuLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href').substring(1) === entry.target.id) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });
});