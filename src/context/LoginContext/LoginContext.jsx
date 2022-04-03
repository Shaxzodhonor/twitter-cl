import { createContext, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";  
const Context = createContext();



function Provider({children}){
  
  const [login, setLogin] = useState(JSON.parse(sessionStorage.getItem('_login')));
  const history = useHistory();

 useEffect(() => {
  
  if(login){
      sessionStorage.setItem('_login', JSON.stringify(login));
  } else {
      sessionStorage.removeItem("_login")
      history.push('/')
  }
 }, [login, history])
  
  
  
  return <Context.Provider value={[login, setLogin]}>{children}</Context.Provider>
}

export { Context, Provider};