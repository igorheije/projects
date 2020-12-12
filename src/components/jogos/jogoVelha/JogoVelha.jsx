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
  const [cpu, setCpu] = React.useState(false);
  const [tipojogo, setTipoJogo] = React.useState(1);
  const [quemjoga, setQuemjoga] = React.useState(false);

  React.useEffect(() => {
    validacao(valor);
    if (quemjoga) return Cpu(valor);
  }, [valor, quemjoga]);

  function Cpu({ p1, p2, p3, p4, p5, p6, p7, p8, p9 }) {
    const c7 =
      (p1 === p4 && p1 !== '' && p7 === '') ||
      (p8 === p9 && p8 !== '' && p7 === '') ||
      (p3 === p5 && p3 !== '' && p7 === ''); //p7

    const c8 =
      (p2 === p5 && p2 !== '' && p8 === '') ||
      (p7 === p9 && p7 !== '' && p8 === ''); //p8

    const c9 =
      (p3 === p6 && p3 !== '' && p9 === '') ||
      (p7 === p8 && p7 !== '' && p9 === '') ||
      (p1 === p5 && p1 !== '' && p9 === ''); //P9

    const c1 =
      (p2 === p3 && p2 !== '' && p1 === '') ||
      (p4 === p5 && p4 !== '' && p1 === '') ||
      (p9 === p5 && p9 !== '' && p1 === ''); //p1
    const c2 =
      (p1 === p3 && p1 !== '' && p2 === '') ||
      (p5 === p8 && p5 !== '' && p2 === ''); //p2

    const c3 =
      (p1 === p2 && p1 !== '' && p3 === '') ||
      (p6 === p9 && p6 !== '' && p3 === '') ||
      (p7 === p5 && p7 !== '' && p3 === ''); //P3

    const c4 =
      (p1 === p7 && p1 !== '' && p4 === '') ||
      (p5 === p6 && p5 !== '' && p4 === ''); //P4

    const c5 =
      (p1 === p9 && p1 !== '' && p5 === '') ||
      (p2 === p8 && p2 !== '' && p5 === '') ||
      (p4 === p6 && p4 !== '' && p5 === ''); //p5

    const c6 =
      (p3 === p9 && p3 !== '' && p6 === '') ||
      (p4 === p5 && p4 !== '' && p6 === ''); //P6

    if (quemjoga && cpu && validacao(valor)) {
      if (c1) {
        setValor({ ...valor, p1: 'O' });
      }
      if (c2) {
        setValor({ ...valor, p2: 'O' });
      }
      if (c3) {
        setValor({ ...valor, p3: 'O' });
      }
      if (c4) {
        setValor({ ...valor, p4: 'O' });
      }
      if (c5) {
        setValor({ ...valor, p5: 'O' });
      }
      if (c6) {
        setValor({ ...valor, p6: 'O' });
      }
      if (c7) {
        setValor({ ...valor, p7: 'O' });
      }
      if (c8) {
        setValor({ ...valor, p8: 'O' });
      }
      if (c9) {
        setValor({ ...valor, p9: 'O' });
      }
    }
    console.log('oi');
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

  function jogarCpu({ target }) {
    if (!quemjoga && cpu && validacao(valor)) {
      if (target.innerText === '') {
        setValor({ ...valor, [target.id]: 'X' });
        target.innerText = valor[target.id];
      }
    }

    setQuemjoga(!quemjoga);
  }

  function jogar({ target }) {
    if (!cpu) {
      if (jogador && validacao(valor)) {
        if (target.innerText === '') {
          setValor({ ...valor, [target.id]: 'X' });
          target.innerText = valor[target.id];
          setJogador(!jogador);
          console.log('1');
        }
      }
      if (!jogador && validacao(valor)) {
        if (target.innerText === '') {
          setValor({ ...valor, [target.id]: 'O' });
          target.innerText = valor[target.id];
          setJogador(!jogador);
          console.log('2');
        }
      }
    }
  }

  function recomecar() {
    setValor(initial);
    setGanhador('');
    setQuemjoga(false);
  }
  function jogoCpu() {
    setGanhador('');
    setValor(initial);

    setCpu(true);
    setTipoJogo(0);
    setQuemjoga(false);
  }
  function jogoPlayer() {
    setGanhador('');
    setValor(initial);

    setTipoJogo(1);
    setCpu(false);
  }

  return (
    <Main icon="paw" title="Jogo da Velha" subtitle="Sobre">
      <div id="main">
        <div id="dvmenu">
          <h4>Escolha o modo de jogo:</h4>
          <button className="btn " onClick={jogoPlayer}>
            Player X Player
          </button>
          <button className="btn" onClick={jogoCpu}>
            CPU X Player
          </button>
          <hr />
          <div id="dvQuemComeca">
            <h5 id="modoJogo">
              {tipojogo ? 'Player X Player' : 'CPU X Player'}
            </h5>
            <h5>Quem Joga:</h5>
            {tipojogo ? (
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
              onClick={cpu ? jogarCpu : jogar}
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
