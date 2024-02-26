import clsx from 'clsx'
import { MouseEventHandler } from 'react'
import { Link } from '..'

interface ItemProps {
  className?: string
  isLinked?: string
  children?: React.ReactNode
  contentLink?: string
  onclick?: MouseEventHandler<HTMLLIElement>
}
function Item({ className, isLinked, children, contentLink, onclick }: ItemProps) {
  const itemtyle = clsx('', className)

  return (
    <li className={itemtyle} onClick={onclick}>
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
