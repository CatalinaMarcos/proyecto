let queryString = location.search

let queryStringObj = new URLSearchParams(queryString)

let id = queryStringObj.get("id")

console.log(id);

fetch(`https://fakestoreapi.com/products/${id}`)
    .then(function (response) {
        return response.json()
    })

    .then(function (data) {
        pdetalle = document.querySelector(".detallado")
        let contenedor = ""
            contenedor= `<article class="detalle_producto">
                            <h2>${data.title}</h2>
                            <img class="imagen_producto" src="${data.image}" alt="">
                            <p>Precio: $${data.price} USD</p>
                            <p>${data.description} </p>
                            <p>Categoria: <a href="./category.html">${data.category}</a></p>
                            <button class="agregar" id="agregar-al-carrito">Agregar al carrito</button>
                        </article>` 

        pdetalle.innerHTML += contenedor
        console.log(data);

        let botonAgregar = document.querySelector("#agregar-al-carrito")

        botonAgregar.addEventListener("click", function(evento){
            evento.preventDefault()
            let pcarrito = localStorage.getItem("pcarrito")
            if (pcarrito) {
                pcarrito = JSON.parse(pcarrito)
            } else {
                pcarrito = [];
            }
            pcarrito.push(id)
            localStorage.setItem("pcarrito", JSON.stringify(pcarrito))
        })
    })

    .catch(function (error) {
        console.log("error: " + error);
    })

   


    