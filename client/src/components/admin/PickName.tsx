/*Redux*/
import { useAppSelector } from "../../store/redux-reducer";

export const PickName = ({ handleName }: { handleName: (e: React.ChangeEvent<HTMLInputElement>) => void }) => {

  const { user } = useAppSelector(state => state.auth);

  return (
    <div id='ChooseName' className='w-full flex flex-col'>
      <h1 className='m-auto text-lg font-light bg-white w-[50%]'>Name</h1>
      <input type="text" id="username" name="username" placeholder={user?.profile.userName}
        className='
        w-[50%] h-9 m-auto p-2 
        text-black text-center 
        border-[1px] border-t-0 border-l-0 border-r-0 border-b-2 border-b-black 
        bg-transparent 
        focus:outline-none'
        onChange={(e) => handleName(e)} />
    </div>
  )
}
