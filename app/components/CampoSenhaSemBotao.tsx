"use client";

import { useState } from "react";

export default function CampoSenha() {
    const [pwd, setPwd] = useState("");
    const [confirmPwd, setConfirmPwd] = useState("");

    const senhaIguar = pwd === confirmPwd && pwd !== "";
    
    
    return (
        <>
            <input
                type="password"
                value={pwd}
                onChange={(e) => setPwd(e.target.value)}
                placeholder="Digite sua senha"
            />
            <input
                type="password"
                value={confirmPwd}
                onChange={(e) => setConfirmPwd(e.target.value)}
                placeholder="Confirme sua senha"
            />
            <p style={{ color: senhaIguar ? "green" : "red" }}>
                {senhaIguar ? "Senha válida" : "Senha inválida"}
            </p>
        </>
    );
}