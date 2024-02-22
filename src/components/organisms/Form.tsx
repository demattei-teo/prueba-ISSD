import clsx from 'clsx'
import { Title, WrapperInput } from '..'

interface FormProps {
  title: string
  className: string
}

function Form({ title, className }: FormProps) {
  const style = clsx('p-7 gap-5 rounded-[16px] grid shadow-md w-[min(30vw,_500px)] min-w-[280px] max-w-lg', className)
  return (
    <form className={style}>
      <Title className='font-bold text-2xl pb-5' headingLevel='h3'>
        {title}
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
    </form>
  )
}

export default Form
