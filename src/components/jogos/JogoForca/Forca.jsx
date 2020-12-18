import React from 'react';

import Main from '../../template/Main';
import './style.css';

// import Boneco from './Boneco'
import Letras from './Letras';
import './jogo da forca';

export default (props) => {
  const [letras, setLetras] = React.useState(['a', 'b']);

  function validarLetra() {
    const palavra = 'palavra';

    console.log(palavra);
  }

  function jogar(e) {
    e.preventDefault();
    if (!letras.includes(e.target[0].value)) {
      setLetras([...letras, e.target[0].value]);
      e.target[0].value = '';
      e.target[0].focus();
      validarLetra();
    }
  }
  React.useEffect(() => {
    console.log(letras);
  }, [letras]);

  return (
    <Main icon="paw" title="Jogo da Forca" subtitle="Sobre">
      <Letras />
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
    </Main>
  );
};
