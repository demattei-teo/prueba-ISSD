import clsx from 'clsx'
import { usePathname } from 'next/navigation'
import { IconClose, IconEdit, IconEye, IconPlus, IconSave, IconUniversity, Item, Link, List, Title } from '..'
import Button from '../atoms/Buttons'

interface NavBarProps {
  className?: string
  changeState: (state: boolean) => void
}

function NavBar({ className, changeState }: NavBarProps) {
  const router = usePathname()
  const styles = {
    navbar: clsx('h-screen lg:h-auto  bg-sky-500 text-white', className)
  }
  console.log(router)
  return (
    <nav className={styles.navbar}>
      <div className='flex justify-between gap-7 items-center lg:hidden'>
        <Title className='font-semibold' headingLevel='h2'>
          Prueba ISSD
        </Title>
        <Button className='' onClick={() => changeState(false)}>
          <IconClose className='fill-white' />
        </Button>
      </div>
      <List className='flex flex-col gap-6 lg:flex-row'>
        <Item className=''>
          <Link
            className='flex group hover:text-gray-200 transition-colors ease-linear duration-200 items-center gap-3'
            href='/agregar-carrera'
          >
            <IconPlus className='fill-white group-hover:fill-gray-200 transition-colors ease-linear duration-200' />
            Agregar Carrera
          </Link>
        </Item>
        <Item className=''>
          <Link
            className='flex group hover:text-gray-200 transition-colors ease-linear duration-200 items-center gap-3'
            href='/modificar-carrera'
          >
            <IconEdit className='fill-white group-hover:fill-gray-200 transition-colors ease-linear duration-200' />
            Modificar Carrera
          </Link>
        </Item>
        <Item className=''>
          <Link
            className='flex group hover:text-gray-200 transition-colors ease-linear duration-200 items-center gap-3'
            href='#'
          >
            <IconSave className='fill-white group-hover:fill-gray-200 transition-colors ease-linear duration-200' />
            Guardar Carrera
          </Link>
        </Item>
        {router === '/agregar-carrera' && (
          <Item className=''>
            <Link
              className='flex group hover:text-gray-200 transition-colors ease-linear duration-200 items-center gap-3'
              href='/'
            >
              <IconUniversity className='fill-white group-hover:fill-gray-200 transition-colors ease-linear duration-200' />
              Ver Carreras
            </Link>
          </Item>
        )}
        {router === '/modificar-carrera' && (
          <Item className=''>
            <Link
              className='flex group hover:text-gray-200 transition-colors ease-linear duration-200 items-center gap-3'
              href='/'
            >
              <IconUniversity className='fill-white group-hover:fill-gray-200 transition-colors ease-linear duration-200' />
              Ver Carreras
            </Link>
          </Item>
        )}
        {router === '/' && (
          <Item className=''>
            <Link
              className='flex group hover:text-gray-200 transition-colors ease-linear duration-200 items-center gap-3'
              href='/agregar-carrera'
            >
              <IconEye className='fill-white group-hover:fill-gray-200 transition-colors ease-linear duration-200' />
              Consultar Materias
            </Link>
          </Item>
        )}
        {router === '/' && (
          <Item className=''>
            <Link
              className='flex group hover:text-gray-200 transition-colors ease-linear duration-200 items-center gap-3'
              href='/agregar-carrera'
            >
              <IconEye className='fill-white group-hover:fill-gray-200 transition-colors ease-linear duration-200' />
              Consultar Planes
            </Link>
          </Item>
        )}
      </List>
    </nav>
  )
}

export default NavBar
