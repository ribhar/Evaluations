let products = JSON.parse(localStorage.getItem("products")) || []  

products.map(function(el){

    let row = document.createElement("tr");
    
    let name = document.createElement("td");
    name.innerHTML = el.pname;

    let price = document.createElement("td");
    price.innerHTML = el.pprice;

    let brand = document.createElement("td");
    brand.innerHTML = el.pbrand;

    let type = document.createElement("td");
    type.innerHTML = el.ptype;

    let imgd = document.createElement("td");
    let img = document.createElement("img");
    img.setAttribute("src", el.imgURL);
    imgd.append(img)

    row.append(name,price,brand,type,imgd);
    document.getElementById("products_data").append(row)
})

document.getElementById("product_form").addEventListener("submit", function(){
    // event.preventDefault();
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


