import {  useState } from "react"

export const useList = (arr: any) => {
    
    const [list,setList]= useState(arr)
    const push=(param: number)=>{
        setList([...list,param])
    };
    const pop=()=>{
      list.pop()
      setList([...list])
    }

    const clear=()=>{
        setList([]);
    }
    const reset =()=>{
        setList(arr);
    }
    const map=()=>{
        setList(list.map((el:number)=> {
            return 2*el;
        }) )

    }
    return [list,{push,pop,clear,reset,map}]
};
