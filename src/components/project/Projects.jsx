import React from 'react';

import Main from '../template/Main';

export default (props) => (
  <Main icon="paw" title="Meus Projetos" subtitle="Sobre">
    <p>
      Após conhcer um pouco sobre o Javascript, comecei a me aprovundar bastante
      em um de seus frameworks, o React.js.
    </p>
    <p>Venho apresentar alguns pequenos projetos que eu ja criei.</p>
    <ul>
      <h5>1 - Instrumentos Matemáticos:</h5>
      <li>Conversor de Bases</li>
      <li>Calculadora Básica</li>
      <br />
      <h5>2 - Mini Jogos:</h5>
      <li>Jogo da Velha</li>
      <li>Forca</li>
    </ul>
  </Main>
);
