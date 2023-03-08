import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { AuthContext } from '../context/AuthContext';
import './Menu.css'
import Model from './Model';

const Menu = () => {
const [model,setModel] = useState("inactive"); 
const [elementt,setElementt]=useState({});
const checkModel = (ele)=>{
  setElementt(ele);
  console.log(elementt)
  if(model==="inactive"){
    setModel("activeDiv");
  }
  else{
    setModel("inactive");
  }
}
const {token} = useContext(AuthContext);
const [data,setData] = useState([]);
  useEffect(()=>{
    axios.get(`http://localhost:3456/dishes`,
    { headers: {Authorization : `Bearer ${token.tokenVal}`} })
    .then(res=>setData(res.data));
  },[]);
  
  return (
    <>
    <Model val = {model} element={elementt}/>
    <div className='homeMenuDivMain'>
      {data.map(ele=>(<div  className={`homeMenuDiv`}  key={ele.id}>
      <div className='homeMenuDivImgDiv' >
        <img onClick={()=>checkModel(ele)} className = 'homeMenuDivImg'src={ele.img} alt="loading" /></div>
      <h3>{ele.name}</h3>
      <p>{ele.subHeading}</p>
    </div>))}</div>
    </>
  )
}

export default Menu