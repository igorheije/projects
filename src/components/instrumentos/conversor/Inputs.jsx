import React from 'react'
import './Inputs.css'



export default props => {
    
    function valor(e){
        const input = e.currentTarget
        const valor = e.currentTarget.value
        console.log(valor)
    }
    return (
        <div className="estrutura">
        <p>Para converter informe um número em um dos campos abaixo.</p>
        <br></br>
        <label> Décimal </label>
        <input type="text" name="dec"  onKeyUp={valor} />
        <label> Binário </label>
        <input type="text" name="bin"  onKeyUp={valor} />
        <label> Octal </label>
        <input type="text" name="oct"  onKeyUp={valor} />
        <label> Hexadecimal </label>
        <input type="text" name="hex"  onKeyUp={valor} />
        </div>
    )
}