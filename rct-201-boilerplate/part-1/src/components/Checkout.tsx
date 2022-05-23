import axios from "axios"
import { setPriority } from "os"
import { useEffect, useState } from "react"


function Checkout() {
  const [data,setData]=useState<any>([])
  const get=()=> {
    axios.get("http://localhost:8080/CartData").then(({data})=>{
     setData(data)
     
     // console.log(l)
    })
   
  }
  useEffect(()=>{
    get()
    
  },[])
  let sum=0;
  data.map((e:any)=>{
    sum+=e.price
    
  })
  console.log(sum)
  // HINT: you can fetch multiple IDs from json-server like this:
  // localhost:8080/products?id=1&id=4&id=6
  // this will fetch products with id 1, 4 and 6.
 
  // If cart is empty, show following div:
  if (data.length==0) {
    return <div className="emptyCart">Nothing in cart</div>;
  }


// else:

  return (
    <div style={{ padding: 10 }}>
      <h4>Checkout:</h4>
      <div className="checkoutWrapper">
       
        
        {
          data.map((e:any)=>{
            return (
              <div className="checkoutItem">
          <span>Product Name:{e.product_name}</span>
          <span>{e.price}</span>  
        </div>
      
            )
          })
        }
      </div>
      <hr className="hr" />
      <div className="totalContainer">
        <span>Total:</span>
        <span className="total">
          {/* Show total here */}
          ${sum}
        </span>
      </div>
    </div>
  );
}

export { Checkout };
