'use client'

import { careers } from '@/models/careers'
import { useState } from 'react'
import { GlobalContext, GlobalContextProps } from './globalContext'

interface Props {
  children: React.ReactNode
}

const GlobalProvider = ({ children }: Props): JSX.Element => {
  const [getCareer, setGetCareer] = useState<careers>({
    name: '',
    state: 'activo',
    code: 1
  })
  function getCareerCode(number: number) {
    setGetCareer((prevDate) => ({ ...prevDate, code: number }))
  }

  function getNewCareer(event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    const { name } = event.target
    setGetCareer((prevDate) => ({ ...prevDate, [name]: event.target.value }))
  }

  const data: GlobalContextProps = {
    name: getCareer.name,
    state: getCareer.state,
    code: getCareer.code,
    getNewCareer,
    getCareerCode,
    setGetCareer
  }

  return <GlobalContext.Provider value={data}>{children}</GlobalContext.Provider>
}

export { GlobalProvider }
