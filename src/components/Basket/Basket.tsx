import React from 'react';
import CardBasket from './CardBasket';
import { Link } from 'react-router-dom';
import './_Basket.scss';
const Basket = ({ cartItems, setCartItems, count, setCount }) => {
  const handleDelete = (index) => {
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
    <div className='basket'>
      <div className='basket__contents'>
        <p className='basket__title'>Корзина</p>
        <Link to='/' className='basket__back'>
          Назад &#8594;
        </Link>
      </div>
      <div className='basket__container'>
        <div className='product'>
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
  );
};

export default Basket;
