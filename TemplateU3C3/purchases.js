
let purchases = JSON.parse(localStorage.getItem("purchases"))
// console.log(purchases)
let apndvouchers = (data)=>{
    console.log(data)
    let purchasediv = document.getElementById("purchases");
    data.forEach((el) => {
        let card = document.createElement("div");

        let img = document.createElement("img");
        img.src = el.img;
        
        let name = document.createElement("p");
        name.innerText = el.name;

        let price = document.createElement("p");
        price.innerText = el.price;

        card.append(img, name,price);
        purchasediv.append(card)
    });
    
}
apndvouchers(purchases)
