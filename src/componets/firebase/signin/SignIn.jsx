import {useState} from "react";
import {auth} from "../../../config/firebaseConfix.js";

export const SignIn = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSignup = async () => {
        if (!email || !password) {
            return alert("Please fill in all fields.")
        }

        try {
            await auth.signInWithEmailAndPassword(email, password)
            alert("Login successfully!")
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
                    <h2>Login</h2>
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
                        Login
                    </button>
                    <p>
                        Dont have an account? <a href={'/signup'}>Sign Up</a>
                    </p>
                </div>
            </div>
        </>
    )
}