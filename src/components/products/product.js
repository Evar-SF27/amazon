import React from 'react'
import { useStateValue } from '../../Context/stateProvider'
import './styles/product.css'

function Product({ id, title, image, price, rating }) {
  
    // eslint-disable-next-line no-unused-vars
    const[{ basket }, dispatch] = useStateValue()
    const addToCart = () => {
        dispatch({
            type: 'ADD_TO_CART',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating
            }
        })
    }

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
        <button className='product__btn' onClick={addToCart}>Add to Cart</button>
    </div>
  )
}

export default Product