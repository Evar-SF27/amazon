import React from 'react'
import { useStateValue } from '../../Context/stateProvider'
import Cart from '../cart_item/cart'
import Subtotal from '../subtotal/subtotal'
import './styles/checkout.css'

function Checkout() {
    const [{ basket, user }] = useStateValue()
  return (
    <div className='checkout'>
        <div className='checkout__left'>
            <img 
                className='checkout__ad' 
                src='https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg' 
                alt='checkout ad' 
            />
            <div className=''>
                <h3>Hello, {user?.email}</h3>
                <h2 className='checkout__title'>Your Shopping Cart</h2>
                {/* Basket Item */}
                {basket.map((item) => {
                    return (
                        <Cart 
                            id={item.id} 
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                        />
                    )
                })}
            </div>
        </div>
        <div className='checkout__right'>
            {/* Sub tool */}
            <Subtotal />
        </div>

    </div>
  )
}

export default Checkout