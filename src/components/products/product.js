import React from 'react'
import './styles/product.css'

function Product({ title, image, price, rating }) {
  return (
    <div className='product'>
        <img src={image} alt='product_image' />
        <div className='product__info'>
            <p className='product__name'>{title}</p>
            <p className='product__desc'>
                This is a description for the product Lorem ipsum dolor sit amet.
            </p>
            <p className='product__price'>
                <small>$</small><strong>{price}</strong>
            </p>
            <div className='product__rating'>
                {Array(rating).fill().map((_, i) => (<p>⭐️</p>))}
            </div>
        </div>
        <button className='product__btn'>Add to Cart</button>
    </div>
  )
}

export default Product