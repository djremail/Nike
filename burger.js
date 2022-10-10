const close = document.querySelector('.close');
const burger = document.querySelector('.burger');
const modal = document.querySelector('.modal');

burger.addEventListener('click',() => {
    modal.classList.add('active')
})

close.addEventListener('click',() => {
    modal.classList.remove('active')
})