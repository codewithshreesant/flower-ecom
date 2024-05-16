import React, { useContext, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AppContext } from "./Context/FlowersContext";
import axios from 'axios';
import { Rating } from '@mui/material';
import styled from 'styled-components';
// import Cart from './Cart';
import { CardContext } from './Context/Card_Context';
// import { useContext } from 'react';
import { Link } from 'react-router-dom';
import Cart_Item from './Cart_Item';
import { useState } from 'react';
const SingleProduct = () => {
    const [amount, setAmount]=useState(1);
    const {AddToCart}=useContext(CardContext);
    const Div=styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    .singleitems{
    width: 40vw;

    }
    #btncart{
        padding: 0.5rem 1.5rem 0.5rem 1.5rem;
        background: #e6da93;
        border-radius: 2rem;
      }

      img{
        height: 25rem;
        width: 25rem;
      }
    `
    const {id}=useParams();
    const {getSingleProduct, singleProduct}=useContext(AppContext);
    useEffect(()=>{
        getSingleProduct(id);
    }, []);

    const setIncrease=()=>{
        amount >= 1 ? setAmount(amount + 1) : setAmount(1);
    }

    const setDecrease=()=>{
        amount > 1 ? setAmount(amount - 1) : setAmount(1);
    }
    const dta=singleProduct;
    const {name, price, rating, img, description}=dta;
   

  return (
    <Div className="SingleProduct">
        <div className='singleitems'>
        <div>
            <h1>{name}</h1>
        </div>
        <div>
            <img src={img} alt='loading' />
        </div>
        <div>
            <h2>{price}</h2>
        </div>
        <div>
            <Rating value={rating} />
        </div>
        <div>
            <p>{description}</p>
        </div>
        <div>
            <Cart_Item 
                amount={amount}
                setIncrease={setIncrease}
                setDecrease={setDecrease}
            />
        </div>
        <div>
            <Link to="/cart" onClick={() => AddToCart(name,price,img,amount)}><button id='btncart'>Add to cart</button></Link>
        </div>
        </div>
    </Div>
    // <h1>shop</h1>
  )
}


export default SingleProduct

