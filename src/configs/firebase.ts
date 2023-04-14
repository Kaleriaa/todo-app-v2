// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: 'AIzaSyDQzCaa7G2cp1Jskres0hBY4ZQu_cNkeb8',
    authDomain: 'todo-v2-1d15a.firebaseapp.com',
    projectId: 'todo-v2-1d15a',
    storageBucket: 'todo-v2-1d15a.appspot.com',
    messagingSenderId: '263719467579',
    appId: '1:263719467579:web:4b9e2a609e9e5641447a1e',
    measurementId: 'G-JXYBJZ1SPN',
}

const app = initializeApp(firebaseConfig)
export const fireStore = getFirestore(app)
export const auth = getAuth(app)
