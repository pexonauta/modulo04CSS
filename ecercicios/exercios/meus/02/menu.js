let menuinfo = true

const menu = document.querySelector('.menu-section')
const burguer = menu.querySelector('.menu-burguer')

burguer.addEventListener('click', () => {
    menu.classList.toggle('on', menuinfo)
    menuinfo =  !menuinfo
    console.log(menuinfo)
})