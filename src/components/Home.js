import React, { useState } from 'react'
import data from "../assets/products.json";
import { Product } from './Product';
import "./Home.css";
import Slider from './Slider';
import Footer from './Footer';
import Searchbar from './Searchbar';

export const Home = ({cart, setCart}) => {
  const [products] = useState(data);
  return (
    <div>
      <div className='srbar'>
        <Searchbar />
      </div>
      <div className='slide'>
        <Slider />
      </div>
      <div className='resta'>
        <p><b>Top restaurant chains in Pondicherry</b></p>
      </div>
      <div className='product-container'>
          {products.map((product) =>(
          <Product key={product.id} product= {product} cart= {cart} setCart= {setCart} />))}
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}
