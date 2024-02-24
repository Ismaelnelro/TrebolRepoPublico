import React from 'react'

const AVATARS = ['1', '2', '3', '4', '5'];

export const PickAvatar = ({ handleAvatar }: { handleAvatar: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void }) => {
  return (
    <div id='ChooseAvatar' className='w-full flex flex-col gap-2'>
      <h1 className=' text-lg font-light bg-white w-full'>Avatars</h1>

      <div id='color_options' className='border-[1px] border-slate-600 rounded-md shadow-2xl max-w-[100%] w-auto  m-auto p-4 h-auto flex flex-wrap justify-center gap-4'>
        {AVATARS.map((avatar, i) => (
          <img
            key={i}
            id={avatar}
            src={`/assets/avatars/avatar${avatar}.jpg`}
            className={`w-10 h-10 cursor-pointer`}
            onClick={(e) => handleAvatar(e)}
          />

        ))}
      </div>
    </div>
  )
}
