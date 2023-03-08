import React, { useContext } from 'react'
import { useNavigate } from 'react-router';
import { AuthContext } from '../context/AuthContext'
import Login from './Login';

const PrivateRoute = ({children}) => {
    const navigate = useNavigate();
     const {token} =  useContext(AuthContext);
      if(token.tokenVal) 
      {
      return children ;
      }
     
      navigate('/login');
      
  
}

export default PrivateRoute