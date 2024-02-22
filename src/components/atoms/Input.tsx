import clsx from 'clsx'

interface InputProps {
  className?: string
  type: string
  placeholder: string
}

function Input({ className, type, placeholder }: InputProps) {
  const styles = clsx('', className)
  return <input type={type} className={styles} placeholder={placeholder} />
}

export default Input
