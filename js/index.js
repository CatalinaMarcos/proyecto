let productosElectronicos = document.querySelector(".electronics")

fetch('https://fakestoreapi.com/products/category/electronics')
    .then(function(response){
        return response.json()
    })

    .then(function(data){
        console.log(data);
        for (let i = 0; i < 6 ; i++) {
        productosElectronicos.innerHTML+=   `<div class="product">
                                                <h3 class="centrado">${data[i].title}</h3>
                                                <img class="img" src="${data[i].image}">
                                                <p class="centrado">${data[i].description}</p>
                                                <p class="centrado">Precio: $${data[i].price} USD</p>
                                                <a href="./producto.html?id=${data[i].id}"><button class="vermás">Ver más</button></a>
                                            </div>`
        }
    })

    .catch(function(error) {
        console.log("Error: " + error);
    })



let productosAccesorios = document.querySelector(".jewelery")

fetch('https://fakestoreapi.com/products/category/jewelery')
    .then(function(response){
        return response.json()
    })
    
    .then(function(data){
        console.log(data);
        for (let i = 0; i < 6 ; i++) {
        productosAccesorios.innerHTML+=   `<div class="product">
                                                    <h3 class="centrado">${data[i].title}</h3>
                                                    <img src="${data[i].image}">
                                                    <p class="centrado">${data[i].description}</p>
                                                    <p class="centrado">Precio: $${data[i].price} USD</p>
                                                    <a href="./producto.html?id=${data[i].id}"><button class="vermás">Ver más</button></a>
                                                </div>`
            }
    })
    
    .catch(function(error) {
        console.log("Error: " + error);
    })

    let productosMujer = document.querySelector(".women")

    fetch("https://fakestoreapi.com/products/category/women's clothing")
        .then(function(response){
            return response.json()
        })
        
        .then(function(data){
            console.log(data);
            for (let i = 0; i < 6 ; i++) {
            productosMujer.innerHTML+=   `<div class="product">
                                                        <h3 class="centrado">${data[i].title}</h3>
                                                        <img src="${data[i].image}" alt="">
                                                        <p class="centrado">${data[i].description}</p>
                                                        <p class="centrado">Precio: $${data[i].price} USD</p>
                                                        <a href="./producto.html?id=${data[i].id}"><button class="vermás">Ver más</button></a>
                                                    </div>`
                }
        })
        
        .catch(function(error) {
            console.log("Error: " + error);
        })
