import { db } from '@/services/config/firebase'
import { collection, getDocs } from 'firebase/firestore'

export async function generateRandomNumber() {
  const collectionRef = await getDocs(collection(db, 'careers'))

  let randomNumber = Math.floor(Math.random() * 100)

  const codeCareers = collectionRef.docs.map((doc) => doc.data().code)
  while (codeCareers.includes(randomNumber)) {
    randomNumber = Math.floor(Math.random() * 100)
  }

  return randomNumber
}
