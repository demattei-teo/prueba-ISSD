'use client'

import { addDoc, collection } from 'firebase/firestore'
import { db } from '../config/firebase'

interface NewData {
  name: string
  state: string
  code: number
}

async function addData(newData: NewData): Promise<void> {
  addDoc(collection(db, 'careers'), newData)
    .then(() => {
      console.log('Document successfully written!')
      window.location.href = '/'
    })
    .catch((error) => {
      console.error('Error writing document: ', error)
    })
}

export default addData
