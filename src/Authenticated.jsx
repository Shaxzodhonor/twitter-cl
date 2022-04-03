import { Switch } from "react-router-dom";
import Privates from "./routes/private/private";
import Profile from "./pages/profile/profile";
import Login from "./pages/login/login";
import Error from "./pages/error/error";
import SignUp from "./pages/happening-now/signUp";
import Public from "./routes/public/publicRout";


function Authenticated() {

    return( <>
        <Switch>
            <Privates path='/profile' component={Profile} />
            <Privates path='/sign' component={SignUp} />
            <Public path='/' component={Login} />
            <Public path='*' component={Error}  />
        </Switch>
    </>)
}
export default Authenticated;