import clsx from 'clsx'

interface TableDataProps {
  className?: string
  children: React.ReactNode
}

function TableData({ className, children }: TableDataProps) {
  const style = clsx(' p-6', className)
  return <td className={style}>{children}</td>
}

export default TableData
