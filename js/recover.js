let emailRecover = document.querySelector("#email")
let tildeRecover = document.querySelector("#quiero-recuperar")
let botonRecuperar = document.querySelector(".boton-recuperar")

let mensajeEmailRecover = document.querySelector(".mensajeEmailRecover")
let mensajeTildeRecover = document.querySelector(".tildeRecuperar")
let mensajeRecuperar = document.querySelector(".recuperar")

let formulario = document.querySelector("form")

botonRecuperar.addEventListener("click", function(events) {
    events.preventDefault()
    if (emailRecover.value == "") {
        mensajeEmailRecover.style.display = "block"
     } else if (!tildeRecover.checked){
        mensajeEmailRecover.style.display = "none"
        mensajeEmailRecover.style.display = "block"
     } else {
        let mensajeTildeRecover = document.querySelector(".recuperar")
        mensajeTildeRecover.style.display = "block"
     }
    })