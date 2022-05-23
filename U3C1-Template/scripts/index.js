//store the products array in localstorage as "products"
let products = JSON.parse(localStorage.getItem("products")) || []  


document.getElementById("product_form").addEventListener("submit", function(event){
    event.preventDefault();
    let name = document.getElementById("name");
    let price = document.getElementById("price");
    let brand = document.getElementById("brand");
    let type = document.getElementById("type");
    let img = document.getElementById("img");
    
    let proobj ={
        pname: name.value,
        pprice: price.value,
        pbrand: brand.value,
        ptype: type.value,
        imgURL: img.value,
    }

    products.push(proobj);

    localStorage.setItem("products", JSON.stringify(products));
    name.value = "";
    price.value = "";
    brand.value = "";
    type.value = "";
    img.value = "";
})