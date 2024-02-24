import { DocumentData, DocumentReference, addDoc, collection } from 'firebase/firestore'
import { db } from '../config/firebase'

interface NewData {
  name: string
  state: string
  code: number
}

async function addData(newData: NewData): Promise<DocumentReference<DocumentData, DocumentData>> {
  const response = await addDoc(collection(db, 'careers'), newData)

  return response
}

export default addData
