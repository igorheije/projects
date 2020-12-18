import React from 'react';
import './Inputs.css';
import {
  BinToDec,
  BinToHex,
  BinToOct,
  OctToDec,
  OctToBin,
  OctToHex,
  HexToDec,
  HexToBin,
  HexToOct,
} from './functions.js';
const inicial = {
  dec: '',
  bin: '',
  oct: '',
  hex: '',
};

export default function Inputs() {
  const [valor, setValor] = React.useState(inicial);

  function handleChange(event) {
    const { name, value } = event.target;

    const regexD = /[ 0-9]+$/;
    const regexB = /[0-1]+$/;
    const regexO = /[0-7]+$/;
    const regexH = /[0-9a-f]+$/;

    if (name === 'dec') {
      if (regexD.test(value)) {
        console.log('limpar tudo');
        let numero = Number(value);
        let bin = numero.toString(2);
        let oct = numero.toString(8);
        let hex = numero.toString(16);
        setValor({ ...valor, dec: value, bin: bin, oct: oct, hex: hex });
      }
    }
    if (name === 'bin') {
      if (regexB.test(value)) {
        let dec = BinToDec(value);
        let oct = BinToOct(value);
        let hex = BinToHex(value);
        setValor({ ...valor, dec: dec, bin: value, oct: oct, hex: hex });
      }
    }
    if (name === 'oct') {
      if (regexO.test(value)) {
        let dec = OctToDec(value);
        let bin = OctToBin(value);
        let hex = OctToHex(value);
        setValor({ ...valor, bin: bin, dec: dec, oct: value, hex: hex });
      }
    }
    if (name === 'hex') {
      if (regexH.test(value)) {
        let dec = HexToDec(value);
        let bin = HexToBin(value);
        let oct = HexToOct(value);
        setValor({ ...valor, bin: bin, oct: oct, dec: dec, hex: value });
      }
    }
  }

  return (
    <div className="estrutura">
      <p>Para converter informe um número em um dos campos abaixo.</p>
      <br></br>
      <label htmlFor="dec"> Décimal </label>
      <input
        id="dec"
        type="text"
        name="dec"
        value={valor.dec}
        onChange={handleChange}
      />
      <label htmlFor="bin"> Binário </label>
      <input
        id="bin"
        type="text"
        name="bin"
        value={valor.bin}
        onChange={handleChange}
      />
      <label htmlFor="oct"> Octal </label>
      <input
        id="oct"
        type="text"
        name="oct"
        value={valor.oct}
        onChange={handleChange}
      />
      <label htmlFor="hex"> Hexadecimal </label>
      <input
        id="hex"
        type="text"
        name="hex"
        value={valor.hex}
        onChange={handleChange}
      />
    </div>
  );
}
