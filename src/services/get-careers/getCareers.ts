import { collection, getDocs } from 'firebase/firestore'
import { db } from '../config/firebase'

async function getCareers() {
  const collectionRef = await getDocs(collection(db, 'careers'))
  const careers = collectionRef.docs.map((doc) => doc.data())
  return careers
}

export default getCareers
