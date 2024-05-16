import React, { useEffect, useState } from 'react'
import { CardContext } from './Context/Card_Context'
import { useContext } from 'react'
import styled from 'styled-components'
import config from './Khalti/KhaltiConfig'
import KhaltiCheckout from "khalti-checkout-web";
const Cart = (props) => {
  let checkout = new KhaltiCheckout(config);
  const {name, price, img, amount}=useContext(CardContext);

  const Div=styled.div`
    display: flex;
    height: 90vh;
    justify-content: center;
    align-items: center;
    h1{
      border-bottom: 2px solid black;
      text-align: center;
    }

    #buybtn{
      padding: 0.5rem 2.5rem 0.5rem 2.5rem;
      background: #16ccbd;
      font-size: 1.2rem;
      border-radius: 1.5rem;
    }

    .cart_items{
      display: flex;
      flex-direction: column;
    }

    img{
      height: 20rem;
      width: 25rem;
    }
  `

  return (
    <div>
        <Div>
           <div className='cart_items'>
            <img src={img} alt='notfound' />
          <h1>{name}</h1>
          <h1>Quantity: {amount}</h1>
          <h1>Total: {price*amount}</h1>
          <button id='buybtn' onClick={()=> checkout.show({amount: price*amount*100})}>Pay via Khalti</button> 
           </div> 
        </Div>
    </div>
  )
}

export default Cart