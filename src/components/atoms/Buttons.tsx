import clsx from 'clsx'
import { MouseEventHandler } from 'react'

interface ButtonProps {
  children: React.ReactNode
  className: string
  onClick?: MouseEventHandler<HTMLButtonElement>
  disabled?: boolean
}

function Button({ children, className, onClick, disabled }: ButtonProps) {
  const buttonStyles = clsx(className)

  if (disabled) {
    return (
      <button className={buttonStyles} disabled onClick={onClick}>
        {children}
      </button>
    )
  } else {
    return (
      <button className={buttonStyles} onClick={onClick}>
        {children}
      </button>
    )
  }
}

export default Button
