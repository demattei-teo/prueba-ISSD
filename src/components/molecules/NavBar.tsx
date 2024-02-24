'use client'

import { useGlobalProvider } from '@/hooks/useGloblalProvider'
import addData from '@/services/add-careers/addCareers'
import clsx from 'clsx'
import { usePathname, useRouter } from 'next/navigation'
import { toast } from 'sonner'
import { Buttons, IconClose, IconEdit, IconEye, IconPlus, IconSave, IconUniversity, Item, Link, List, Title } from '..'
import Button from '../atoms/Buttons'

interface NavBarProps {
  className?: string
  changeState: (state: boolean) => void
}

function NavBar({ className, changeState }: NavBarProps) {
  const { name, state, code } = useGlobalProvider()

  const pathname = usePathname()
  const router = useRouter()
  const pushNewCareer = async () => {
    await toast.promise(addData({ name, state, code }), {
      loading: 'Enviando carrera',
      success: () => {
        setTimeout(() => {
          router.push('/')
        }, 2000)
        return '¡Carrera enviada con exito!'
      },
      error: '¡Ocurrió un error al enviar la carrera! Intenta de nuevo por favor.'
    })
  }

  const styles = {
    navbar: clsx('h-screen lg:h-auto  bg-sky-500 text-white', className)
  }

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
        {pathname === '/agregar-carrera' && (
          <Item className=''>
            <Buttons
              onClick={async () => await pushNewCareer()}
              className='flex group hover:text-gray-200 transition-colors ease-linear duration-200 items-center gap-3'
            >
              <IconSave className='fill-white group-hover:fill-gray-200 transition-colors ease-linear duration-200' />
              Guardar carrera
            </Buttons>
          </Item>
        )}

        {pathname === '/modificar-carrera' && (
          <Item className=''>
            <Buttons className='flex group hover:text-gray-200 transition-colors ease-linear duration-200 items-center gap-3'>
              <IconSave className='fill-white group-hover:fill-gray-200 transition-colors ease-linear duration-200' />
              Guardar carrera
            </Buttons>
          </Item>
        )}

        {pathname === '/agregar-carrera' && (
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

        {pathname === '/modificar-carrera' && (
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

        {pathname === '/' && (
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

        {pathname === '/' && (
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
