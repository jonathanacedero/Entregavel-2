"use client";

import { useState} from 'react';

export default function Botao(){
    const [Sw,setSw] = useState(false);
    return(
        <div>
            <button  onClick={()=> setSw(!Sw) }style={{
                backgroundColor: Sw ? "red" : "green",
                color: "white",
                border: "none",
            }}>
                {Sw ? "Desligado": "Ligado"}
            </button>
        </div>

);
};