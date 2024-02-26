import { db } from '@/services/config/firebase'
import { DocumentData, collection, onSnapshot, query } from 'firebase/firestore'
import { useEffect, useState } from 'react'

function useRealTimeData() {
  const [stateCareers, setStateCareers] = useState<DocumentData[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const q = query(collection(db, 'careers'))
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const careers = querySnapshot.docs.map((doc) => doc.data())
      setStateCareers(careers)
      setIsLoading(false)
    })

    return () => unsubscribe()
  }, [])

  return { stateCareers, isLoading }
}

export default useRealTimeData
