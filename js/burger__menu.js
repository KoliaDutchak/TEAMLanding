const iconMenu = document.querySelector('.menu__icon')

if (iconMenu){
    const menuBody = document.querySelector('.nav');
    const input = document.querySelector('.input')
    const inputIcon = document.querySelector('.input__icon')
    iconMenu.addEventListener("click", function(e){
        document.body.classList.toggle("_lock")
        iconMenu.classList.toggle('_active')
        menuBody.classList.toggle('_active')
        input.classList.toggle('unactive')
        inputIcon.classList.toggle('unactive')
    });
} 