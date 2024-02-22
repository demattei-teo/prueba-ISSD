import clsx from 'clsx'

interface WrapperTDProps {
  children: React.ReactNode
  className?: string
}

function WrapperTD({ children, className }: WrapperTDProps) {
  const style = clsx('flex items-center justify-between', className)
  return <tr className={style}>{children}</tr>
}

export default WrapperTD
