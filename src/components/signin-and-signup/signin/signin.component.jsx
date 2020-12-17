import React, {useState} from 'react';
import './signin.style.css'
import FormInput from '../../form-input/form-input.component';
import CustomeButton from '../../custome-btn/custome-btn.component';
import {signInWithGoogle} from '../../../firebase/firebase.utils';
const Signin = () => { 
    const [value, setValue] = useState({
        email: "",
        password: ""
    })
    const handleSubmit = (e) =>{ 
        e.preventDefault();
        setValue({
            ...value, email: "", password: ""
        })     
    }
    const handleInput = (e) =>{
        setValue({
            ...value, [e.target.name]: e.target.value
        })
   
    }
    return (
        <div className="sign-in d-flex flex-column">
            
            <h2>I already have an account</h2>
            <span>sign in with email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput handleChange={handleInput} label="Email" type="text" name="email" value={value.email} /> 
                <FormInput handleChange={handleInput} label="Password" type="password" name="password" value={value.password} /> 
               <div className="d-flex flex-wrapped justify-center">
               <CustomeButton type="submit">
                    <span>Sign in</span>
                </CustomeButton>
                <CustomeButton onClick={signInWithGoogle} isGoogleSignIn>
                    <span>Sign in with Google</span>
                </CustomeButton>
               </div>
            </form>

        </div>
    )
}
export default Signin ;