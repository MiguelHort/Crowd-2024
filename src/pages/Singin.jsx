import React from 'react';

import Input1 from '../components/Input1';
import Button1 from '../components/Button1';
import Button2 from '../components/Button2';

import '../style/pages/Singin.scss';

import ImagemLogin from '../assets/Img/ImagemLogin.png';
import Logo1 from '../assets/Icon/Logo1';


function Singin () {
    return (
        <main>
            <div className='lado-esquerdo'>
                <img src={ImagemLogin} alt="Logo" />
            </div>
            <div className='lado-direito'>
                <Logo1></Logo1>
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



export default Singin