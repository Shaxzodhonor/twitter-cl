import { useContext } from "react";
import { Context } from "../context/LoginContext/LoginContext";

function UseLogin (settrOnly) {
    const [login, setLogin] = useContext(Context);
    return  settrOnly ? [login, setLogin] : [login];
}

export default UseLogin;