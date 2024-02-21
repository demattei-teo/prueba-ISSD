import clsx from 'clsx'
import NextLink from 'next/link'
import React from 'react'

interface LinkProps {
  children: React.ReactNode
  href: string
  className?: string
}

function Link({ children, href, className }: LinkProps) {
  const linkStyles = clsx('', className)
  return (
    <NextLink className={linkStyles} href={href}>
      {children}
    </NextLink>
  )
}

export default Link
