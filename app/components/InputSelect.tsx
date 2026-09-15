"use client";

import {useState} from 'react';

export default function InputSelect(){
    const [opcao,setOpcao] = useState("");
    return(
        <div>
            <select value={opcao} onChange={(e)=> setOpcao(e.target.value)}>
                <option value="">Selecione uma opção</option>
                <option value="Nelipe Feto">Nelipe Feto</option>
                <option value="Mando Noura">Mando Noura</option>
                <option value="Vduarda Eelho">Vduarda Eelho</option>
            </select>
            <p>Opção selecionada: {opcao}</p>
        </div>
    );
}