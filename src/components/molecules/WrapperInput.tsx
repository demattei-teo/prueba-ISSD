import clsx from 'clsx'

interface WrapperInputProps {
  className?: string
  contentLabel: string
  children: React.ReactNode
}

function WrapperInput({ contentLabel, className, children }: WrapperInputProps) {
  const style = {
    wrapper: clsx('flex flex-col gap-3', className)
  }
  return (
    <div className={style.wrapper}>
      <label className=''>{contentLabel}</label>
      {children}
    </div>
  )
}

export default WrapperInput
