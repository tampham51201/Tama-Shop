let modelElement = document.querySelector('.model');
let registerFormElement = modelElement.querySelector(".auth-form__register");
let loginFormElement = modelElement.querySelector(".auth-form__login");
let navMTicon = document.querySelector('.header__mobile-navbar')
let navMT = document.querySelector('.header__mobile-tablet-navbar')
let navOverlay = document.querySelector('.header__tablet-navbar-overlay')
let closeNav = document.querySelector('.mobile-tablet-navbar__close')




function changeForm(showForm, hideForm) {
    modelElement.style.display = `flex`
    showForm.style.display = `block`
    hideForm.style.display = `none`
}

function clickRegister() {
    changeForm(registerFormElement, loginFormElement)
}

function clickLogin() {
    changeForm(loginFormElement, registerFormElement)
}

function closeAuthform() {
    modelElement.style.display = `none`
}
document.querySelector(".model__overlay").onclick = () => {
    modelElement.style.display = `none`
}

function changeNav(showNav, event) {
    if (event == true) {
        navOverlay.style.display = `block`
        showNav.style.display = `block`
    } else {
        navOverlay.style.display = `none`
        showNav.style.display = `none`

    }
}
navMTicon.onclick = (e) => {
    changeNav(navMT, true)

}
closeNav.onclick = function() {
    changeNav(navMT, false)
}
navOverlay.onclick = () => {
    changeNav(navMT, false)
}