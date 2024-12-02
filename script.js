const toggle = document.getElementById('nav-toggle');
const navbar = document.getElementById('navbar');
toggle.addEventListener('click', () => {
    const navItems = document.querySelectorAll('.nav-menu');
    navItems.forEach((item) => {
        if(item.classList.contains('hidden')){
            item.classList.remove('hidden');
        }else{
            item.classList.add('hidden');
        }
    })
})