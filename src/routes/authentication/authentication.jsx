import { signInWithGooglePopup, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils'
import SignUpForm from '../../components/sign-up/sign-up' 
import SignInForm from '../../components/sign-in/sign-in'
import './authentication.styles.scss'

const Authentication = () => {
    return(
        <div className='authentication-container'>
            <SignInForm/>
            <SignUpForm />
        </div>
    )
}

export default Authentication