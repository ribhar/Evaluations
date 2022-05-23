import axios from "axios";
import { useEffect, useState } from "react";
import { Card } from "./Card";

function Body() {
  const [data,setData]=useState([])
  const get=()=> {
    axios.get("http://localhost:8080/products").then(({data})=>{
      console.log(data)
      setData(data)
    })
    
  }
  useEffect(()=> {
    get()
  },[])
  return (
    <div className="container">
      {/* Iterate over data and show `Card` here */}
     {
        data.map((e,i)=>{
          return(
            <Card  key={i} {...e}/>
          )
        })
     }
    </div>
  );
}

export { Body };
