import React from 'react';

import Main from '../../template/Main';
import './JogoDaVelha.css';

const marcar = [
  { id: 'p1' },
  { id: 'p2' },
  { id: 'p3' },
  { id: 'p4' },
  { id: 'p5' },
  { id: 'p6' },
  { id: 'p7' },
  { id: 'p8' },
  { id: 'p9' },
];
const initial = {
  p1: '',
  p2: '',
  p3: '',
  p4: '',
  p5: '',
  p6: '',
  p7: '',
  p8: '',
  p9: '',
};

export default function JogoDaVelha() {
  const [valor, setValor] = React.useState(initial);
  const [jogador, setJogador] = React.useState(true);
  const [ganhador, setGanhador] = React.useState('');
  const [tipo, setTipo] = React.useState(1);

  function Cpu({ p1, p2, p3, p4, p5, p6, p7, p8, p9 }) {
    const c1 = p1 === p4 && p7 === '';
  }
  function validacao({ p1, p2, p3, p4, p5, p6, p7, p8, p9 }) {
    const v1 = p1 === p2 && p2 === p3;
    const v2 = p1 === p5 && p5 === p9;
    const v5 = p1 === p4 && p4 === p7;
    const v8 = p3 === p5 && p5 === p7;
    const v6 = p2 === p5 && p5 === p8;
    const v3 = p4 === p5 && p5 === p6;
    const v4 = p7 === p8 && p8 === p9;
    const v7 = p3 === p6 && p6 === p9;
    if (p1 !== '' && (v1 || v2 || v5)) {
      setGanhador(p1);
      return false;
    }
    if (p5 !== '' && (v8 || v6 || v3)) {
      setGanhador(p5);
      return false;
    }
    if (p9 !== '' && (v4 || v7)) {
      setGanhador(p9);
      return false;
    }
    return true;
  }
  React.useEffect(() => {
    validacao(valor);
  }, [valor, ganhador]);
  function jogar({ target }) {
    if (jogador && validacao(valor)) {
      if (target.innerText === '') {
        setValor({ ...valor, [target.id]: 'X' });
        target.innerText = valor[target.id];
        // target.innerText = 'X';
        setJogador(!jogador);
      }
    }
    if (!jogador && validacao(valor)) {
      if (target.innerText === '') {
        setValor({ ...valor, [target.id]: 'O' });
        target.innerText = valor[target.id];
        console.log(valor[target.id]);
        setJogador(!jogador);
      }
    }
  }

  function recomecar() {
    setValor(initial);
    setGanhador('');
  }
  function jogoCpu() {
    setJogador(true);
    setGanhador('');
    setValor(initial);
    setTipo(0);
  }
  function jogoPlayer() {
    setGanhador('');
    setValor(initial);
    setTipo(1);
  }

  return (
    <Main icon="paw" title="Jogo da Velha" subtitle="Sobre">
      <div id="main">
        <div id="dvmenu">
          <h4>Escolha o modo de jogo:</h4>
          <button className="btn " value={tipo} onClick={jogoPlayer}>
            Player X Player
          </button>
          <button className="btn" value={tipo} onClick={jogoCpu}>
            CPU X Player
          </button>
          <hr />
          <div id="dvQuemComeca">
            <h5 id="modoJogo">{tipo ? 'Player X Player' : 'CPU X Player'}</h5>
            <h5>Quem Joga:</h5>
            {tipo ? (
              <p>{jogador ? ' Player 1' : ' Player 2'}</p>
            ) : (
              <p>{jogador ? ' Player' : ' CPU'}</p>
            )}

            <h5>{ganhador !== '' ? `O '${ganhador}' Ganhou` : ''}</h5>
          </div>
          <br />
        </div>
        <div id="dvjogo">
          {marcar.map((mar) => (
            <div
              key={mar.id}
              id={mar.id}
              className="posJogo"
              onClick={jogar}
              value={valor[mar.id]}
            >
              {valor[mar.id]}
            </div>
          ))}
        </div>
        <button className="btn" onClick={recomecar} value={valor}>
          Reiniciar
        </button>
      </div>
    </Main>
  );
}
