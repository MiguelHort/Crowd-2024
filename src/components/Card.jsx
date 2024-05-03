import React from 'react';
import '../style/components/Card.scss';

function Card({ textName, imgLugar }) {
    return (
        <a className='card-popular' href="">
            <img src={imgLugar} alt="Imagem do local mais popular para sair" />
            <div>
                <p>{textName}</p>
            </div>
        </a>
    );
}

export default Card;