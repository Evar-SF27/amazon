import React from 'react'
import { useStateValue } from '../../Context/stateProvider'
import './styles/cart.css'

function Cart({ id, title, price, image, rating }) {
    
  const [{ basket }, dispatch] = useStateValue()
  const removeFromCart = () => {
    dispatch({
      type: 'REMOVE_FROM_CART',
      id: id
    })
  }



  return (
    <div className='cart'>
        
        <img src={image} className='cart__image' alt='cart_image' />
        <div className='cart__info'>
            <p className='cart__name'>{title}</p>
            <p className='cart__price'>
                <small>$</small><strong>{price}</strong>
            </p>
            <div className='cart__rating'>
                {Array(rating).fill().map((_, i) => (<p>⭐️</p>))}
            </div>
            <button className='cart__btn' onClick={removeFromCart}>Remove from Cart</button>
        </div>
        
    </div>
  )
}

export default Cart