'use client'

import { Input, Title, WrapperInput } from '@/components'
import clsx from 'clsx'

import { useGlobalProvider } from '@/hooks/useGloblalProvider'
import { generateRandomNumber } from '@/utils/randomNumber'
import { useEffect, useState } from 'react'

function FormAddCareer() {
  const [getNumber, setGetNumber] = useState<number>(0)
  const { getNewCareer, name, state, getCareerCode } = useGlobalProvider()
  useEffect(() => {
    generateRandomNumber()
      .then((answer) => {
        setGetNumber(answer)
        getCareerCode(answer)
      })
      .catch((error) => console.log(error))
  }, [])
  const style = clsx('p-7 gap-5 rounded-[16px] grid shadow-md w-full max-w-md min-w-[280px]')
  return (
    <form className={style}>
      <Title className='font-bold text-2xl pb-5' headingLevel='h3'>
        Agregar una carrera
      </Title>
      <WrapperInput className='' contentLabel='Codígo Carrera'>
        <Input
          name='code'
          disabled
          type='number'
          className='p-1.5 rounded-md border bg-slate-200'
          value={getNumber}
          onChange={getNewCareer}
        />
      </WrapperInput>
      <WrapperInput contentLabel='Nombre Carrera'>
        <Input className='' name='name' value={name} onChange={getNewCareer} />
      </WrapperInput>
      <WrapperInput contentLabel='Estado'>
        <select className='p-1.5 rounded-md border' name='state' value={state} onChange={getNewCareer}>
          <option value='activo'>activo</option>
          <option value='inactivo'>inactivo</option>
        </select>
      </WrapperInput>
    </form>
  )
}

export default FormAddCareer
