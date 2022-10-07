import { useState, useContext, useEffect  } from 'react'
import React from 'react'
import './sign-in.styles.scss'
import Button from '../button/button'
import { UserContext } from '../../contexts/user-context'

import { signInWithGooglePopup, createUserDocumentFromAuth, signInAuthUserWithEmailAndPassword } from '../../utils/firebase/firebase.utils'
import FormInput from '../form-input/form-input'

const defaultFormFields = {
    email: '',
    password: '',
}


const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields)
    const [toggleSuccess, setToggleSuccess] = useState(false)
    const { email, password } = formFields
    const { setCurrentUser, currentUser } = useContext(UserContext)

    // console.log(formFields)

    const resetFormFields = () => {
        setFormFields(defaultFormFields)
    }

    const signInWithGoogle = async () => {
        const { user } = await signInWithGooglePopup()
        setCurrentUser(user)
        await createUserDocumentFromAuth(user)
    }


    const handleSubmit = async (event) => {
        event.preventDefault()


        try {
            const user = await signInAuthUserWithEmailAndPassword(
                email,
                password
            );
            setCurrentUser(user)
            resetFormFields();
            console.log(currentUser)
        } catch (error) {
            switch (error.code) {
                case 'auth/wrong-password': 
                    alert('incorrect password for email');
                    break;
                case 'auth/user-not-found':
                    alert('no user associated with this email');
                    break;
                default:
                    console.log(error);
            }
        }
    };
    useEffect(() => {
        currentUser ? setToggleSuccess(true) : setToggleSuccess(false)
    }, [currentUser])


    const handleChange = (event) => {
        const { name, value } = event.target

        setFormFields({ ...formFields, [name]: value })
    }

    return (
        <div className="sign-up-container">
            <h2>I have an account</h2>
            <span>Sign in with your Email And Password</span>
            <form onSubmit={handleSubmit}>
                <FormInput
                    label="Email"
                    inputOptions={{
                        type: 'email',
                        required: true,
                        onChange: handleChange,
                        name: "email",
                        value: email
                    }} />



                <FormInput
                    label="Password"
                    inputOptions={{
                        type: 'password',
                        required: true,
                        onChange: handleChange,
                        name: "password",
                        value: password
                    }} />

                <div className='buttons-container'>
                    <Button      type='submit' children="LOGIN"></Button>
                    <Button type='button' onClick={signInWithGoogle} buttonType='google' children="Google Sign-In"></Button>
                </div>
                {toggleSuccess ? (
                    <div className='logged-in'><b>LOGGED IN SUCCESSFULLY</b></div>
                )
                    :
                    (null)
                }

            </form>
        </div >
    )
}

export default SignInForm