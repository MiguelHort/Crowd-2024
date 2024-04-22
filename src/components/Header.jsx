import React from 'react';

import Logo1 from '../assets/Icon/Logo1';
import Iconperson from '../assets/Icon/Iconperson';

import '../style/Header.scss'

function Header() {
    return (
        <header>
            <div className='cabecalho'>
                <Logo1></Logo1>
                <nav>
                    <a href="">Mais Populares</a>
                    <a href="">Curtidos</a>
                    <a href="">Melhores Avaliados</a>
                    <a href="">Categorias</a>
                    <a href="">Sobre Nós</a>
                </nav>
                <div className='login'>
                    <div>
                        <Iconperson></Iconperson>
                        <a href="">ENTRAR</a>
                    </div>
                    <button>CRIAR CONTA</button>
                </div>
            </div>
        </header>
    )
}

export default Header;
