let emailUsuario = localStorage.getItem("userEmail")

let login = document.querySelector(".login")
let registro = document.querySelector(".registro")

let mensaje = "Bienvenido " + emailUsuario;

if (emailUsuario){
    login.innerText = mensaje;
    registro.innerHTML = `<a href="" id="logout">Logout</a>`
} else {
    login.style.display = "inline"
    registro.style.display = "inline"
}

