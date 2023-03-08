import { createContext,useState } from "react";

export const AuthContext = createContext();

export const AuthCover = ({children})=>{
    const valueToken = localStorage.getItem('tokeen');
    const [token,setToken] = useState({
        tokenVal: valueToken||""
    });
    const handleToken = (tokenArg)=>{
        localStorage.setItem('tokeen',tokenArg);
        if(valueToken){
            setToken({
                tokenVal:valueToken
            })
        }
        if(tokenArg!=="user not found"){
             setToken({
                tokenVal:tokenArg
             });
            }
    }
    // eslint-disable-next-line react/jsx-pascal-case
    return <AuthContext.Provider value={{handleToken,token}}>
     {children}
    </AuthContext.Provider>
}