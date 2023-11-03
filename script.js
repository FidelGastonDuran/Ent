const btnOpenPopupLogin =
document.querySelector("#btn-popup-login");

const PopupLogin =
document.querySelector("#popup-login");

const linkRegister =
document.querySelector("#register-link")

const btnCloseLogin =
document.querySelector("#close-login");

const PopupRegister =
document.querySelector("#popup-register");

const btnCloseRegister =
document.querySelector("#close-register");

const linkLogin =
document.querySelector("#login-link")



btnOpenPopupLogin.addEventListener("click",()=>{
    PopupLogin.showModal();
})

linkRegister.addEventListener("click",()=>{
    PopupLogin.close();
    PopupRegister.showModal();
})

btnCloseLogin.addEventListener("click",()=>{
    PopupLogin.close();
})

linkLogin.addEventListener("click",()=>{
    PopupRegister.close();
    PopupLogin.showModal();
})

btnCloseRegister.addEventListener("click",()=>{
    PopupRegister.close();
})

