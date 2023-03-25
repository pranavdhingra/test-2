burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
nav_list = document.querySelector('.nav_list')
rightNav = document.querySelector('.rightNav')

burger.addEventListener('click',()=>{
    rightNav.classList.toggle('v-class-resp');
    nav_list.classList.toggle('v-class-resp');
    navbar.classList.toggle('h-nav-resp');
})