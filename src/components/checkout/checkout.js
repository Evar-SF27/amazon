import React from 'react'
import Subtotal from '../subtotal/subtotal'
import './styles/checkout.css'

function Checkout() {
  return (
    <div className='checkout'>
        <div className='checkout_left'>
            <img 
                className='checkout__ad' 
                src='https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg' 
                alt='checkout ad' 
            />
            <div className=''>
                <h2 className='checkout__title'>Your Shopping Cart</h2>
                {/* Basket Item */}
            </div>
        </div>
        <div className='checkout_right'>
            {/* Sub tool */}
            <Subtotal />
        </div>

    </div>
  )
}

export default Checkout