import { careers } from '@/models/careers'
import { ChangeEventHandler, Dispatch, SetStateAction, createContext } from 'react'

export interface GlobalContextProps {
  name: string
  state: string
  code: number
  getNewCareer: ChangeEventHandler<HTMLInputElement | HTMLSelectElement>
  getCareerCode: (number: number) => void
  setGetCareer: Dispatch<SetStateAction<careers>>
}

const GlobalContext = createContext<GlobalContextProps>({
  name: '',
  state: 'activo',
  code: 1,
  getNewCareer: () => {},
  getCareerCode: () => {},
  setGetCareer: () => {}
})

export { GlobalContext }
