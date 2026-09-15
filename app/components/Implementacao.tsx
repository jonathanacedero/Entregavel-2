"use client";

import { useState } from "react";

export default function Home() {
  const [aba, setAba] = useState(1);

  return (
    <main>
      <div className="tabs">
        <div className="botoes">
          <button onClick={() => setAba(1)}>Tab #1</button>
          <button onClick={() => setAba(2)}>Tab #2</button>
          <button onClick={() => setAba(3)}>Tab #3</button>
        </div>

        <div className="conteudo">
          {aba === 1 && (
            <>
              <h2>Tab content #1</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s.
              </p>
            </>
          )}

          {aba === 2 && (
            <>
              <h2>Tab content #2</h2>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus nostrum veniam quis tenetur quam soluta culpa optio hic beatae totam. Fugiat, perferendis! Consequuntur adipisci in facilis quaerat ab, vel dolor.
              </p>
            </>
          )}

          {aba === 3 && (
            <>
              <h2>Tab content #3</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
              </p>
            </>
          )}
        </div>
      </div>
    </main>
  );
}