document.addEventListener("DOMContentLoaded", function() {
    let params = new URLSearchParams(window.location.search);
    let category = params.get("category");


    function cargarProductos(category) {
        let apiUrl = `https://fakestoreapi.com/products/category/${category}`;

        fetch(apiUrl)
            .then(function(response) {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(function(data) {
                
                let productListContainer = document.querySelector('.product-list');

                
                productListContainer.innerHTML = '';

               
                data.forEach(function(product) {
                    let truncatedDescription = product.description.length > 100 ?
                        product.description.substring(0, 100) + '...' :
                        product.description;

                    let productHTML = `
                        <div class="product">
                            <h3 class="centrado">${product.title}</h3>
                            <img src="${product.image}" alt="${product.title}">
                            <p class="centrado">${truncatedDescription}</p>
                            <p class="centrado">$${product.price.toFixed(2)} USD</p>
                            <a href="cart.html"><button class="canasta"><i class="fa-solid fa-basket-shopping"></i></button></a>
                            <a href="./producto.html"><button class="vermás">Ver más</button></a>
                        </div>
                    `;

                    productListContainer.innerHTML += productHTML;
                });
            })
            .catch(function(error) {
                console.error('Error fetching data:', error);
            });
    }


    cargarProductos(category);
});

  