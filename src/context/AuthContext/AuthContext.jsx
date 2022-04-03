import {createContext,  useEffect,  useState } from "react";
import { useHistory } from "react-router-dom";  


const Context = createContext();

function Provider ({ children }) {
    const history = useHistory();
    const [token, setToken] = useState(JSON.parse(localStorage.getItem('token')));

   useEffect(() => {
    
    if(token){
        localStorage.setItem('token', JSON.stringify(token));
    } else {
        localStorage.removeItem('token');
        history.push('/')
    }
   }, [token, history])
    
    return <Context.Provider value={[token, setToken]}>{children}</Context.Provider>

}

export { Context, Provider };