import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useContext } from 'react'
import { AppContext } from '../Context/FlowersContext'
import { Link } from 'react-router-dom'
export const Body = () => {
    const { products } = useContext(AppContext);
    const [image, setImage] = useState("https://static.pexels.com/photos/9611/flowers.jpg");
    const [Images, setImages] = useState([
        "https://th.bing.com/th/id/R.cfaa46c0584fbd5e3f627dabb91b504f?rik=FBEgmj6U0eeZ3w&pid=ImgRaw&r=0",
        "https://th.bing.com/th/id/OIP.keI2hZHuxwfreYEcNrTrKwHaFj?w=208&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7",
        "https://th.bing.com/th/id/OIP.sq8W-M8RPLmtkL_HxNeI1gHaEo?w=251&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7"
    ])

    const filterProducts = products.data?.filter((ele) => {
        return ele.rating == 4.5
    })



    const Featured = styled.div`
        
        display:grid;
        grid-template-columns: repeat(3,23rem);
        gap:3rem;
        position: relative;
        top: 3rem;
        justify-content: center;
    

        img{
            height: 220px;
            width: 300px;
            
        }

        h2{
            text-align: center;
        }

        .feature_item{
            text-align: center;
            font-weight: light;
            background: #DAE6F4;

            p{
                font-size: 1.2rem;
            }

            h1{
                font-size: 1.5rem;
                font-style: italic;
            }
        }

    `
    const Div = styled.div`
        height:80vh;
        display: flex;
        flex-direction: row-reverse;
        justify-content: center;
        align-items: center;
        gap: 1.5rem;
        background: #d6d6d6;
        img{
            height: 60vh;
            width: 40vw;
            
        }
        h2{
            font-size: 2.6rem;
        }
        p{
            font-size: 1.4rem;
        }
    `
    return (
        <>
                <Div className="body_content">
                    <img src={image} alt='notfound' className="body_content_img"/>
                    {/* <h2>Flowers Collections</h2> */}
                    <div>
                        <p>A flower doesnot use words to</p>
                        <p>announce its arrival to the world;</p>
                        <p >it just blooms</p>
                    </div>
                </Div>
                <div style={{ position: 'relative', top: '10rem' }}>
                    <div style={{ textAlign: 'center', fontSize: '2rem' }}>
                        <h2>Featured Collections</h2>
                    </div>
                    <Featured className="Featured">
                        {
                            filterProducts?.map((ele) => {
                                return <Link to={`/singleproduct/${ele._id}`} style={{textDecoration: 'none'}}><div className='feature_item' style={{ background: '#ccdbd0' }}>
                                    <h1>{ele.name}</h1>
                                    <img src={ele.img} alt='notfound' />
                                    <p>Price: {ele.price}</p>
                                </div>
                                </Link>
                            })
                        }
                    </Featured>
                </div>
        </>
    )
}