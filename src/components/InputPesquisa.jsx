import React from 'react';

import IconLupa from '../assets/Icon/IconLupa';

import '../style/InputPesquisa.scss'

function InputPesquisa() {
    return (
        <div className='input-pesquisa'>
            <IconLupa></IconLupa>
            <input type="text" placeholder='Vamos aonde?' />
        </div>
    )
}

export default InputPesquisa;
