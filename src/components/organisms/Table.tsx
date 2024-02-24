'use client'

import getCareers from '@/services/get-careers/getCareers'
import clsx from 'clsx'
import { DocumentData } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { TableData, WrapperTD } from '..'
interface TableProps {
  className?: string
}

function Table({ className }: TableProps) {
  const [stateCareers, setStateCareers] = useState<DocumentData[]>([])
  useEffect(() => {
    getCareers()
      .then((response) => setStateCareers(response))
      .catch((error) => console.log(error))
  }, [])
  const style = clsx('border sm:w-full border-collapse text-center', className)
  return (
    <section className='overflow-x-auto flex items-center sm:justify-center overflow-hidden max-w-2xl w-full'>
      <table className={style}>
        <thead>
          <WrapperTD className='bg-slate-200'>
            <TableData>Codigo</TableData>
            <TableData className=''>Nombre</TableData>
            <TableData>Estado</TableData>
          </WrapperTD>
        </thead>
        <tbody>
          {stateCareers.map((careers, index) => {
            return (
              <WrapperTD key={index}>
                <TableData>{careers.code}</TableData>
                <TableData className='whitespace-pre'>{careers.name}</TableData>
                <TableData>{careers.state}</TableData>
              </WrapperTD>
            )
          })}
        </tbody>
      </table>
    </section>
  )
}

export default Table
