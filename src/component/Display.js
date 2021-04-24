import React, { useState,useEffect } from 'react'
import "../App.css"

function Display() {

    const[minVal,setMinVal] = useState(0);
    const[maxVal,setMaxVal] = useState(100);
    const[randomNum, setRandomNum] = useState(Math.floor(Math.random()* (maxVal - minVal + 1) + minVal));
   
    const handleRandomNum = () => {
        setRandomNum(Math.floor(Math.random()* (maxVal - minVal + 1) + minVal));
    }   
    useEffect(() => {
        const interval = setInterval(() => {
          handleRandomNum();
        }, 2000);
        return () => clearInterval(interval);
      }, []);
   
    return (
        <div>
            <h2>Welcome Student</h2>
            <div className="Numcontainer">
             <h1 className="numberdisplay">{randomNum}</h1>
            </div>
            
        </div>
    )
  
}

export default Display
