import clsx from 'clsx'
import { Link } from '..'

interface ItemProps {
  className?: string
  isLinked?: string
  children?: React.ReactNode
  contentLink?: string
}
function Item({ className, isLinked, children, contentLink }: ItemProps) {
  const itemtyle = clsx('', className)

  return (
    <li className={itemtyle}>
      {isLinked && (
        <Link className={className} href={isLinked}>
          {contentLink}
        </Link>
      )}
      {children}
    </li>
  )
}

export default Item
