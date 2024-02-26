'use client'

import { Input, Title, WrapperInput } from '@/components'
import { useGlobalProvider } from '@/hooks/useGloblalProvider'
import clsx from 'clsx'

function Page() {
  const style = clsx('p-7 gap-5 rounded-[16px] grid shadow-md w-full max-w-md min-w-[280px]')

  const { modificateName, modificateState, modificateCode, modificateCareerData } = useGlobalProvider()

  return (
    <form className={style}>
      <Title className='font-bold text-2xl pb-5' headingLevel='h3'>
        Modificar Carrera
      </Title>
      <WrapperInput className='' contentLabel='Codígo Carrera'>
        <Input
          name='code'
          disabled
          type='number'
          className='p-1.5 rounded-md border bg-slate-200'
          value={modificateCode}
        />
      </WrapperInput>
      <WrapperInput contentLabel='Nombre Carrera'>
        <Input className='' name='name' value={modificateName} onChange={modificateCareerData} />
      </WrapperInput>
      <WrapperInput contentLabel='Estado'>
        <select
          className='p-1.5 rounded-md border'
          onChange={modificateCareerData}
          value={modificateState}
          name='state'
        >
          <option value='activo'>activo</option>
          <option value='inactivo'>inactivo</option>
        </select>
      </WrapperInput>
    </form>
  )
}

export default Page
