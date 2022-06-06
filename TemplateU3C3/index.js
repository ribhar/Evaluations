let purchases = JSON.parse(localStorage.getItem("purchases")) || [];


let wallet = JSON.parse(localStorage.getItem("wallet"));
let walleth3 = document.getElementById("wallet");
walleth3.innerText = wallet || 0;

let fetchdata = async ()=>{
    try{
        let res = await fetch(`https://masai-vouchers-api.herokuapp.com/api/vouchers`)
        let data = await res.json()
        console.log(data[0].vouchers)
        apndvouchers(data[0].vouchers)
    }
    catch(e){
        console.log(e)
    }
    
}
fetchdata()

let apndvouchers = (data)=>{
    let main = document.getElementById("main");
    
    data.forEach((el) => {
        let card = document.createElement("div");

        let img = document.createElement("img");
        img.src = el.image;
        
        let name = document.createElement("p");
        name.innerText = el.name;

        let price = document.createElement("p");
        price.innerText = el.price;
        
        let buy = document.createElement("button")
        buy.id = "buy" ; buy.innerHTML = "Buy";
        buy.onclick = () =>{
            if(wallet<el.price){
                alert("insufficient wallet amount")
            }
            else{
              funl(el)
                let obj = {
                    img : el.image,
                    name: el.name,
                    price: el.price
                }
                purchases.push(obj)
                localStorage.setItem("purchases", JSON.stringify(purchases))
            }
        }

        card.append(img, name,price,buy);
        main.append(card)
    });
    
}
let funl = (el)=>{
        let updatewallet = localStorage.setItem("wallet", JSON.stringify(wallet-el.price))
        let w = JSON.parse(localStorage.getItem("wallet"));
        document.getElementById("wallet").innerText = w;
}