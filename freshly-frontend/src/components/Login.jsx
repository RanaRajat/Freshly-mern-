import React, { useContext, useState } from 'react'
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router';
import './Login.css';
const Login = () => {
    const navigate = useNavigate();
  const token = useContext(AuthContext);
  const Submitted = async(e)=>{
    e.preventDefault();
    await axios.post(`http://localhost:3456/auth/user/login`,val)
    .then(res=>token.handleToken(res.data)
    ).catch(e=>console.log(e));
    if(token.token.tokenVal){
    navigate('/home');
    }
  }
const [val,setVal] = useState({
    email: "",
    password: ""
})

const changed = (e)=>{
       setVal({
        ...val,
        [e.target.name]:e.target.value,
       });
       
}
  

  return (
    <form action="" onSubmit={Submitted}>
        <label htmlFor="">Email Address</label>
        <input name='email' value={val.userName} onChange={changed}  type="text" />
        <label htmlFor="">Password</label>
        <input name='password' value={val.userPassword} onChange={changed} type="password" />
        <input className='submitLogin' type="submit"  />
    </form>
  )
}

export default Login