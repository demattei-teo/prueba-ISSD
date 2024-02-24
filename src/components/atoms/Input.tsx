'use client'

import clsx from 'clsx'
import { forwardRef } from 'react'

type InputHTMLAtributes = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'className'>

interface Props extends InputHTMLAtributes {
  /** Optional custom CSS class names to apply to the button */
  className?: string
}

const Input = forwardRef<HTMLInputElement, Props>(function Input({ className, ...rest }: Props, ref) {
  const classes = clsx('p-1.5 rounded-md border', className)

  if (rest?.type === 'password') {
    return (
      <div className='relative w-full'>
        <input ref={ref} className={classes} {...rest} />
      </div>
    )
  }
  return <input ref={ref} className={classes} {...rest} />
})

export default Input
