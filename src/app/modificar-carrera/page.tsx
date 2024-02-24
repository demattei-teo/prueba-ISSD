'use client'
import { Title, WrapperInput } from '@/components'
import clsx from 'clsx'

function Page() {
  const style = clsx('p-7 gap-5 rounded-[16px] grid shadow-md w-[min(30vw,_500px)] min-w-[280px]')
  return (
    <form
      className={style}
      onSubmit={(e) => {
        e.preventDefault()
        console.log('modificar carrera')
      }}
    >
      <Title className='font-bold text-2xl pb-5' headingLevel='h3'>
        Agregar carrera
      </Title>
      <WrapperInput
        type='input'
        contentLabel='Codígo Carrera'
        className=''
        classNameInput=''
        typeInput='number'
        placeholderInput=''
      />
      <WrapperInput
        contentLabel='Nombre Carrera'
        className=''
        classNameInput=''
        typeInput='text'
        placeholderInput=''
        type='input'
      />
      <WrapperInput
        contentLabel='Estado'
        className=''
        classNameInput=''
        typeInput='text'
        placeholderInput=''
        type='select'
      />
      <button className='bg-sky-500 text-white px-8 py-2.5 justify-self-center rounded'>enviar</button>
    </form>
  )
}

export default Page
