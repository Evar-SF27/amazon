import React from 'react'
import './styles/subtotal.css'
import CurrencyFormat from 'react-currency-format'
import { useStateValue } from '../../Context/stateProvider'
import { getCartTotal } from '../../Context/reducer'

function Subtotal() {
    const [{ basket }] = useStateValue()

  return (
    <div className='subtotal'>
        <CurrencyFormat 
            renderText={(value) => (
                <>
                    <p>
                        Subtotal ({ basket?.length} items): <strong>{value}</strong>
                        <small className='subtotal__gift'>
                            <input type='checkbox' /> This order contains a gift
                        </small>
                    </p>
                </>
            )}
            decimalScale={2}
            value={getCartTotal(basket)}
            displayType={'text'}
            thousandSeparator={true}
            prefix={'$'}
        />
        <button>Proceed to Checkout</button>
    </div>
  )
}

export default Subtotal