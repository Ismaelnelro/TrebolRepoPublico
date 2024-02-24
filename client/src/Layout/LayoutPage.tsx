import React, { startTransition } from 'react'

import '../styles/avatar.css'
import { useAppSelector } from '../store/redux-reducer';

const LayoutPage = ({ children }: { children: React.ReactNode }) => {

  const { name, avatar } = useAppSelector(state => state.profile)


  const OnLoginPageRedirect = () => {
    startTransition(() => {
      window.location.href = '/admin/settings';
    });
  }


  return (
    <div className=' max-w-[900px] min-w-[320px] w-full  h-auto  flex flex-col items-center gap-4 relative'>
      <div className='w-full h-[10rem]  flex justify-center p-3' onClick={OnLoginPageRedirect}>
        <img id='avatar_perfil' src={`./src/assets/avatars/avatar${avatar}.jpg`} alt="avatar perfil"
         className='w-full h-full' />
      </div>

      <div className='w-full h-8 text-center font-bold '>
        <p>{name ? '@' + name : "@nametechs"}</p>
      </div>

      {children}
    </div>
  )
}

export default LayoutPage