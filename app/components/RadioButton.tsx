"use client"

import { useState } from "react";

export default function RadioButton() {
    const [escolhido, setEscolhido] = useState("");

    return (
        <>
        <label>
            <input type="radio"
            name="opcao"
            value="92.9 FM A rádio do coração"
            checked={escolhido === "92.9 FM A rádio do coração"}
            onChange={(e) => setEscolhido(e.target.value)}
             />
            92.9 FM A rádio do coração
        </label>
        <br />
        <label>
            <input type="radio"
            name="opcao"
            value="104.1 FM A estação do seu rádio!"
            checked={escolhido === "104.1 FM A estação do seu rádio!"}
            onChange={(e) => setEscolhido(e.target.value)}
             />
            104.1 FM A estação do seu rádio!
        </label>
        <br />
        <label>
            <input type="radio"
            name="opcao"
            value="89.3 FM A número 1 em música!"
            checked={escolhido === "89.3 FM A número 1 em música!"}
            onChange={(e) => setEscolhido(e.target.value)}
             />
            89.3 FM A número 1 em música!
        </label>
        </>
    )}