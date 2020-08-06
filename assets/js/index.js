// Open and close mobile menu

let mobileMenuButton = document.getElementById('mobile-button');

let mobileMenu = document.getElementById('mobile-menu');

mobileMenuButton.addEventListener('click', () => {
    if (mobileMenu.classList.contains('mobile-menu-hide')) {
        mobileMenu.classList.remove('mobile-menu-hide');
        mobileMenu.classList.add('mobile-menu-show');
        mobileMenu.style.display = 'flex';
        mobileMenuButton.innerHTML = `<svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M30.75 10.25L10.25 30.75" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M10.25 10.25L30.75 30.75" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        `
    } else if (mobileMenu.classList.contains('mobile-menu-show')) {
        mobileMenu.classList.remove('mobile-menu-show');
        mobileMenu.classList.add('mobile-menu-hide');
        setTimeout(() => {
            mobileMenu.style.display = 'none';
        }, 230)
        mobileMenuButton.innerHTML = '';
        mobileMenuButton.innerText = 'Меню';
    } else {
        mobileMenu.classList.add('mobile-menu-show');
        mobileMenu.style.display = 'flex';
        mobileMenuButton.innerHTML = `<svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M30.75 10.25L10.25 30.75" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M10.25 10.25L30.75 30.75" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        `;
    }
});