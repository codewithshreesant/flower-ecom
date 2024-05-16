import React, {useEffect, useMemo} from 'react'
import styled from 'styled-components'
import axios from 'axios'
import {useState} from 'react'
const Contact =() => {
  const [username, setUserName]=useState("");
  const [email, setEmail]=useState("");
  const [address, setAddress]=useState("");
  const [description, setDescription]=useState("")
  

  const handleChange=(e)=>{
    if(e.target.name === "username"){
      setUserName(e.target.value)
    }else if(e.target.name === "email"){
      setEmail(e.target.value)
    }else if(e.target.name === "address"){
      setAddress(e.target.value)
    }else{
      setDescription(e.target.value)
    }
  }

  const formsDetails={username, email, address, description};
  const uid="username"
  const eid="email"
  const aid="address"
  const did="description"

  let focusElement=document.activeElement.id;

  

  const handleSubmit=(e)=>{
    e.preventDefault();
    const {username, email, address, description}=formsDetails;
    axios.post('/api/formdata',{
      username:username, email:email, address:address, description:description
    }).then((res)=>{console.log(res); console.log("data has been submitted successfully") }).catch((error)=>console.log(error))
  }


  const Forms=styled.div`
    display: flex:
    justify-content: center;
    align-items: center;

    input{
      padding: 0.5rem 2rem 0.5rem 2rem;
      display: flex;

    }
  
    label{
      font-size: 1.2rem;
    }

     form{
      height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
     }

     #submitbtn{
      padding: 0.5rem 2rem;
      background: blue;
      color: white;
      font-weight: bold;
     }
  `
  return (
  <>
    <div>
    <div style={{display: "flex", justifyContent:"center"}}>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56516.31713620581!2d85.28493287559813!3d27.708954252164748!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb198a307baabf%3A0xb5137c1bf18db1ea!2sKathmandu%2044600!5e0!3m2!1sen!2snp!4v1715330429461!5m2!1sen!2snp" style={{width:"100vw", height:"450px", border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
    <h1 style={{textAlign: 'center', borderBottom: '1px solid black', position: 'relative', top: '5rem'}}>Contact Us</h1>
    <Forms className="Forms">
      <form>
        <div>
          <label htmlFor="">UserName:</label>
          <input type="text" autoComplete="off" id={uid} value={username} name="username"   onChange={handleChange} required {...(focusElement === uid ? {autoFocus: true}: {})}/>
        </div>
        <div>
          <label htmlFor="">Email:</label>
          <input type="text" autoComplete="off" id={eid} value={email} name="email"  onChange={handleChange} required {...(focusElement === eid ? {autoFocus: true}: {})}/>
        </div>
        <div>
          <label htmlFor="">Address:</label>
          <input type="text" autoComplete="off" id={aid} value={address} name="address"  onChange={handleChange} required {...(focusElement === aid ? {autoFocus: true}: {})}/>
        </div>
        <div>
          <h2>Description:</h2>
          <textarea cols='50' rows='15' id={did} value={description} name="description"  onChange={handleChange} {...(focusElement === did ? {autoFocus: true}: {})}></textarea>
        </div>
        <button type='submit' onClick={handleSubmit} id="submitbtn">submit</button>
      </form>
    </Forms>
    </div>
    </>
  )
}


export default Contact