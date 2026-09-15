import { useState } from "react";

export default function CampoNome() {
  const [nome, setNome] = useState("");
  const [deuCerto, setDeuCerto] = useState("");

  function enviaBotao() {
    if (nome.length >= 2 && nome.length <= 20) {
      setDeuCerto("Nome válido");
    } else if (nome.length > 20) {
      setDeuCerto(
        "Nome inválido, muito grande, precisa ter no máximo 20 caracteres",
      );
    } else {
      setDeuCerto(
        "Nome inválido, muito pequeno, precisa ter no mínimo 2 caracteres",
      );
    }
  }

  return (
    <>
      <input
        type="text"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        placeholder="Digite seu nome"
      />
      <button onClick={enviaBotao}>Enviar</button>
      <p style={{ color: deuCerto.length >= 2 && deuCerto.length <= 20 ? "green" : "red" }}>
        {deuCerto}
      </p>
    </>
  );

}