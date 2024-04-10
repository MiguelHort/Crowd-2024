import React from 'react';

import Input1 from './componentes/Input1';
import Button1 from './componentes/Button1';
import Button2 from './componentes/Button2';

import './style/Home.scss'

import ImagemLogin from './assets/Img/ImagemLogin.png';
import ImagemLogo1 from './assets/Icon/Logo-1.png';


function Home () {
    return (
        <main>
            <div className='lado-esquerdo'>
                <img src={ImagemLogin} alt="Logo" />
            </div>
            <div className='lado-direito'>
                <img src={ImagemLogo1} alt="Logo" />
                <h2>Acesse sua conta</h2>
                <form action="">
                    <Input1 
                    label={'E-mail'}
                    interior={'Seu e-mail'}
                    ></Input1>
                    <div className="input-senha">
                    <Input1 
                    label={'Senha'}
                    interior={'Sua senha'}
                    ></Input1>
                    <a href="">Esqueci minha senha</a>
                    </div>
                    <Button1
                    escrita={'Entrar'}
                    ></Button1>
                </form>
                <Button2
                texto1={'Não tem conta?'}
                texto2={'Se inscreva gratuitamente'}
                ></Button2>
            </div>
        </main>
    )
}



export default Home