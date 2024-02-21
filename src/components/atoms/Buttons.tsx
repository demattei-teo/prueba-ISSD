import clsx from 'clsx'

interface ButtonProps {
  children: React.ReactNode
  className: string
}

function Button({ children, className }: ButtonProps) {
  const buttonStyles = clsx(className)

  return <button className={buttonStyles}>{children}</button>
}

export default Button
