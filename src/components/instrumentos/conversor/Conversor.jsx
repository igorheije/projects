import React from 'react';

import './Conversor.css';

import Inputs from './Inputs';
import Main from '../../template/Main';

const Conversor = () => {
  return (
    <div className="conversor">
      <Main
        icon="paw"
        title="Conversor de Bases"
        subtitle=" Decimal, Binária, Octal e Hexadecimal"
      >
        <Inputs />
      </Main>
    </div>
  );
};
export default Conversor;
