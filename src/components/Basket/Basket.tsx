import React from 'react';
import { Link } from 'react-router-dom';
import './_Basket.scss';
import CardBasket from '../Card/CardBasket/CardBasket';
import { ICartItems } from '../../assets/utils/CardInfo';

interface IBasketProps {
  cartItems: ICartItems[];
  setCartItems: React.Dispatch<React.SetStateAction<ICartItems[]>>;
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
}
const Basket: React.FC<IBasketProps> = ({
  cartItems,
  setCartItems,
  count,
  setCount,
}) => {
  const handleDelete = (index: number) => {
    setCartItems((prevCartItems) => {
      const newCartItems = [...prevCartItems];
      newCartItems.splice(index, 1);
      setCount(0);
      return newCartItems;
    });
  };
  console.log(cartItems);
  const totalPriceBasket = cartItems.reduce(
    (acc, item) => acc + +item.price * item.count,
    0
  );
  return (
    <main className='content'>
      <div className='basket'>
        <div className='basket__contents'>
          <p className='basket__title'>Корзина</p>
          <Link to='/' className='basket__back'>
            Назад &#8594;
          </Link>
        </div>
        <div className='basket__container'>
          <div className='card-basket'>
            {cartItems.map((headphone, index) => (
              <CardBasket
                key={index}
                card={headphone}
                handleDelete={() => handleDelete(index)}
                cartItems={cartItems}
                setCartItems={setCartItems}
                count={count}
                setCount={setCount}
              />
            ))}
          </div>
          <div className='basket__total'>
            <div className='basket__info'>
              <p className='basket__name'>ИТОГО</p>
              <p className='basket__price'>&#8381; {totalPriceBasket}</p>
            </div>
            <button className='basket__button-continue'>
              Перейти к оформлению
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Basket;
