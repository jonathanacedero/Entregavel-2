"use client";

import {useState} from 'react';

export default function Inverter(){
    const [texto,setTexto] = useState("");
    function inverterTexto(){
        setTexto(texto.split("").reverse().join(""));
    }
    return(
        <div>
            <input type="text"
            value={texto} 
            onChange={(e)=> setTexto(e.target.value)}/>
            <button 
            onClick={inverterTexto}>
                Inverter
            </button>
        </div>
    );
}