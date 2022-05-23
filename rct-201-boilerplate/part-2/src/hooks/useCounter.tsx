import { useState } from "react";

export const useCounter = (init: number) => {
    
    const [value, setValue] = useState(init);
    const inc =(param?: number) =>{
        if(param){
            setValue((prev)=>prev+param-1);
        }
        setValue((prev)=>prev+1);
    }
    const dec =(param?: number)=>{
        if(param){
            setValue((prev)=> prev - param+1);
        }
        setValue((prev)=>prev-1)
    }
    const set = (params: number)=>{
        setValue(params);
    }
    return {value,inc,dec,set}
};
