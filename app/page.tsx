"use client";
import { useState } from "react";


import BotaoSemUseState from "./components/BotaoSemUseState";
import Botao from "./components/BotaoOnOff";
import CampoNome from "./components/CampoNome";
import CampoSenha from "./components/CampoSenha";
import CampoSenhaUseEffect from "./components/CampoSenhaUseEffect";
import CampoSenhaSemBotao from "./components/CampoSenhaSemBotao";
import Inverter from "./components/Inverter";
import RadioButton from "./components/RadioButton";
import InputSelect from "./components/InputSelect";
import Implementacao from "./components/Implementacao";

export default function Home() {
  const [botaoOn, setBotaoOn] = useState(false);

  return (
   
    <main>
      <h1>1- Botão com useState na Função</h1>
      <Botao />
      <hr />

      <h1>2- Botão sem useState na Função</h1>
      <BotaoSemUseState legado={botaoOn} onClick={() => setBotaoOn(!botaoOn)} />
      <hr />

      <h1>3- Campo nome</h1>
      <CampoNome />
      <hr />

      <h1>4- Cãompo de senha</h1>
      <CampoSenha />
      <hr />

      <h1>5- Cãompo de senha com useEffect</h1>
      <CampoSenhaUseEffect />
      <hr />

      <h1>6- Campo senha sem botãoo</h1>
      <CampoSenhaSemBotao />
      <hr />

      <h1>7- Inverter Texto</h1>
      <Inverter />
      <hr />

      <h1>8- Radio Button</h1>
      <RadioButton />
      <hr />

      <h1>9- Input select</h1>
      <InputSelect />
      <hr />

      <h1>10- Implementacao</h1>
      <Implementacao />
      
    </main>
  );
}
