
function checkout(){
    alert("Your order is accepted")
    setTimeout(() => {
        alert("Your order is being cooked")
    }, 3000);
    setTimeout(() => {
        alert("Your order is ready")
    }, 8000);
    setTimeout(() => {
        alert("Order out for delivery")
    }, 10000);
    setTimeout(() => {
        alert("Order delivered")
    }, 12000);
}
