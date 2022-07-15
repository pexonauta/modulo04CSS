let show = true

const menuSection = document.querySelector('div.menu-section')
const menuBurguer = menuSection.querySelector('.menu-burguer')

menuBurguer.addEventListener('click', () => {
    menuSection.classList.toggle('on', show)
    show = !show
})
