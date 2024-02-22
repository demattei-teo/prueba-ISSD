import clsx from 'clsx'
import { Input, Select } from '..'

interface WrapperInputProps {
  type: 'input' | 'select'
  className?: string
  classNameInput?: string
  classNameSelect?: string
  typeInput: string
  placeholderInput: string
  contentLabel: string
}

function WrapperInput({
  contentLabel,
  className,
  classNameInput,
  typeInput,
  placeholderInput,
  classNameSelect,
  type
}: WrapperInputProps) {
  const style = {
    wrapper: clsx('flex flex-col gap-3', className),
    input: clsx('p-1.5 rounded-md border', classNameInput)
  }
  return (
    <div className={style.wrapper}>
      <label className=''>{contentLabel}</label>
      {type === 'input' && <Input type={typeInput} className={style.input} placeholder={placeholderInput} />}
      {type === 'select' && <Select className={classNameSelect} options={['Activa', 'Inactiva']} />}
    </div>
  )
}

export default WrapperInput
