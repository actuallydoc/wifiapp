import React, {useEffect} from 'react'
import {useState} from "react";
import axios from "axios";

export default function Home() {
    const [ledStatus, setLedStatus] = useState("");
    const [event , setEvent] = useState(false);
    
    const handleTurnOFF = async() => {
        await axios.get('http://192.168.1.8/disable', {

        }).then(r => {
                console.log(r.data)
                setEvent(!event)
        }
        )
    }
    const handleTurnON = async() => {
        await axios.get('http://192.168.1.8/enable', {

        }).then(r =>{
            console.log(r.data)
            setEvent(!event)
            }

        )

    }

  return (
    <div>
      <div>
        <h1>Turn the LED on</h1>
        <button onClick={handleTurnON}>Turn on</button>
      </div>
        <div>
            <h1>Turn the LED off</h1>
            <button onClick={handleTurnOFF}>Turn off</button>
        </div>
      <div>
        <h1>LED STATUS</h1>
        <p>{ledStatus}</p>
      </div>

    </div>
  )
}
function setEvent(arg0: boolean): any {
    throw new Error('Function not implemented.');
}

