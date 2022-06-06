let addtoWallet = ()=>{
let wallet = JSON.parse(localStorage.getItem("wallet"));
// console.log(wallet)

    let inp  = document.getElementById("amount").value;
    inp = +inp
    let amount = inp +wallet;

    localStorage.setItem("wallet", JSON.stringify(amount))
}

// export default addtoWallet;

