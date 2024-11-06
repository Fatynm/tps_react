import { useState } from "react";

export default function App3() {
    const [count,setCount] = useState(0);
    
    function handleClick(){
        setCount(count+1);
    }
    function initClick(){
        setCount(0);
    }

    return(
        <>
    <MyButton counter={count} onClick={handleClick}/>
    <MyButton counter={count} onClick={handleClick}/>
    <button onClick={initClick}>Initialize the counter</button>
    </>
    );
}

function MyButton({counter,onClick}){
    // const [count,setCount] = useState(0);
    // function handleClick(){
    //     setCount(count+1);
    // }
    return(
        <button onClick={onClick}>
            Clicked{ counter} times
        </button>
    )
}