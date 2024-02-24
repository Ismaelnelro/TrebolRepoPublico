import React from 'react'

const COLORS = ['1D5D9B', '33BBC5', 'D4E2D4', '6528F7', 'FD8D14'];

export const PickBG = ({ handleBackGroundColor }: { handleBackGroundColor: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void }) => {
  return (
    <div id='ChooseBG' className='w-full flex flex-col gap-2'>
      <h1 className=' text-lg font-light bg-white w-full '>Backgorund Color</h1>

      <div id='color_options' className='border-[1px] border-slate-600 rounded-md shadow-xl max-w-[100%] w-auto  m-auto p-4 h-auto flex flex-wrap justify-center gap-4'>
        {COLORS.map((color, i) => (
          <div
            key={i}
            id={color}
            className={`w-10 h-10 cursor-pointer`}
            style={{ "backgroundColor": `#${color}` }}
            onClick={(e) => handleBackGroundColor(e)}
          >

          </div>
        ))}
      </div>
    </div>
  )
}
