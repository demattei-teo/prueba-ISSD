export interface ListProps {
  children: React.ReactNode
  className: string
}

function List({ children, className }: ListProps) {
  return <ul className={className}>{children}</ul>
}

export default List
