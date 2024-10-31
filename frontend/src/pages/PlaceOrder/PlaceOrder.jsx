import React, { useContext } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../context/StoreContext'
import 'boxicons'


const PlaceOrder = () => {

  // const { getTotalCartAmount } = useContext(StoreContext)
  const getTotalCartAmount = ()=>{
    console.log('0')
  }

  return (
    <form className='place-order'>
      <div className="place-order-left">
        <p className='title'>Delivery Information</p>
        <div className="multi-fields">
          <input type="text" placeholder='First Name'/>
          <input type="text" placeholder='Last Name'/>
        </div>
        <input type="email" placeholder='Email address'/>
        <input type="text" placeholder='Street'/>
        <div className="multi-fields">
          <input type="text" placeholder='City'/>
          <input type="text" placeholder='State'/>
        </div>
        <div className="multi-fields">
          <input type="text" placeholder='Zip Code'/>
          <input type="text" placeholder='Country'/>
        </div>
        <input type="text" placeholder='Phone' />
      </div>

      <div className="place-order-right">
        <div className="cart-total">
          <h2>Cart Total</h2>
          <div>
            <div className="cart-totals-details">
              <p>Subtotal</p>
              <p>&#36;{getTotalCartAmount()}</p>
            </div>
            <hr/>
            <div className="cart-totals-details">
                <p>Delivery Fee</p>
                <p>&#36;{getTotalCartAmount() === 0 ? 0 : 2}</p>
            </div>
            <hr/>
            <div className="cart-totals-details">
                <b>Total</b>
                <b>&#36;{getTotalCartAmount() === 0 ? 0 : getTotalCartAmount()  + 2}</b>
            </div>
          </div>
          <button>Proceed To Payment</button>
        </div>
      </div>
      
    </form>
  )
}

export default PlaceOrder
