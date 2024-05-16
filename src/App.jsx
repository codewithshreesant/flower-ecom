import styled from 'styled-components';
import Navbar from './Navbar';
import ThemeProvider from 'styled-components';
import { GlobalStyle } from '../GlobalStyle.module';
// import { Body } from './Home/Body';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Shop from './Shop';
import Contact from './Contact';
import Signup from './Signup';
import Login from './Login';
import { Body } from './Home/Body';
import SingleProduct from './SingleProduct';
import Cart from './Cart';
import Footer from './Home/Footer';


function App(){

  return (
    <>
    {/* <ThemeProvider theme={theme}> */}
      <GlobalStyle />
    <Router>
    <Navbar />
      <Routes>
        <Route path='/' element={<Body />}/>
        <Route path='/Shop' element={<Shop />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/cart' element={<Cart />}></Route>
        <Route path='/SingleProduct/:id' element={<SingleProduct />} />
      </Routes>
    <Footer />
    </Router>
    {/* </ThemeProvider> */}
    </>
  )
}


export default App;