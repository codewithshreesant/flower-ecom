import React from 'react'
import styled from 'styled-components'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
import axios from 'axios'

const Navbar = () => {
    const [Active, setActive] = useState();
    const { loginWithRedirect } = useAuth0();
    const { logout } = useAuth0();
    const { user, isAuthenticated, isLoading } = useAuth0();

    const handleLogin=(name, email)=>{
        axios.post('/api/logindata',{
            name: name, email: email
        }).then((res)=>{console.log(res);}).catch((error)=>{console.log(error)})
    }

    useEffect(()=>{
        if(isAuthenticated){
            handleLogin(user.name, user.email);
        }
    },[isAuthenticated])
    const Navbar = styled.nav`
        display:flex;
        justify-content: space-around;
        background: #1F1B1B;
        color: white;
        position: sticky;
        top: 0;
        z-index: 2;

        .logo{
            font-size:1.4rem;
            position: relative;
            top: 0.3rem;
        }

        .menu{
            display:flex;
            gap: 4rem;
            font-size: 1.5rem;
            margin-top: 0.8rem;
        }

        li{
            list-style: none;
        }

        .bar{
            display:none;
        }

        .closeOutline{
            display: none;
        }

    `
    return (
        <Navbar className='navbar'>
            <div className={Active ? "shortlogo" : "logo"}>
                <h1>Flower E-com</h1>
            </div>
            <div className="menu_items">
                <ul className={Active ? "shortmenu" : "menu"}>
                    <li className='item'><Link to="/" style={{textDecoration: 'none', color: 'white', fontSize: '1.2rem'}}>Home</Link></li>
                    {isAuthenticated && <li className='item'><Link to="/shop" style={{textDecoration: 'none', color: 'white', fontSize: '1.2rem'}}>Shop</Link></li>}
                    <li className='item'><Link to="/contact" style={{textDecoration: 'none', color: 'white', fontSize: '1.2rem'}}>Contact</Link></li>
                    <li className='item'><Link to="/cart" style={{textDecoration: 'none', color: 'white', fontSize: '1.2rem'}}>Cart</Link></li>
                    {/* <li className='item'><Link to="/Login">Login</Link></li> */}
                    <li>
                        {isAuthenticated && <div style={{fontSize: '1.3rem'}}><h4>Hello</h4><p>{user.name}</p></div>}
                    </li>
                    {isAuthenticated ? (
                        <li>
                        <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })} style={{padding: '0.4rem 0.6rem 0.4rem 0.6rem', fontSize: '1.2rem', background: '#5854B7', color: 'white'}}>
                        Log Out
                        </button>
                        </li>
                    ):(
                        <li>
                        <button onClick={() => loginWithRedirect()} style={{padding: '0.4rem 0.6rem 0.4rem 0.6rem', fontSize: '1.2rem', background: '#5854B7', color: 'white'}}>Log In</button>
                        </li>
                    )}

                    {/* <li className='item'><Link to="/signup">Sign up</Link></li> */}
                    
                    <li onClick={() => setActive(true)} className='bar'><i class="fa-solid fa-bars" ></i></li>
                    <li className="closeOutline" onClick={() => setActive(false)}><i class="fa-solid fa-xmark"></i></li>
                </ul>

            </div>
        </Navbar>
    )
}

export default Navbar