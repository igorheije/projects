import './Nav.css';
import React from 'react'
import Icons from './Icons'
import { Link } from 'react-router-dom'

import {Accordion, Card, Button} from 'react-bootstrap'

export default props => {

    return(

    <aside className="menu-area">
        <nav className="menu">
            <Link to="/">
                <Icons icon="home"></Icons> Inicío
            </Link>
            <Link to="/projetos">
                <Icons icon="folder"></Icons> Projetos
            </Link>
           <hr/>
            <Accordion defaultActiveKey="1">
            <Card>
            <Card.Header>
            <Accordion.Toggle  variant={props.variant} eventKey="0">
                
                <Link to="/instrumentos">
                Instrumentos Matemáticos
               </Link>
            
            </Accordion.Toggle>
            </Card.Header>

            <Accordion.Collapse eventKey="0">
            <Accordion.Toggle  variant="link" eventKey="1">

                <Link to="/conversor">
                Conversor de Bases
                </Link>

            </Accordion.Toggle>
            </Accordion.Collapse>

            <Accordion.Collapse eventKey="0">
            <Accordion.Toggle  variant="link" eventKey="1">
            
                <Link to="/calculadora">
                <Icons icon="calculator"></Icons> Calculadora Básica
                </Link>
               
            </Accordion.Toggle>
            </Accordion.Collapse>
            </Card>
            </Accordion>  
            <Accordion defaultActiveKey="1">
            <Card>
            <Card.Header>
            <Accordion.Toggle  variant={props.variant} eventKey="0">
                
                <Link to="/">
                <Icons icon="gamepad"></Icons> Jogos
               </Link>
            
            </Accordion.Toggle>
            </Card.Header>

            <Accordion.Collapse eventKey="0">
            <Accordion.Toggle  variant="link" eventKey="1">

                <Link to="/">
                Jogo da Velha
                </Link>

            </Accordion.Toggle>
            </Accordion.Collapse>

            <Accordion.Collapse eventKey="0">
            <Accordion.Toggle  variant="link" eventKey="1">
            
                <Link to="/">
                Jogo da Forca
                </Link>
               
            </Accordion.Toggle>
            </Accordion.Collapse>
            </Card>
            </Accordion>   

            
                        
                
            
        </nav>
    </aside>
    )
}