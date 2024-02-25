'use client'

import { useState } from 'react'
import { IconSearch, Input } from '..'

interface SearchProps {
  getValue: (value: string) => void
}

function Search({ getValue }: SearchProps) {
  const [inputValue, setInputValue] = useState('')
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value)
  }
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    getValue(inputValue)
  }
  return (
    <form className='w-full md:w-1/3 lg:w-1/4' onSubmit={handleSubmit}>
      <div className='relative'>
        <Input
          type='text'
          className='w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:shadow-outline'
          placeholder='Buscar...'
          value={inputValue}
          onChange={handleInputChange}
        />
        <button type='submit' className='absolute top-0 left-0 flex items-center h-full ml-2'>
          <IconSearch />
        </button>
      </div>
    </form>
  )
}

export default Search
