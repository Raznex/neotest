import React from 'react';
import Rate from '../../assets/images/rate.svg';
import { useNavigate } from 'react-router-dom';
import { ICard } from '../../assets/utils/CardInfo';
import './_Card.scss';

interface ICardProps {
  card: ICard;
  onAddCount: (count: number) => void;
  count: number;
}

const Card: React.FC<ICardProps> = ({ card, onAddCount, count }) => {
  const navigate = useNavigate();
  const [isAddedToCart, setIsAddedToCart] = React.useState(false);
  const handleAddToCartClick = () => {
    onAddCount(count);
    setIsAddedToCart(true);
  };
  return (
    <article className='card'>
      <img src={card?.img} alt='' className='card__photo' />
      <div className='card__info'>
        <p className='card__title'>{card?.title}</p>
        <p className='card__price'>{card?.price} &#8381;</p>
        <div className='card__rate'>
          <img src={Rate} alt='Оценка' className='card__image-rate' />
          <p className='card__rate-number'>{card?.rate}</p>
        </div>
        {isAddedToCart ? (
          <button
            className={`card__button-buy ${isAddedToCart ? 'card__button-buy_in-cart' : ''}`}
            onClick={() => navigate('/basket')}
          >
            В корзине
          </button>
        ) : (
          <button
            className={`card__button-buy ${isAddedToCart ? 'card__button-buy_in-cart' : ''}`}
            onClick={handleAddToCartClick}
          >
            Купить
          </button>
        )}
      </div>
    </article>
  );
};

export default Card;
