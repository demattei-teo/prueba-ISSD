import clsx from 'clsx'
import { TableData, WrapperTD } from '..'

interface TableProps {
  className?: string
}

function Table({ className }: TableProps) {
  const style = clsx('border sm:w-full border-collapse text-center', className)
  return (
    <section className='overflow-x-auto flex items-center sm:justify-center overflow-hidden max-w-2xl w-full'>
      <table className={style}>
        <WrapperTD className='bg-slate-200'>
          <TableData>Codigo</TableData>
          <TableData className=''>Nombre</TableData>
          <TableData>Estado</TableData>
        </WrapperTD>
        <WrapperTD>
          <TableData>001</TableData>
          <TableData className='whitespace-pre'>Analista de sistemas de computacion</TableData>
          <TableData>Activa</TableData>
        </WrapperTD>
        <WrapperTD>
          <TableData>002</TableData>
          <TableData>Desarrollo de sofware</TableData>
          <TableData>Activa</TableData>
        </WrapperTD>
      </table>
    </section>
  )
}

export default Table
