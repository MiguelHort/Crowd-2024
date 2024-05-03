import React from 'react';
import '../style/components/Button2.scss';

import IconeAviao from '../assets/Icon/Icone-Aviao.svg';
import IconeSetaDireita from '../assets/Icon/Icone-Seta-Direita.svg';

function Button1({ texto1, texto2 }) {
    return (
        <a href="#" className="link-singup">
            <img src={IconeAviao} alt="Icone de Avião" />
            <div>
                <p>{texto1}</p>
                <p>{texto2}</p>
            </div>
            <img src={IconeSetaDireita} alt="Icone de Seta para a Direita" />
        </a>
    );
}

export default Button1;
