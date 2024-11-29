import React from 'react'
import "./Product.css";

export const Product = ({product, cart, setCart }) => {


    const name = product.name.length>21?product.name.substring(0, 20) + ".." : product.name;

    const addCart = () => {
        setCart([...cart, product]);
    };
    const removeCart = () => {
        setCart(cart.filter((c) => c.id !== product.id));
    };

  return (
    
    <div className='product'>
       <div className='img'>
        <img src={product.pic} alt={product.name} />
       </div>
       <div className='details'>
       <h3>{name}</h3>
       <p>Price Rs:{product.amt}</p>
       {cart.includes(product)?
        <button className='btnRemove' onClick={removeCart}>Remove From Cart</button>
       :  <button onClick={addCart}>Add to Cart</button>}
       </div>
    </div>
  )
}



// import React from 'react';
// import "./Product.css";

// export const Product = ({ product, cart, setCart }) => {
//   // Truncate name if it's longer than 21 characters
//   const name = product.name.length > 21 ? product.name.substring(0, 20) + ".." : product.name;

//   // Check if the product is in the cart and get the product's current quantity
//   const productInCart = cart.find((c) => c.id === product.id);
//   const quantity = productInCart ? productInCart.quantity : 0;

//   // Function to add the product to the cart
//   const addCart = () => {
//     const updatedCart = [...cart, { ...product, quantity: 1 }];
//     setCart(updatedCart);
//   };

//   // Function to remove the product from the cart
//   const removeCart = () => {
//     setCart(cart.filter((c) => c.id !== product.id));
//   };

//   // Function to increment the product quantity in the cart
//   const handleIncrement = () => {
//     const updatedCart = cart.map((item) =>
//       item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
//     );
//     setCart(updatedCart);
//   };

//   // Function to decrement the product quantity in the cart
//   const handleDecrement = () => {
//     if (quantity > 1) {
//       const updatedCart = cart.map((item) =>
//         item.id === product.id ? { ...item, quantity: item.quantity - 1 } : item
//       );
//       setCart(updatedCart);
//     }
//   };

//   return (
//     <div className='product'>
//       <div className='img'>
//         <img src={product.pic} alt={product.name} />
//       </div>
//       <div className='details'>
//         <h3>{name}</h3>
//         <p>Price Rs: {product.amt}</p>

//         {cart.some((c) => c.id === product.id) ? (
//           <div className="cart-controls">
//             <button className='btnRemove' onClick={removeCart}>Remove From Cart</button>
//             <div className="quantity-controls">
//               <button onClick={handleDecrement} disabled={quantity === 0}>-</button>
//               <span>{quantity}</span>
//               <button onClick={handleIncrement}>+</button>
//             </div>
//           </div>
//         ) : (
//           <button onClick={addCart}>Add to Cart</button>
//         )}
//       </div>
//     </div>
//   );
// };
