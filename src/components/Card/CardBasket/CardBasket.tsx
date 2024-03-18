import React from 'react';
import { ICartItems } from '../../../assets/utils/CardInfo';
import './_CardBasket.scss';

interface ICardBasketProps {
  card: ICartItems;
  handleDelete: () => void;
  cartItems: ICartItems[];
  setCartItems: React.Dispatch<React.SetStateAction<ICartItems[]>>;
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
}

const CardBasket: React.FC<ICardBasketProps> = ({
  card,
  handleDelete,
  cartItems,
  setCartItems,
  count,
  setCount,
}) => {
  const [totalPrice, setTotalPrice] = React.useState(card.price);

  const handlePlusClick = () => {
    setCount(count + 1);
    if (card.price !== undefined) {
      setTotalPrice(totalPrice + card.price);
    }
    const itemIndex = cartItems.findIndex((item) => item.id === card.id);
    if (itemIndex === -1) {
      setCartItems([...cartItems, { ...card, count: 1 }]);
    } else {
      const updatedCartItems = [...cartItems];
      if (card.price !== undefined) {
        updatedCartItems[itemIndex].totalPrice += card.price;
      }
      updatedCartItems[itemIndex].count += 1;
      setCartItems(updatedCartItems);
    }
  };

  const handleMinusClick = () => {
    if (card.count > 1) {
      setCount(count - 1);
      if (card.price !== undefined) {
        setTotalPrice(totalPrice - card.price);
      }
      const itemIndex = cartItems.findIndex((item) => item.id === card.id);
      const updatedCartItems = [...cartItems];
      updatedCartItems[itemIndex].count -= 1;
      if (card.price !== undefined) {
        updatedCartItems[itemIndex].totalPrice -= card.price;
      }
      setCartItems(updatedCartItems);
    } else {
      const updatedCartItems = cartItems.filter(
        (item) => item.id !== card.id || item.count > 1
      );
      setCartItems(updatedCartItems);
    }
  };

  return (
    <div className='card-basket__container'>
      <button className='card-basket__trash' onClick={handleDelete} />
      <div className='card-basket__description'>
        <img src={card?.img} alt='' className='card-basket__image' />
        <div className='card-basket__about'>
          <p className='card-basket__title'>{card?.title}</p>
          <p className='card-basket__price'>{card?.price} &#8381;</p>
        </div>
      </div>
      <div className='card-basket__total-price'>
        <div className='card-basket__addition'>
          <button
            className='card-basket__button-minus'
            onClick={handleMinusClick}
          />
          <p className='card-basket__num'>{card?.count}</p>
          <button
            className='card-basket__button-plus'
            onClick={handlePlusClick}
          />
        </div>
        <p className='card-basket__sum'>{card.totalPrice} &#8381;</p>
      </div>
    </div>
  );
};

export default CardBasket;
