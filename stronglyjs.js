'use-strict';
const switcher = document.querySelector('.mode_btn');
switcher.addEventListener('click' ,function(){
    document.body.classList.toggle('light-theme');
    document.body.classList.toggle('dark-theme');
}) 