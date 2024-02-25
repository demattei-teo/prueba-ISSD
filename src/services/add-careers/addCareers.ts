import { DocumentData, DocumentReference, addDoc, collection, doc, updateDoc } from 'firebase/firestore'
import { db } from '../config/firebase'

interface NewData {
  name: string
  state: string
  code: number
}

async function addData(newData: NewData): Promise<DocumentReference<DocumentData, DocumentData>> {
  const response = await addDoc(collection(db, 'careers'), newData)
  const document = doc(db, 'careers', response.id)
  await updateDoc(document, { id: response.id })
  return response
}

export default addData
