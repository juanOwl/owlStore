import { initializeApp } from 'firebase/app'
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore, doc, getDoc, setDoc} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCm4JcAtP1hPTmvLNoMo6Cojz1p9X6KlYA",
    authDomain: "owlstore-db.firebaseapp.com",
    projectId: "owlstore-db",
    storageBucket: "owlstore-db.appspot.com",
    messagingSenderId: "641406552812",
    appId: "1:641406552812:web:e462eba2070d399cb033c9"
  };
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider()

  provider.setCustomParameters({
    prompt: 'select_account'
  })

  export const auth = getAuth()
  export const signInWithGooglePopup = () => signInWithPopup(auth, provider)

  export const db = getFirestore()

  export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid )

    console.log(userDocRef)

    const userSnapshot = await getDoc(userDocRef)
    console.log(userSnapshot.exists())
    

    if(!userSnapshot.exists()) {
      const  { displayName, email } = userAuth
      const createdAt = new Date()

      try {
        await setDoc(userDocRef, {
          displayName,
          email,
          createdAt
        })
      } catch (error) {
          console.log('erro ao criar usuario', error.message)
      }
    }
    return userDocRef
  }