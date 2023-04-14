import { auth } from 'configs/firebase'
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'

const provider = new GoogleAuthProvider()

export const login = async () => {
    const { user } = await signInWithPopup(auth, provider)
    return user
}
