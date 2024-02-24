
/*Hooks*/
import { useAuthStore } from "../../hooks/useAuthStore";
import useProfileHooks from "../../hooks/useProfileHooks";


/*Components*/
import { PickName } from "../../components/admin/PickName";
import { PickBG } from "../../components/admin/PickBG";
import { PickAvatar } from "../../components/admin/PickAvatar";
import { AddLinks } from "../../components/admin/AddLinks";


/*Styles*/
import '../../styles/trebol.css'
import { useAppDispatch, useAppSelector } from "../../store/redux-reducer";
import { IoIosLogOut } from "react-icons/io";


const AdminPage = () => {

  const {
    handleBackGroundColor,
    handleAvatar,
    handleName,
    startSavingNewProfile
  } = useProfileHooks();

  const { startRedirect, startLogOut } = useAuthStore();
  const { user } = useAppSelector(state => state.auth);
  const dispatch = useAppDispatch();


  const renderAvatar = () => {
    const avatarSrc = user?.profile?.avatar ? `/assets/avatars/avatar${user.profile.avatar}.jpg` : `/assets/avatars/avatard.jpg`;
    return (
      <span onDoubleClick={() => startRedirect("/admin/settings")}>
        <img
          id='avatar_perfil'
          src={avatarSrc}
          alt="avatar perfil"
          width={150}
          height={150}
          className='rounded-full mt-5'
        />
      </span>
    );
  };

  const renderUserName = () => {
    return <p className='font-medium italic text-lg animate-pulse mb-5'>{user?.profile?.userName ? `#${user.profile.userName}` : "@nametechs"}</p>;
  };


  const OnLogout = () => {
    startLogOut();
  }

  const OnSaveEditUSer = async () => {
    dispatch(startSavingNewProfile())
  }

  return (
    <div className='w-full min-w-[320px] relative min-h-screen' style={{ backgroundColor: user?.profile?.styles.backgroundColor ? `#${user.profile.styles.backgroundColor}` : "#22c55e" }}>
      <span className="text-2xl absolute top-4 right-4 cursor-pointer"
        onClick={OnLogout}
      >
        <IoIosLogOut />
      </span>
      <div className='flex flex-col justify-center items-center flex-wrap pb-10 gap-4 h-fit'>
        <section className='flex flex-col items-center gap-4'>
          {renderAvatar()}
          {renderUserName()}
        </section>

        {/* SECCIIN DE EDICION */}
        <div>
          <button type="button"
            onClick={() => startRedirect('/admin/home')}
            className=' 
            px-14 py-3 
            font-medium uppercase text-lg tracking-wider 
            rounded shadow-gray-800 shadow-2xl 
            bg-white
            cursor-pointer
            '>
            home
          </button>
        </div>

        <div className='
          flex flex-col justify-center items-center text-center gap-10 
          min-w-[350px] max-w-[90%]
          p-6 rounded-lg
          shadow-2xl bg-white mb-20 '>

          <PickName handleName={handleName} />
          <PickBG handleBackGroundColor={handleBackGroundColor} />
          <PickAvatar handleAvatar={handleAvatar} />
          <AddLinks />

          <div>
            <button className='w-52 h-10 bg-blue-300 hover:bg-blue-400 rounded-lg text-black font-bold'
              onClick={OnSaveEditUSer}
            >
              Save
            </button>
          </div>


        </div>
        {/*FIN SECCION DE EDICION */}
      </div>
    </div>
  )
}

export default AdminPage