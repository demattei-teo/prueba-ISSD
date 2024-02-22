import clsx from 'clsx'

interface SelectProps {
  className?: string
  options: string[]
}

function Select({ className, options }: SelectProps) {
  const style = clsx('p-1.5 rounded-md border', className)
  return (
    <div>
      <select name='Estado' className={style}>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  )
}

export default Select
