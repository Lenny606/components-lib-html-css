import {useState} from "react";
import {auth} from "../../../config/firebaseConfix.js";

export const SignUp = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSignup = async () => {
        if (!email || !password) {
            return alert("Please fill in all fields.")
        }

        try {
            await auth.createUserWithEmailAndPassword(email, password)
            alert("Account created successfully!")
            setPassword('')
            setEmail('')

        } catch (error) {
            return alert(error.message)
        }
    }
    return (
        <>
            <div className={'container'}>
                <div className={'form'}>
                    <h2>Create Account</h2>
                    <div className={'input-box'}>
                        <input type={'text'} placeholder={'Email'} value={email} onChange={(e) => {
                            setEmail(e.target.value)
                        }}/>
                    </div>
                    <div className={'input-box'}>
                        <input type={'password'} placeholder={'Password'} value={password} onChange={(e) => {
                            setPassword(e.target.value)
                        }}/>
                    </div>
                    <button className={'btn'} onClick={handleSignup}>
                        Sign Up
                    </button>
                    <p>
                        Already have an account? <a href={'/signin'}>Sign In</a>
                    </p>
                </div>
            </div>
        </>
    )
}