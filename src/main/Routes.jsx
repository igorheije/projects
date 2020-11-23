import React from 'react';
import { Switch, Route, Redirect } from 'react-router';

import Home from '../components/home/Home';
import Projetos from '../components/project/Projects';
import Conversor from '../components/instrumentos/conversor/Conversor';
import Calculadora from '../components/instrumentos/calculadora/Calculadora';
import Instrumentos from '../components/instrumentos/Instrumentos';
import Jogos from '../components/jogos/Jogos';
import JogoVelha from '../components/jogos/jogoVelha/JogoVelha';
import Forca from '../components/jogos/JogoForca/Forca';
export default (props) => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/projetos" component={Projetos} />
    <Route path="/conversor" component={Conversor} />
    <Route path="/instrumentos" component={Instrumentos} />
    <Route path="/calculadora" component={Calculadora} />
    <Route path="/jogos" component={Jogos} />
    <Route path="/jogoVelha" component={JogoVelha} />
    <Route path="/forca" component={Forca} />
    <Redirect from="*" to="/" />
  </Switch>
);
