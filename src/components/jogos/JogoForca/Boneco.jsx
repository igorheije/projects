import React from "react";

import {jogar} from './jogo da forca'

export default (props) => (
    <div id="dvjogador" className="dvjogador">
        <div id="contJ">
          <input type="text" id="letraj" className="letraj" maxLength="1" />
          <button onClick={jogar}>Jogar</button>
          <div id="msg"></div>
          <div id="letradigitada">Letras Digitadas:</div>
        </div>
        
        <div id="forca">
            <img id="cabeca" src="./Imagens/cabeca1.png" alt="cabeça" />
            <img id="corpo" src="./Imagens/corpo.png" alt="corpo" />
            <img id="bracoD" src="./Imagens/bracoD.png" alt="braço direito" />
            <img id="bracoE" src="./Imagens/bracoE.png" alt="braço esquerdo" />
            <img id="pernaD" src="./Imagens/pernaD.png" alt="perna direita" />
            <img id="pernaE" src="./Imagens/pernaE.png" alt="perna esquerda" />
        </div>
    </div>
);
