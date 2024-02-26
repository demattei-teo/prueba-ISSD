import { careers } from '@/models/careers'
import { ChangeEventHandler, Dispatch, SetStateAction, createContext } from 'react'

export interface GlobalContextProps {
  name: string
  state: string
  code: number
  id?: string
  modificateName: string
  modificateState: string
  modificateCode: number
  modificateId?: string
  getNewCareer: ChangeEventHandler<HTMLInputElement | HTMLSelectElement>
  modificateCareerData: ChangeEventHandler<HTMLInputElement | HTMLSelectElement>
  getCareerCode: (number: number) => void
  setGetCareer: Dispatch<SetStateAction<careers>>
  setModificateCareer: Dispatch<SetStateAction<careers>>
}

const GlobalContext = createContext<GlobalContextProps>({
  name: '',
  state: 'activo',
  code: 1,
  modificateName: '',
  modificateState: 'activo',
  modificateCode: 1,
  modificateId: '',
  getNewCareer: () => {},
  modificateCareerData: () => {},
  getCareerCode: () => {},
  setGetCareer: () => {},
  setModificateCareer: () => {}
})

export { GlobalContext }
