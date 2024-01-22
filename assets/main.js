async function getProducts(){
    const response = await fetch("https://dummyjson.com/products");
    const product = await response.json();

    const data =product.products;
    const result = data.map(function(products){
        return `
        <div class="pros">
        <h2>${products.title}</h2>
        <img src="${products.thumbnail}"/>
        <div class="info">
        <span>${products.price} $</span>
        <span>${products.stock}</span>
        <span>${products.rating}</span>
        </div>
        <h2>${products.brand}</h2>
        </div>
        `;
    }).join('');
    document.querySelector('.pro').innerHTML=result;
}
getProducts();