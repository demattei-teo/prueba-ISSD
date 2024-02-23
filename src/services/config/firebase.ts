'use client'
// Import the functions you need from the SDKs you need
import { getAnalytics } from 'firebase/analytics'
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBizp03z-0wqTbjebwkd2kbi2VGFaFakc4',
  authDomain: 'prueba-issd.firebaseapp.com',
  projectId: 'prueba-issd',
  storageBucket: 'prueba-issd.appspot.com',
  messagingSenderId: '847983019042',
  appId: '1:847983019042:web:5e6c0c5a85118b5eabf67b',
  measurementId: 'G-T0NQVWT31D'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

getAnalytics(app)

export const db = getFirestore(app)
