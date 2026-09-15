"use client";

import { useState } from "react";

export default function CampoSenha() {
  const [senha, setSenha] = useState("");
  const [confirmaSenha, setConfirmaSenha] = useState("");
  const [msg, setMsg] = useState("");

  function enviaSenha() {
    if (senha === confirmaSenha && senha !== "") {
      setMsg("Formulário enviado com sucesso");
    } else if (senha !== confirmaSenha) {
      setMsg("Senhas são diferentes, digite novamente");
    } else {
      setMsg("Senha inválida");
    }
  }
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
      <button onClick={enviaSenha}>Enviar</button>
      <p style={{ color: msg === "Senha válida" ? "green" : "red" }}>{msg}</p>
    </>
  );
}
