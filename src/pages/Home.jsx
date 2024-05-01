import React from 'react';

import Header from '../components/Header';
import InputPesquisa from '../components/InputPesquisa';
import Card from '../components/Card';

import '../style/Home.scss';

function Home() {
    return (
        <main>
            <Header></Header>
            <section className='section-input'>
                <InputPesquisa></InputPesquisa>
            </section>
            <section className='section-popular'>
                <div className='popular'>
                    <h2>De pessoas para pessoas, os lugares mais populares da sua cidade.</h2>
                    <div className='cards'>
                        <Card

                    ></Card>
                    <Card

                    ></Card>
                    <Card

                    ></Card>
                    <Card

                    ></Card>
                    </div>
                </div>
            </section>
        </main>
    )
}



export default Home