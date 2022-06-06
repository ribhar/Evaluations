import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";


function Card(d:any){
   
   const [f,setF]=useState(false)
  function AddCart(){
   axios.post("http://localhost:8080/CartData",d)
setF(true)
  }
  return (
    <div className="item">
      <img src="https://www.bing.com/th?id=OIP.lYVzyTHvj2cME5ekzl8bYAHaFj&w=288&h=216&c=8&rs=1&qlt=90&o=6&dpr=1.25&pid=3.1&rm=2" className="productImage" />
      <p>
        <Link className="productLink" to={`/${d.id}`}>
        
          Name:{d.product_name}
        </Link>
      </p>
      <p className="productCategory">Category: {d.category}</p>
     
      <p className="productPrice">Price: ${d.price} </p>
    
      <p className="productRating">Ratings:{d.rating} </p>
    {
      f ?  (<div className="itemInCart">Item Already in cart</div>):
       
     ( <button className="productAddtoCart" onClick={AddCart}>
        Add to cart
      </button>)
     
    }
    </div>
  );
      }
export { Card };

