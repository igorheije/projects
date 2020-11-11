import React from 'react';
import { Switch, Route, Redirect } from 'react-router'

import Home from '../components/home/Home'
import Projetos from '../components/project/Projects'
import Conversor from '../components/instrumentos/conversor/Conversor'
import Calculadora from '../components/instrumentos/calculadora/Calculadora'
import Instrumentos from '../components/instrumentos/Instrumentos'
export default props => 
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/projetos" component={Projetos} />
        <Route path="/conversor" component={Conversor}/>
        <Route path="/instrumentos" component={Instrumentos}/>
        <Route path="/calculadora" component={Calculadora}/>
        <Redirect from="*" to="/" />
    </Switch>