import React, { useEffect, useState } from "react";


import './style.css';


const Counter: React.FC = (props) => {

    let [counter, setCounter] = useState(0);
    // console.log(counter);

    useEffect(() => {
        console.log("Counter Mounted");

        return function(){
            console.log("Counter Unmounted", counter);
            
        }
        
    }, [counter] );

    useEffect(() => {
        console.log("Counter Updated", counter);
        
    }, [counter] );
    

    const handleIncrement = () => {
        setCounter(counter + 1);
    }

    const handleDecrement = () => {
        if(counter === 0) return;
        setCounter(counter - 1);
    }

    return (
        <div className="counter-container">
            <h1>{counter}</h1>
            <button onClick={handleIncrement} style={{background: "lightgreen"}}>Inc</button>
            <button onClick={handleDecrement} style={{background: "tomato"}}>Dec</button>
        </div>
    )
}

export default Counter;