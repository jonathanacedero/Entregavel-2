"use client";

interface BotaoProps {
    onClick: () => void;
    legado : boolean;
}

export default function BotaoSemUseState({ onClick, legado }: BotaoProps) {
    return (
        <div>
            <button onClick={onClick} style={{
                backgroundColor: legado ? "red" : "green",
                color: "white",
                border: "none",
            }}>
                {legado ? "Desligado" : "Ligado"}
            </button>
        </div>
    );
}