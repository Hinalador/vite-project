import React from 'react';
import { useState, useEffect } from 'react'

function Juego(e) {
    const [maquina, setMaquina] = useState("");
    const [human, setHuman] = useState("");
    const [resultado, setResultado] = useState("");
    
    useEffect(() => {
        calcularResultado(human);
    }, [maquina, human]);

    let opc = ['Piedra', 'Papel', 'Tijera'];

    function juegoMaquina() {
        let randomMaquina = Math.round(Math.random() * 2)
        setMaquina(opc[randomMaquina]);
    }

    function juegoHuman(e) {
        setHuman(e.target.innerText);
        juegoMaquina();
        calcularResultado(e.target.innerText);
    }

    function calcularResultado(opcionHuman) {
        if (opcionHuman === maquina) {
            setResultado("Empate!");
        } else if (
            (opcionHuman === 'Piedra' && maquina === 'Tijera') ||
            (opcionHuman === 'Papel' && maquina === 'Piedra') ||
            (opcionHuman === 'Tijera' && maquina === 'Papel')
        ) {
            setResultado("¡Ganaste!");
        } else {
            setResultado("Perdiste :(");
        }
    }

    return (
        <div className='App'>
            <div>
                <p>Máquina</p>
                <h1>{maquina}</h1>
            </div>
            <hr />
            <div>
                <p>Humano</p>
                <h1 style={{ color: 'orange' }}>{human}</h1>
            </div>
            <div>
                <button onClick={juegoHuman}>Piedra</button>
                <button onClick={juegoHuman}>Papel</button>
                <button onClick={juegoHuman}>Tijera</button>
            </div>
            <hr />
            <h1 style={{color: 'red'}}>{resultado}</h1>
        </div>
    )
}

export default Juego
