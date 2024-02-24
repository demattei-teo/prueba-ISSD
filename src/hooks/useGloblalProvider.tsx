import { GlobalContext, GlobalContextProps } from '@/context/global/globalContext'

import { useContext } from 'react'

const useGlobalProvider = (): GlobalContextProps => {
  const context = useContext(GlobalContext)
  return context
}

export { useGlobalProvider }
