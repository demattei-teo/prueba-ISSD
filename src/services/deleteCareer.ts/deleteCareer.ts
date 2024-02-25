import { deleteDoc, doc } from 'firebase/firestore'
import { db } from '../config/firebase'

async function deleteDocument(id: string) {
  const response = await deleteDoc(doc(db, 'careers', id))

  return response
}

export default deleteDocument
