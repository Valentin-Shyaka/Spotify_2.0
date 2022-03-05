import React,{useState} from 'react'


function dump(){
    
    const[count,setCount]= useState(0);
     
    const increment= () =>{
        //count+=1;
        setCount(count+1)
    }
    const decrement= () =>{
        //count-=1;
        setCount(count-1)
    }
    return(
        <div>
            <h1>Welcome to counter app {count}</h1>
            <button onClick={decrement}>-</button>
            <button onClick={increment}>+</button>
        </div>
    )
}