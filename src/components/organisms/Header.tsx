'use client'

import clsx from 'clsx'
import { useState } from 'react'
import { IconMenu, NavBar, Title } from '..'

function Header() {
  const [state, setState] = useState(false)
  function changeState(state: boolean) {
    setState(state)
  }

  const styles = {
    navbar: clsx(
      'w-full z-30 fixed flex flex-col content-start gap-20 p-4 inset-y-0 left-0 transform translate-x-0 transition-transform duration-300 ease-in-out lg:relative lg:w-auto lg:translate-x-0 bg-white lg:p-0 lg:flex-row',
      !state && 'translate-x-[100%]'
    )
  }
  return (
    <header className='grid p-4 bg-sky-500 lg:flex lg:justify-between text-white'>
      <div className='flex justify-between'>
        <Title className='font-semibold' headingLevel='h1'>
          Prueba ISSD
        </Title>
        <button className='lg:hidden' onClick={() => changeState(true)}>
          <IconMenu className='fill-white' />
        </button>
      </div>
      <NavBar className={styles.navbar} changeState={changeState} />
    </header>
  )
}

export default Header
