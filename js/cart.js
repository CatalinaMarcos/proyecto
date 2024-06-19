
let seccion = document.querySelector("#listado")

let recuperoCarrito = localStorage.getItem("pcarrito")
let carritoJson = JSON.parse(recuperoCarrito)

let finalizado = document.querySelector(".finalizar-compra")

finalizado.addEventListener("click", function(event){
    event.preventDefault()
    localStorage.clear()
    alert("¡Gracias por su compra!")
    window.location = "index.html"
})

if (recuperoCarrito == null) { 
    seccion.innerText = "Su carrito está vacío :(";
    seccion.style.fontSize = "25px"
    seccion.style.fontStyle = "italic"
    seccion.style.textAlign = "center"
    seccion.style.height = "39vh";
    finalizado.style.display = "none";
} else {
    for (let i=0; i < recuperoCarrito.length; i++){
        fetch(`https://fakestoreapi.com/products/${carritoJson[i]}`)
            .then(function(response){
                return response.json()
            })
            .then(function(data){
                seccion.innerHTML += `<article class="carrito3">
                                        <img class="fotos" src="${data.image}">
                                        <h3 class="descripcion">${data.title}</h3>
                                        <p class="descripcion">$${data.price} USD</p>
                                    </article>`
            })
            .catch(function(error){
                console.log("Error: " + error);
            })
    }
}


