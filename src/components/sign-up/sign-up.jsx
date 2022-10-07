import { useState, useContext } from 'react'
import { UserContext } from '../../contexts/user-context'
import React from 'react'
import './sign-up.styles.scss'
import Button from '../button/button'

import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils'
import FormInput from '../form-input/form-input'

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields)
    const { displayName, email, password, confirmPassword } = formFields

    const { setCurrentUser} = useContext(UserContext)

    const resetFormFields = () => {
        setFormFields(defaultFormFields)
    }

    const handleSubmit = async (event) => {
        event.preventDefault()

        if (password != confirmPassword) {
            alert('passwords do not match')
            return
        }

        try {
            const { user } = await createAuthUserWithEmailAndPassword(email, password)
            setCurrentUser(user)
            await createUserDocumentFromAuth(user, { displayName })
            resetFormFields()

        } catch (error) {
            if (error.code == 'auth/email-already-in-use') {
                alert('EMAIL ALREADY IN USE')
            } else {
                console.log("ERRO AO CRIAR USUARIO", error)
            }
        }
    }


    const handleChange = (event) => {
        const { name, value } = event.target

        setFormFields({ ...formFields, [name]: value })
    }

    return (
        <div className="sign-up-container">
            <h2>Don't have a account</h2>
            <span>Sign up with your Email And Password</span>
            <form onSubmit={handleSubmit}>

                <FormInput
                label="Display Name"
                inputOptions= {{
                    type:'text',
                    required:true,
                    onChange: handleChange,
                    name: "displayName",
                    value: displayName
                }}/>


                <FormInput
                label="Email"
                inputOptions= {{
                    type:'email',
                    required:true,
                    onChange: handleChange,
                    name: "email",
                    value: email
                }}/>
                


                <FormInput
                label="Password"
                inputOptions= {{
                    type:'password',
                    required:true,
                    onChange: handleChange,
                    name: "password",
                    value: password
                }}/>
                

                <FormInput
                label="Confirm Password"
                inputOptions= {{
                    type:'password',
                    required:true,
                    onChange: handleChange,
                    name: "confirmPassword",
                    value: confirmPassword
                }}/>
                <Button  type='submit' children="Sign Up"></Button>
            </form>
        </div >
    )
}

export default SignUpForm