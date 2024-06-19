let campoEmail = document.querySelector(".email")
let campoContraseña = document.querySelector(".password")

let formulario = document.querySelector("form")

formulario.addEventListener("submit", function(evento){
    evento.preventDefault()
    if (campoEmail.value == ""){
        alert("Por favor complete el campo email")
    } else if (campoContraseña.value == ""){
        alert("Por favor complete el campo contraseña")
    } else if (campoContraseña.value.length < 6){
        alert("La contraseña debe tener al menos 6 caracteres")
    } else {
        formulario.submit()
        document.location.href="index.html"
        localStorage.setItem("userEmail", campoEmail.value)
    }
    
})