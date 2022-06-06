import axios, { AxiosResponse } from "axios";
import { stringify } from "querystring";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function CardDetails() {
  const [data,setData]=useState<any>({})
  const {id}=useParams()
  const get=()=> {
    axios.get(`http://localhost:8080/products/${id}`).then(({data:AxiosResponse})=>{
     
      setData(data)
    })
    
  }
  useEffect(()=> {
    get()
    console.log(data)
  },[])
  return (
    <div className="product">
      <span>
        <h4 className="detailsTitle"></h4>
      </span>
      <img className="detailsImage" src="https://www.bing.com/th?id=OIP.lYVzyTHvj2cME5ekzl8bYAHaFj&w=288&h=216&c=8&rs=1&qlt=90&o=6&dpr=1.25&pid=3.1&rm=2" alt="" />
      {/* Notice the "Price: $". do not edit it. */}
      <p className="productCategory">Category: {data.category}</p>
     
      <p className="productPrice">Price: ${data.price} </p>
    
      <p className="productRating">Ratings:{data.rating} </p>
      <p>Description : {data.desc}</p>
      <div>
        <h5>Reviews:</h5>
        
        
     
          <div className="review">
          <span className="reviewBy">{}</span>
          <span className="reviewDesc">This product is really good etc....</span>
        </div>
       
      </div>
    </div>
  );
}
export { CardDetails };
