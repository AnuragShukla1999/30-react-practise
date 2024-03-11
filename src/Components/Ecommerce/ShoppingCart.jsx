import React, { useState } from 'react';

function ShoppingCart() {
    const [items, setItems] = useState([]);

    const addItemToCart = (product) => {
        setItems([...items, { ...product, quantity: 1 }]);
    };

    const removeItemFromCart = (index) => {
        const updatedItems = [...items];
        updatedItems.splice(index, 1);
        setItems(updatedItems);
    };

    const increaseItemQuantity = (index) => {
        const updatedItems = [...items];
        updatedItems[index].quantity++;
        setItems(updatedItems);
    };

    const decreaseItemQuantity = (index) => {
        const updatedItems = [...items];
        if (updatedItems[index].quantity > 1) {
            updatedItems[index].quantity--;
            setItems(updatedItems);
        }
    };

    return (
        <div>
            {items.map((item, index) => (
                <div key={index}>
                    <span>{item.name}</span>
                    <button onClick={() => increaseItemQuantity(index)}>+</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => decreaseItemQuantity(index)}>-</button>
                    <button onClick={() => removeItemFromCart(index)}>Remove</button>
                </div>
            ))}
        </div>
    );
}

export default ShoppingCart;