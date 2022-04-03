import '../../styles.scss/bootstrap.min.css';
import './signUp.scss';
import { useRef} from 'react';
import { useHistory } from 'react-router-dom';

//hook
import UseAuth from '../../hooks/useAuth/useAuth';
import UseLogin from '../../hooks/useLogin';

// images
import twitterIcon from '../../assets/images/twitter-logo.svg';
import googleIcon from '../../assets/images/google-icon.svg';
import appleIcon from '../../assets/images/logo-apple.svg';

function SignUp() {
    const history = useHistory();
    const [, setToken] = UseAuth(true);
    const [, setLogin] = UseLogin(true)
    const userName = useRef();
    const userPhone = useRef();

    function handleSubmit(evt) {
        evt.preventDefault();

        const obj = {
            email: userName.current.value,
            password: userPhone.current.value
        };

        fetch(`${process.env.REACT_APP_JON}/api/register`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(obj),
        })
        .then(res => res.json())
        .then(data => {
            if(data.token){
                setToken(data)
                setLogin(true)
                history.push('/profile')

            } else {
                setToken(null)
            }
        })

        
    }
    
    return <>   
    <div className="h-100">
        <div className='container-xxl'>
        {/* =========MODAL======== */}
        <dialog  open={true} className='bg-transparent p-0 w-100 border-0'>
         <div className='sign-modal'>
            <div className='modal__content'>
                <div className='d-flex justify-content-center'>
                    <img src={twitterIcon} alt="twiter-icon" width='35' />
                </div>
                <span className='modal__title'>Create an account</span>
        
                <form onSubmit={handleSubmit}>
                    <input className='modal__input w-100' ref={userName} type="email" name="email" placeholder='Email' defaultValue='eve.holt@reqres.in' />
                    <input className='modal__input w-100' ref={userPhone} type="password" name="phoneNumber" placeholder='Password' defaultValue='pistol' />
        
        
                    <a className='text-decoration-none my-2 d-block' href="/" >Use email</a>
                <div className='modal__info'>
                    <span className='modal__info-title'>Date of birth</span>
                    <p className='modal__info-text'>
                        Facilisi sem pulvinar velit nunc, gravida       scelerisque amet nibh sit. Quis bibendum ante       phasellus metus, magna lacinia sed augue. Odio  enim      nascetur leo mauris vel eget. Pretium id ullamcorper      blandit viverra dignissim eget tellus. Nibh mi massa   in molestie a sit. Elit   congue.
                    </p>
                </div>
                <div className='row'>
                    <div className='col-6'>
                        <select  className='w-100 modal__input p-2' name="month">
                            <option value="" disabled>Month</option>
                            <option value="jan" >january</option>
                            <option value="dec" >december</option>
                        </select>
                </div>
                <div className="col-3">
                    <select name="day" className='w-100 modal__input p-2'>
                        <option value="day" disabled>Day</option>
                        <option value="1" >1</option>
                        <option value="2" >2</option>
                        <option value="3" >3</option>
                        <option value="4" >4</option>
                        <option value="5" >5</option>
                        <option value="6" >6</option>
                        <option value="7" >7</option>
                        <option value="8" >8</option>
                        <option value="9" >9</option>
                        <option value="10" >10</option>
                        <option value="30" >30</option>
                    </select>
                </div>
                <div className="col-3">
                    <select className='w-100 modal__input p-2' name="day">
                        <option value="year" disabled>Year</option>
                        <option value="2020" >2020</option>
                        <option value="2021" >2021</option>
                        <option value="2022" >2022</option>
                    </select>
                </div>
                </div>
                <button className='modal__btn' type='submit'>Next</button>
            </form>
            </div>
          </div>
        </dialog>
        <div className='row'>
        <div className='col-7 p-0 sign-img'>
        </div>
        <div className='sign-up__wrap col-5'>
        <img  src={twitterIcon} alt="twitter-icon" width='37' height='30' />
        <span className='sign-up__title d-block'>Happening now</span>
        <span className='sign-up__main-title'>Join Twitter today</span>
        
        <button className='sign-up__google-btn'>
        <img  src={googleIcon} alt="google-icon" width='25' />
        Sign up with Google
        </button>
        <button className='sign-up__apple-btn'>
        <img src={appleIcon} alt="apple-icon" width='28' />
        Sign up with Apple
        </button>
        <button className='sign-up__email-btn'>Sign up with phone or email</button>
        <p className='sign-up__text'>By singing up you agree to the <a href="/">Terms of Service</a> and <a href="/">Privacy Policy</a>, including <a href="/">Cookie Use</a>.</p>
        <p>Already have an account? <a href="/">Log in</a></p>
        </div>
        </div>
        </div>
        <div className='links-wrap'>
        <a href="/">About</a>
        <a href="/">Help Center</a>
        <a href="/">Terms of Service</a>
        <a href="/">Privacy Policy</a>
        <a href="/">Cookie Policy</a>
        <a href="/">Ads info</a>
        <a href="/">Blog</a>
        <a href="/">Status</a>
        <a href="/">Carrres</a>
        <a href="/">Brand Resources</a>
        <a href="/">Advertsing</a>
        <a href="/">Marketing</a>
        <a href="/">Twitter for Business</a>
        <a href="/">Developers</a>
        <a href="/">Directory</a>
        <a href="/">Settings</a>
        <a href="/">© 2021 Twitter, Inc.</a>
        </div>
    </div>   
    
    </>
}
export default SignUp;