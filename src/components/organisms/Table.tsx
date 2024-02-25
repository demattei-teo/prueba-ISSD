'use client'

import deleteDocument from '@/services/deleteCareer.ts/deleteCareer'
import clsx from 'clsx'
import { DocumentData } from 'firebase/firestore'

import useRealTimeData from '@/hooks/useRealTimeData'
import { useState } from 'react'
import { List, Search } from '..'
import Button from '../atoms/Buttons'
interface TableProps {
  className?: string
}

function Table({ className }: TableProps) {
  const [filter, setFilter] = useState<string>('')
  const [filterCareers, setFilterCareers] = useState<DocumentData[]>([])
  const { stateCareers, isLoading } = useRealTimeData()

  const getValue = (value: string) => {
    setFilter(value)
    setFilterCareers(stateCareers.filter((career) => career.name.toLowerCase().includes(value.toLowerCase())))
  }

  const style = {
    list: clsx('sm:w-full border-collapse text-center flex flex-col justify-between gap-5 min-w-[500px]', className),
    li: clsx('w-full flex justify-between gap-5 p-2'),
    head: clsx('w-full flex justify-between gap-5 p-2 bg-gray-200'),
    span: clsx('w-[7.5rem]')
  }

  if (isLoading) return <p>Loading...</p>

  return (
    <section className='overflow-x-auto overflow-hidden flex soverflow-hidden max-w-2xl w-full my-[100px] flex-col gap-3'>
      {stateCareers.length >= 10 && <Search getValue={getValue} />}
      <List className={style.list}>
        <li className={style.head}>
          <span className={style.span}>Codigo</span>
          <span className={style.span}>Nombre</span>
          <span className={style.span}>Estado</span>
          <span className={style.span}>Eliminar Carrera</span>
        </li>

        {filter !== '' &&
          filterCareers.map((careers, index) => {
            return (
              <li key={index} className={style.li}>
                <span className={style.span}>{careers.code}</span>
                <span className={style.span}>{careers.name}</span>
                <span className={style.span}>{careers.state}</span>
                <span className={style.span}>
                  <Button
                    onClick={async () => {
                      await deleteDocument(careers.id)
                    }}
                    className='bg-red-500 py-1 text-white px-3 rounded-md'
                  >
                    Delete
                  </Button>
                </span>
              </li>
            )
          })}
        {filter === '' &&
          stateCareers.map((careers, index) => {
            return (
              <li key={index} className={style.li}>
                <span className={style.span}>{careers.code}</span>
                <span className={style.span}>{careers.name}</span>
                <span className={style.span}>{careers.state}</span>
                <span className={style.span}>
                  <Button
                    onClick={async () => {
                      await deleteDocument(careers.id)
                    }}
                    className='bg-red-500 py-1 text-white px-3 rounded-md'
                  >
                    Delete
                  </Button>
                </span>
              </li>
            )
          })}
      </List>
    </section>
  )
}

export default Table
