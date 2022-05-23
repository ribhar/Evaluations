

let data = JSON.parse(localStorage.getItem("cart"));


let cartcon = document.getElementById("cart");
appendi(data)

// let totalh2 = document.getElementById("total-price");
// let total = 0; totalh2.innerHTML = total;


function appendi(data){
    cartcon.innerHTML = "";
    data.forEach(function(el, ind) {
        if( el ==null){
            console.log("removed elements")
        }
        else{
            // let totalh2 = document.getElementById("total-price");
        // total += el.price; totalh2.innerHTML = total;
            // let cart = document.getElementById("cart");
        
            let card = document.createElement("div")
        
            let img = document.createElement("img");
            img.src = el.img;
        
            let name = document.createElement("p");
            name.innerHTML = el.name;
        
            let price = document.createElement("p");
            price.innerHTML = el.price;
            card.append(img,name,price)
            let remove = document.createElement("button");
            remove.id = "remove";
            remove.innerHTML = "remove"
            remove.addEventListener("click",function(){
                // total -= el.price; totalh2.innerHTML = total;
                removei(el,ind)
            }) 
        
            card.append(remove)
            cartcon.append(card)
        }
        
    });
}

function removei(el,ind){
    // console.log(cart)
    delete (data[ind]);
    localStorage.setItem("cart",JSON.stringify(data))
    appendi(data)
    totala(data)


}
function totala(data){
    let totalA = data.reduce(function(acc,el){
        if(el == null){
            return acc + 0;
        }else{
            return acc + el.price;
        }    
    },0);

    document.getElementById("total-price").innerHTML = "";
    document.getElementById("total-price").innerHTML = totalA;
}
totala(data)


function checkout(){
    window.location.href= "checkout.html"
}