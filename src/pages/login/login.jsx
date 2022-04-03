import '../../styles.scss/bootstrap.min.css';
import "./Login.scss"
import twitterIcon from  "../../assets/images/twitter-logo.svg"
import { useRef } from 'react'
import UseLogin from '../../hooks/useLogin';
import { useHistory } from 'react-router-dom';


function Login() {
    const history = useHistory();
    const [, setLogin] = UseLogin(true);
    const nameRef = useRef();
    const passwordRef = useRef();
    
    function handleValue (evt) {
        evt.preventDefault();
        const obj ={
            email: nameRef.current.value,
            password : passwordRef.current.value,
        };

        fetch(`https://reqres.in/api/login`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(obj),
        }).then(res => res.json())
            .then(data => {
                if(data.token){
                    setLogin(data.token);
                    history.push('/profile')

                } else {
                    setLogin(null)
                }
            })

    }
    return <>
    
            <div className='login'>
                <img src={twitterIcon} alt="twitter-icon" width='50' height='41' />
                <h1 className='login__title'>Log in to Twitter</h1>
                <form className='login__form login-form' onSubmit={handleValue}>
                    <input ref={nameRef} className='login-form__input-address' type="email" placeholder='Phone number, email address' defaultValue='eve.holt@reqres.in' />
                    <input ref={passwordRef} className='login-form__input-password' type="password" placeholder='Password' defaultValue='cityslicka' />
                    <button className='login-form__button' type='submit'>Log In</button>
                </form>
                <div className='d-flex justify-content-between'>
                    <span className="login__forgot-password">Forgot password?</span>
                    <span className='login__sign'>Sign up to Twitter</span>
                </div>
            </div>
    
    </>
}
export default Login;