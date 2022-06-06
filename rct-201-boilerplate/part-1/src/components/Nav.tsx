import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../App.css"

function Nav() {
  const [data,setData]=useState<any>([])
  const [l,setL]=useState<number>()
 const get=()=> {
   axios.get("http://localhost:8080/CartData").then(({data})=>{
    setData(data)
    setL(data.length)
    // console.log(l)
   })
  
 }
 useEffect(()=>{
   get()
   
 },[])
  return (
    <div className="nav" style={{display:"flex"}}>
      <span>
        <h3>
          <Link to={"/"}>Shopper</Link>
        </h3>
      </span>
      {/* Show follwing div only if we are not on /checkout page */}
      <div className="navCartStatus">
        Cart:{l}
        <span className="navCartCount">{/* total items in cart here */}</span>
       <Link to="/checkout"> <button className="navCartCheckout">Checkout</button></Link>
        {/* on this button click user goes to checkout page */}
      </div>
    </div>
  );
}

export { Nav };
