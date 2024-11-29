import React, { useEffect, useState } from 'react';
import "./Cart.css";

export const Cart = ({ cart, setCart }) => {
  const [total, setTotal] = useState(0);

  // Recalculate the total whenever cart changes
  useEffect(() => {
    setTotal(cart.reduce((acc, curr) => acc + (parseInt(curr.amt) * curr.quantity), 0));
  }, [cart]);

  // Handle deletion of a product
  const handleDelete = (productId) => {
    const updatedCart = cart.filter(product => product.id !== productId);
    setCart(updatedCart);
  };

  // Increment product quantity
  const handleIncrement = (productId) => {
    const updatedCart = cart.map(product => {
      if (product.id === productId) {
        return { ...product, quantity: product.quantity + 1 };
      }
      return product;
    });
    setCart(updatedCart);
  };

  // Decrement product quantity
  const handleDecrement = (productId) => {
    const updatedCart = cart.map(product => {
      if (product.id === productId && product.quantity > 1) {
        return { ...product, quantity: product.quantity - 1 };
      }
      return product;
    });
    setCart(updatedCart);
  };

  return (
    <>
      <h1 className='cart-heading'>Cart Products</h1>
      <div className='cart-container'>
        {cart.map((product) => (
          <div className='cart-product' key={product.id}>
            <div className='img'>
              <img src={product.pic} alt='product' />
            </div>
            <div className='cart-product-details'>
              <h3>{product.name}</h3>
              <p>Price Rs: {product.amt}</p>
              <p>Quantity: {product.quantity}</p>
            </div>

            <div className='cart-product-actions'>
              
              <button className='increment-btn' onClick={() => handleIncrement(product.id)}>
                +
              </button>
              <button className='decrement-btn' onClick={() => handleDecrement(product.id)}>
                -
              </button>

              <button className='delete-btn ms-5' onClick={() => handleDelete(product.id)}>
                Delete
              </button>
            </div>
          </div>
        ))}

        <div className='row'>
        <label className='redbut'>
          <input style={{width:'30%'}} type='text' placeholder='Enter your coupon code' />
          <button className='btn'>Redeem</button>
        </label>
      </div>
      </div>

      <div>
      <h2 className='cart-amt'>Total Amount Rs: {total}
      <button className='btn'>Place Order</button>
      </h2>
      </div>

    </>
  );
};
