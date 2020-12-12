import React from 'react';

import './Conversor.css';

import Inputs from './Inputs';
import Main from '../../template/Main';

export default (props) => {
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
