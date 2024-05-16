import { AppContext } from "./Context/FlowersContext";
import { useContext, useState, useEffect } from 'react'
import styled from "styled-components";
import Rating from '@mui/material/Rating';
import { Link } from 'react-router-dom'
import FilterSection from "./FilterSection";
const Shop = () => {
  const { products, filterProducts } = useContext(AppContext);
  const [isFilterPro, setFilterPro]=useState(false);
  const [isProducts, setIsProducts]=useState(true);
  const {filter:{text}} = useContext(AppContext);
  let final_data = products.data;

  useEffect(()=>{
    if(text.length == 0){
      setIsProducts(true)
      setFilterPro(false)
    }
  },[text])

  useEffect(()=>{
  if(filterProducts.length >= 1){
    setFilterPro(true);
    setIsProducts(false);
  }
}, [filterProducts])
  const Div = styled.div`
    text-decoration: none;
    display: grid;
    grid-template-columns: repeat(3,23rem);
    gap:3rem;
    position: relative;
    top: 3rem;
    justify-content: center;
    background: #d8eff0;
    
    #btncart{
      padding: 0.5rem 1.5rem 0.5rem 1.5rem;
      background: #e6da93;
      border-radius: 2rem;
    }

  `

  const AllShop = styled.div`
    background: #d8eff0;
  `
  return (
    <>
      <AllShop>
        <FilterSection />
        {isProducts && 
        <Div className="shop">
          {
            final_data?.map((element) => {
              return <Link to={`/singleproduct/${element._id}`} style={{ textDecoration: 'none', background: '#ccdbd0', paddingLeft: '2.5rem' }}> <div className="main_container">
                <div className="name">
                  <h1>{element.name}</h1>
                </div>
                <div className="imgs">
                  <img src={element.img} alt='notfound' height='300px' width='300px' />
                </div>
                <div className="price">
                  <h2> price: NPR {element.price}</h2>
                </div>
                <div className="rating">
                  <Rating value={element.rating} />
                </div>
              </div>
              </Link>
            })
          }
        </Div>
}
    { isFilterPro &&  
    <Div className="shop">
    {
      filterProducts?.map((element) => {
        return <Link to={`/singleproduct/${element._id}`} style={{ textDecoration: 'none', background: '#ccdbd0', paddingLeft: '2.5rem' }}> <div className="main_container">
          <div className="name">
            <h1>{element.name}</h1>
          </div>
          <div className="imgs">
            <img src={element.img} alt='notfound' height='300px' width='300px' />
          </div>
          <div className="price">
            <h2> price: NPR {element.price}</h2>
          </div>
          <div className="rating">
            <Rating value={element.rating} />
          </div>
        </div>
        </Link>
      })
    }
  </Div>
    }

   
      </AllShop>
    </>
  )
}


export default Shop;