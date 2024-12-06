const toggle = document.getElementById('nav-toggle');

toggle.addEventListener('click', () => {
    const navMenu = document.querySelector('.nav-menu');

    // Toggle the rotation class
    if (toggle.classList.contains('rotate-0')) {
        toggle.classList.remove('rotate-0');
        toggle.classList.add('rotate-180');
    } else {
        toggle.classList.remove('rotate-180');
        toggle.classList.add('rotate-0');
    }

    // Toggle the nav menu visibility
    if (navMenu.classList.contains('hidden')) {
        navMenu.classList.remove('hidden');
        requestAnimationFrame(() => {
            navMenu.classList.remove('scale-y-0');
            navMenu.classList.add('scale-y-100');
        });
    } else {
        navMenu.classList.remove('scale-y-100');
        navMenu.classList.add('scale-y-0');
        navMenu.addEventListener(
            'transitionend',
            () => {
                navMenu.classList.add('hidden');
            },
            { once: true }
        );
    }
});
