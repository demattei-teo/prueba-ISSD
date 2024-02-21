import clsx from 'clsx'

interface ParagraphProps {
  type: 'p' | 'span'
  children: React.ReactNode
  className?: string
}

function Paragraph({ type, children, className }: ParagraphProps) {
  const ParagraphType = type
  const paragraphStyles = clsx('', className)

  return <ParagraphType className={paragraphStyles}>{children}</ParagraphType>
}

export default Paragraph
