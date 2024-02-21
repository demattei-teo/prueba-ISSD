import clsx from 'clsx'

export interface TitleProps {
  children: React.ReactNode
  className: string
  headingLevel: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}

function Title({ children, className, headingLevel = 'h2' }: TitleProps) {
  const HeadingTag = headingLevel
  const style = clsx('', className)
  return <HeadingTag className={style}>{children}</HeadingTag>
}

export default Title
