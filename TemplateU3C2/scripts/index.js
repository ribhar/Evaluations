

async function getdata(){
    try{
        let url = `https://masai-food-api.herokuapp.com/api/meals/india`;

        let data = await fetch(url);
        let res = await data.json();
    
        appendData(res[0].meals)
    }
    catch(e){
        console.log("error :", e)
    }
    
}
getdata()

let cart = JSON.parse(localStorage.getItem("cart")) || []
let count = 0;
function appendData(data){
    console.log(data)
    data.forEach(function(el) {
        
        let menu = document.getElementById("menu");

        let card = document.createElement("div")

        let img = document.createElement("img");
        img.src = el.strMealThumb;

        let name = document.createElement("p");
        name.innerHTML = el.strMeal;

        let price = document.createElement("p");
        price.innerHTML = el.price;
        card.append(img,name,price)
        let addtocart = document.createElement("button");
        addtocart.id = "addtocart";
        addtocart.innerHTML = "Add to Cart"
        addtocart.onclick = function(card){
            count++;
            document.getElementById("count").innerHTML = count
            let obj = {
                name: el.strMeal,
                price: el.price,
                img: el.strMealThumb
            }
            cart.push(obj);

            localStorage.setItem("cart", JSON.stringify(cart));
        }

        card.append(addtocart)
        menu.append(card)
        
    });
    
}
// appendData(data)