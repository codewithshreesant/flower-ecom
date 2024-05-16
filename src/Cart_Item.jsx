import React from 'react'
import styled from 'styled-components'

const Cart_Item = ({amount, setIncrease, setDecrease}) => {
    const Div=styled.div`
        display: flex;
        gap: 1.5rem;
    `
  return (
    <Div>
        <div>
            <button onClick={()=>setIncrease()}>
            <i class="fa-solid fa-plus"></i>
            </button>
        </div>
        <div>
            <h3>{amount}</h3>
        </div>
        <div>
            <button onClick={()=>setDecrease()}>
            <i class="fa-solid fa-minus"></i>
            </button>
        </div>
    </Div>
  )
}

export default Cart_Item