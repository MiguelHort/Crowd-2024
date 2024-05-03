import React from 'react';

import Header from '../components/Header';
import InputPesquisa from '../components/InputPesquisa';
import Card from '../components/Card';

import '../style/pages/Home.scss';
import '../style/pages/responsiveHome.scss';

function Home() {
    return (
        <main>
            <Header></Header>
            <section className='section-input'>
                <InputPesquisa></InputPesquisa>
            </section>
            <section className='section-popular'>
                <div className='popular'>
                    <h2>De pessoas para pessoas, os lugares <span style={{color: '#FBBC05'}}>mais populares</span> da sua cidade.</h2>
                    <div className='cards'>
                    <Card
                    imgLugar={"../src/assets/Img/alexandria.jpg"}
                    textName={'Alexandria'}
                    ></Card>
                    <Card
                    imgLugar={"../src/assets/Img/gutbrau.jpg"}
                    textName={'Gut Brau'}
                    ></Card>
                    <Card
                    imgLugar={"../src/assets/Img/unalome.jpg"}
                    textName={'Unalome'}
                    ></Card>
                    <Card
                    imgLugar={"../src/assets/Img/levelcafe.jpg"}
                    textName={'Level Café'}
                    ></Card>
                    </div>
                </div>
            </section>
            <section className='section-banner'>
                <div className='banner'>
                    <div className='anuncio'>Anuncio</div>
                    <div>
                        
                    </div>
                </div>
            </section>
        </main>
    )
}



export default Home