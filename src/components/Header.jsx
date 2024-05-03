import React from 'react';

import Logo1 from '../assets/Icon/Logo1';
import Iconperson from '../assets/Icon/Iconperson';
import Iconmenu from '../assets/Icon/Iconmenu'
import Logo2 from '../assets/Icon/Logo2'

import '../style/components/Header.scss'

function Header() {
    return (
        <header>
            <div className='cabecalho'>

                <div className='logo1'>
                  <Logo1></Logo1>  
                </div>

                <div className='logo-menu'>
                    <Logo2></Logo2>
                    <div></div>
                    <a href=""><Iconmenu></Iconmenu></a>
                </div>

                <nav className='menu-notebook'>
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
