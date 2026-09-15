"use client";
import { useState } from "react";

import BotaoSemUseState from "./components/BotaoSemUseState";
import Botao from "./components/ButtonSwitch";
import CampoNome from "./components/CampoNome";
import CampoSenha from "./components/CampoSenha";
import CampoSenhaUseEffect from "./components/CampoSenhaUseEffect";
import CampoSenhaSemNadaSemVirusAtualizado2026 from "./components/SenhaValidaSemNadaSemVirusAtualizado2026";
import Inverter from "./components/Inverter";
import RadioButton from "./components/RadioButton";
import InputSelect from "./components/InputSelect";
import Geefie from "./components/Geefie";

export default function Home() {
  const [botaoOn, setBotaoOn] = useState(false);

  return (
    <main>
      <h1>Botão com useState na Função</h1>
      <Botao />
      <hr />
      <h1>Botão sem useState na Função</h1>
      <BotaoSemUseState legado={botaoOn} onClick={() => setBotaoOn(!botaoOn)} />
      <hr />
      <h1>Campo nome</h1>
      <CampoNome />
      <hr />
      <h1>Cãompo de senha</h1>
      <CampoSenha />
      <hr />
      <h1>Cãopeta de senha com useEffect</h1>
      <CampoSenhaUseEffect />
      <hr />
      <h1>sex(seis em ingles)</h1>
      <CampoSenhaSemNadaSemVirusAtualizado2026 />
      <hr />
      <h1>Inverter Texto</h1>
      <Inverter />
      <hr />
      <h1>Radio Button</h1>
      <RadioButton />
      <hr />
      <h1>Input select</h1>
      <InputSelect />
      <hr />
      <h1>implementacao</h1>
      <Geefie />
    </main>
  );
}
