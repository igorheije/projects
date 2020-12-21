import React from 'react';

import Main from '../../template/Main';
import './style.css';
import './Forca.css';

// import Boneco from './Boneco'
import Letras from './Letras';
import './jogo da forca';

export default (props) => {
  const [letras, setLetras] = React.useState([]);
  const [error, setError] = React.useState('');
  const [corretas, setCorretas] = React.useState([]);
  const [erros, setErros] = React.useState(0);

  const palavra = 'palavra';
  const regexLetras = /^[a-z]+$/i;

  function validarLetra(letra) {
    if (erros < 7) {
      if ([...palavra].includes(letra)) {
        setCorretas([...corretas, letra.toLocaleUpperCase()]);
      } else {
        setErros(erros + 1);
      }
    }
  }

  function jogar(e) {
    e.preventDefault();
    const input = e.target[0];
    if (erros === 7) return;

    if (regexLetras.test(input.value)) {
      if (letras.includes(input.value.toLocaleUpperCase())) {
        setError('Letra já inclusa');
      } else {
        validarLetra(input.value);
        setLetras([...letras, input.value.toLocaleUpperCase()]);
        input.value = '';
        input.focus();

        setError('');
      }
    } else {
      setError('Apenas Letras');
    }
  }

  React.useEffect(() => {
    if (erros === 7) setError('Você Perdeu');
    console.log(corretas);
  }, [erros]);

  return (
    <Main icon="paw" title="Jogo da Forca" subtitle="Sobre">
      <div className="palavra">
        {[...palavra.toLocaleUpperCase()].map((l, i) => {
          return <div key={i}> {corretas.includes(l) ? l : ''} </div>;
        })}
      </div>
      {/* <Boneco/> */}
      <p>
        Letras digitadas :
        {letras.map((letra) => {
          return <span key={letra}> {letra}, </span>;
        })}
      </p>
      <form onSubmit={jogar}>
        <input id="letra" type="text" maxLength="1" />
        <button>Jogar</button>
      </form>
      <br />
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </Main>
  );
};
