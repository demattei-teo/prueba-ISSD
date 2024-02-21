import clsx from 'clsx'
import { MouseEventHandler } from 'react'

interface ButtonProps {
  children: React.ReactNode
  className: string
  onClick?: MouseEventHandler<HTMLButtonElement>
}

function Button({ children, className, onClick }: ButtonProps) {
  const buttonStyles = clsx(className)

  return (
    <button className={buttonStyles} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button
