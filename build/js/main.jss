const initApp = () => {
    const hamburgerBtn = document.getElementById('hamburger-buttton)
    const mobileMenu = document.getElementById('mobile-menu')

    const toggleMenu = () => {
        mobileMenu.classlist.toggle('hidden')
        mobileMenu.classlist.toggle('flex')
        mobileMenu.classlist.toggle('toggle-btn')
    }
}
    hamburgerBtn.addEventListener('click',toggleMenu)
    mobileMenu.addEventListener('click',tooggleMenu)
}

document.addEventListener('DOMContentLoaded',initApp)
