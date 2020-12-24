import React from 'react';

import Main from '../../template/Main';

import './Forca.css';

const Forca = () => {
  const [letras, setLetras] = React.useState([]);
  const [error, setError] = React.useState('');
  const [corretas, setCorretas] = React.useState([]);
  const [erros, setErros] = React.useState(7);

  const palavra = 'palavra';
  const regexLetras = /^[a-z]+$/i;

  function validarLetra(letra) {
    if (erros > 0) {
      if ([...palavra].includes(letra)) {
        setCorretas([...corretas, letra.toLocaleUpperCase()]);
      } else {
        setErros(erros - 1);
      }
    }
  }
  function reiniciar() {
    const input = document.getElementById('letra');
    setErros(7);
    setLetras([]);
    setError('');
    setCorretas([]);
    input.value = '';
  }

  function jogar(e) {
    e.preventDefault();
    const input = e.target[0];
    if (erros === 0) return;

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
    if (erros === 0) setError('Você Perdeu');
  }, [erros]);

  return (
    <Main icon="paw" title="Jogo da Forca" subtitle="Sobre">
      <div className="palavra">
        {[...palavra.toLocaleUpperCase()].map((l, i) => {
          return <div key={i}> {corretas.includes(l) ? l : ''} </div>;
        })}
      </div>

      <p>
        Letras digitadas :
        {letras.map((letra) => {
          return <span key={letra}> {letra}, </span>;
        })}
      </p>
      <form onSubmit={jogar}>
        <input id="letra" type="text" maxLength="1" />
        <button className="butt">Jogar</button>
      </form>
      <br />
      {`Chances: ${erros}`}
      <br />
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <button className="butt" onClick={reiniciar}>
        Reiniciar
      </button>
    </Main>
  );
};

export default Forca;
