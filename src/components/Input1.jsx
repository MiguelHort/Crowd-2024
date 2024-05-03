import React from 'react';
import '../style/components/Input1.scss';
import '../style/Global.scss';

function Input1({ label, interior }) {
    return (
        <div className="conteiner-input">
            <label htmlFor="inputField">{label}</label>
            <div className="campo-escrever">
              <input type="text" id="inputField" placeholder={interior} />  
            </div>
        </div>
    );
}

export default Input1;
