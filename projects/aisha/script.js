let burger = document.querySelector('.main-top nav .burger')
let navUL = document.querySelector('.main-top nav ul')
let navBlanket = document.querySelector('.main-top nav .nav-blanket')

burger.addEventListener('click', function(){
    navUL.classList.add('active')
    navBlanket.classList.add('active')
})

navBlanket.addEventListener('click', function(){
    navUL.classList.remove('active')
    navBlanket.classList.remove('active')
})