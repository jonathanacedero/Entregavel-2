"use client";

import { useState, useEffect } from "react";

export default function CampoSenha() {
    const [senha, setSenha] = useState("");
    const [confirmaSenha,setConfirmaSenha] = useState("");
    const [msg,setMsg] = useState("");

    useEffect(() => {
        if(senha === confirmaSenha && senha !== "" ){
            setMsg("Senha válida");
        }else if(senha !== "" || confirmaSenha !== ""){
            setMsg("Senhas são diferentes, digite novamente");
        } else if(senha=== ""&& confirmaSenha === ""){
            setMsg(" ");
        } else {
            setMsg("");
        }
    }, 
    [senha, confirmaSenha]
);
    
    return (
        <>
            <input
                type="password"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                placeholder="Digite sua senha"
            />
            <input
                type="password"
                value={confirmaSenha}
                onChange={(e) => setConfirmaSenha(e.target.value)}
                placeholder="Confirme sua senha"
            />
            <p style={{ color: msg === "Senha válida" ? "green" : "red" }}>
                {msg}
            </p>
        </>
    );
}