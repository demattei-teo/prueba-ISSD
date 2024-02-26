import { DocumentData, doc, updateDoc } from 'firebase/firestore'
import { db } from '../config/firebase'

async function updateCareer({ id, name, state }: DocumentData) {
  const response = await updateDoc(doc(db, 'careers', id), { name, state })

  return response
}

export default updateCareer
