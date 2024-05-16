import React from 'react'
import styled from 'styled-components'

const Footer = () => {
    const Div=styled.div`
        height: 50vh;
        position: relative;
        background: #120F0F;
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        top: 20rem;

        

        li{
            list-style: none;
            
        }

        ul{
            display: flex;
            flex-direction: column;
            align-items: center;
            
        }
    `

  return (
    <Div>
        <div>
            <ul>
                <li>Facebook.com</li>
                <li>Instagram.com</li>
                <li>Linkedin.com</li>
                <li>company@gmail.com</li>
                <li>Twitter.com</li>
            </ul>
        </div>
    </Div>
  )
}

export default Footer