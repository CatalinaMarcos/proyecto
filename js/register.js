let emailRegistro = document.querySelector(".emailRegister")
let passwordRegistro = document.querySelector(".passwordRegister")
let repetirPassword = document.querySelector(".repetirPassword")

let mensajeEmail = document.querySelector(".mensajeEmail")
let mensajePassword = document.querySelector(".mensajePassword")
let mensajePasswordLength = document.querySelector(".mensajePasswordLength")
let mensajeRepetir = document.querySelector(".mensajeRepetir")

let formulario = document.querySelector("form")

formulario.addEventListener("submit", function(events){
    events.preventDefault()
    if (emailRegistro.value == ""){
        mensajeEmail.style.display = "block" 
    } else if (passwordRegistro.value == ""){
        mensajeEmail.style.display = "none"
        mensajePassword.style.display = "block"
    } else if (passwordRegistro.value.length < 6){
        mensajePassword.style.display = "none"
        mensajePasswordLength.style.display = "block"
    } else if (passwordRegistro.value !== repetirPassword.value) {
        mensajePasswordLength.style.display = "none"
        mensajeRepetir.style.display = "block"
    } else {
        formulario.submit()
        document.location.href="login.html"
    }
    
})