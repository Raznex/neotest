import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Basket from '../Basket/Basket';
import Footer from '../Footer/Footer';
import { ICard, ICartItems } from '../../assets/utils/CardInfo';
import './App.scss';

function App() {
  const [count, setCount] = React.useState<number>(0);
  const [cartItems, setCartItems] = React.useState<ICartItems[]>([]);
  const totalItemCount = cartItems.reduce((acc, item) => acc + item.count, 0);
  const addToCart = (item: ICard, count: number) => {
    setCartItems([
      ...cartItems,
      {
        ...item,
        id: cartItems.length,
        count: count + 1,
        totalPrice: +item.price,
      },
    ]);
  };

  return (
    <div className='page'>
      <Header basketCount={totalItemCount} />
      <Routes>
        <Route
          path='/'
          element={<Main addToBasketCount={addToCart} count={count} />}
        />
        <Route
          path='/basket'
          element={
            <Basket
              cartItems={cartItems}
              setCartItems={setCartItems}
              count={count}
              setCount={setCount}
            />
          }
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
