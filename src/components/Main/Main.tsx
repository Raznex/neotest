import React from 'react';
import Card from "./Card";
import {headphones, TWHeadphones} from '../utils/CardInfo'

const Main = ({addToBasketCount, count}) => {
    return (
        <main className='content'>
            <section className="headphones">
                <h2 className="headphones__title">Наушники</h2>
                <div className="headphones__container">
                    {headphones.map((headphone, index) => (
                        <Card key={index} card={headphone} onAddCount={() => addToBasketCount(headphone, count)} count={count}/>
                    ))}
                </div>
            </section>
            <section className="headphones headphones_type_TW">
                <h2 className="headphones__title">Беспроводные наушники</h2>
                <div className="headphones__container">
                    {TWHeadphones.map((headphone, index) => (
                        <Card key={index} card={headphone} onAddCount={() => addToBasketCount(headphone, count)} count={count}/>
                    ))}
                </div>
            </section>
        </main>
    );
};

export default Main;