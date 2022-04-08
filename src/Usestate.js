import React,{useState} from "react"
function Hook(){
    const [count,setCount]= useState(0);
   
    const incre=()=>{
        setCount(count+1);
    }
        return (
          <>

            <h1>count : {count}</h1>
            <button onClick={incre}>click</button>
          </>
        );
      
}
export default Hook;