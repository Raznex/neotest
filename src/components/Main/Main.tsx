import { headphones, TWHeadphones } from '../../assets/utils/CardInfo';
import React from 'react';
import { ICard } from '../../assets/utils/CardInfo';
import Card from '../Card/Card';
import './_Main.scss';

interface MainProps {
  addToBasketCount: (item: ICard, count: number) => void;
  count: number;
}

const Main: React.FC<MainProps> = ({ addToBasketCount, count }) => {
  return (
    <main className='content'>
      <section className='headphones'>
        <h2 className='headphones__title'>Наушники</h2>
        <div className='headphones__container'>
          {headphones.map((headphone: ICard, index: number) => (
            <Card
              key={index}
              card={headphone}
              onAddCount={() => addToBasketCount(headphone, count)}
              count={count}
            />
          ))}
        </div>
      </section>
      <section className='headphones headphones_type_TW'>
        <h2 className='headphones__title'>Беспроводные наушники</h2>
        <div className='headphones__container'>
          {TWHeadphones.map((headphone: ICard, index: number) => (
            <Card
              key={index}
              card={headphone}
              onAddCount={() => addToBasketCount(headphone, count)}
              count={count}
            />
          ))}
        </div>
      </section>
    </main>
  );
};

export default Main;
