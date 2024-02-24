import { ChangeEventHandler, createContext } from 'react'

export interface GlobalContextProps {
  name: string
  state: string
  code: number
  getNewCareer: ChangeEventHandler<HTMLInputElement | HTMLSelectElement>
  getCareerCode: (number: number) => void
}

const GlobalContext = createContext<GlobalContextProps>({
  name: '',
  state: 'activo',
  code: 1,
  getNewCareer: () => {},
  getCareerCode: () => {}
})

export { GlobalContext }
