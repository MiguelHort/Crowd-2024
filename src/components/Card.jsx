import React from 'react';

import Icontrofeu from '../assets/Icon/Icontrofeu';

import '../style/components/Card.scss';

function Card({ textName, imgLugar }) {
    return (
        <a className='card-popular' href="">
            <div className='icon-trofeu'>
                <Icontrofeu></Icontrofeu>
            </div>
            <img src={imgLugar} alt="Imagem do local mais popular para sair" />
            <div className='name-local'>
                <p>{textName}</p>
            </div>
        </a>
    );
}

export default Card;