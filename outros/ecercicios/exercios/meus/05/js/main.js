let show = true

let menu = document.querySelector('.menu')
let btnMenu = document.querySelector('.btn-menu')
let btnClose = document.querySelector('.btn-close')

btnMenu.addEventListener('click', () => {
    menu.classList.toggle('on', show)
    btnClose.classList.add('on')
    show != true
})
btnClose.addEventListener('click', () => {
    menu.classList.remove('on')
    btnClose.classList.remove('on')
})