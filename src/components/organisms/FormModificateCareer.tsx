'use client'

import { Input, Title, WrapperInput } from '@/components'
import clsx from 'clsx'

function Page() {
  const style = clsx('p-7 gap-5 rounded-[16px] grid shadow-md w-full max-w-md min-w-[280px]')
  return (
    <form className={style}>
      <Title className='font-bold text-2xl pb-5' headingLevel='h3'>
        Modificar Carrera
      </Title>
      <WrapperInput className='' contentLabel='Codígo Carrera'>
        <Input name='code' disabled type='number' className='p-1.5 rounded-md border bg-slate-200' value='001' />
      </WrapperInput>
      <WrapperInput contentLabel='Nombre Carrera'>
        <Input className='' name='name' />
      </WrapperInput>
      <WrapperInput contentLabel='Estado'>
        <select className='p-1.5 rounded-md border' name='state'>
          <option value='activo'>activo</option>
          <option value='inactivo'>inactivo</option>
        </select>
      </WrapperInput>
    </form>
  )
}

export default Page
