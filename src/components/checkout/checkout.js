import React from 'react'
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
            <h2>This is where the subtool will be rendered</h2>
        </div>

    </div>
  )
}

export default Checkout