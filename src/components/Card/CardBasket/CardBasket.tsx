import React from 'react';

const CardBasket = ({card, handleDelete, cartItems, setCartItems, count, setCount}) => {
    const [totalPrice, setTotalPrice] = React.useState(card.price);

    const handlePlusClick = () => {
        setCount(count + 1);
        setTotalPrice(+totalPrice + +card?.price);
        const itemIndex = cartItems.findIndex(item => item.id === card.id);
        if (itemIndex === -1) {
            setCartItems([...cartItems, {...card, count: 1}]);
        } else {
            const updatedCartItems = [...cartItems];
            updatedCartItems[itemIndex].totalPrice += +card.price;
            updatedCartItems[itemIndex].count += 1;
            setCartItems(updatedCartItems);
        }
    };

    const handleMinusClick = () => {
        if (card?.count > 1) {
            setCount(count - 1);
            setTotalPrice(+totalPrice - +card?.price);
            const itemIndex = cartItems.findIndex(item => item.id === card.id);
            const updatedCartItems = [...cartItems];
            updatedCartItems[itemIndex].count -= 1;
            updatedCartItems[itemIndex].totalPrice -= +card.price;
            setCartItems(updatedCartItems);
        } else {
            const updatedCartItems = cartItems.filter(item => item.id !== card.id || item.count > 1);
            setCartItems(updatedCartItems);
        }
    };

    return (
            <div className="product__container">
                <button className="product__trash" onClick={handleDelete}/>
                <div className="product__description">
                    <img src={card?.img} alt="" className="product__image"/>
                    <div className="product__about">
                        <p className="product__title">{card?.title}</p>
                        <p className="product__price">{card?.price} &#8381;</p>
                    </div>
                </div>
                <div className="product__total-price">
                    <div className="product__addition">
                        <button className="product__button-minus" onClick={handleMinusClick}/>
                        <p className="product__num">{card?.count}</p>
                        <button className="product__button-plus" onClick={handlePlusClick}/>
                    </div>
                    <p className="product__sum">{card.totalPrice} &#8381;</p>
                </div>
            </div>
    );
};

export default CardBasket;