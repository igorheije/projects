import './Header.css';
import React from 'react';
import Icons from './Icons'

export default props => {

    return(

    <header className="header d-none d-sm-flex flex-column">
        <h1 className="mt-3">
            <Icons {...props}></Icons> {props.title}
        </h1>
    <p className="lead text-muted">{props.subtitle}</p>
    </header>
    )
}