/*Redux store*/
import { useAppSelector } from "../store/redux-reducer";

/*React icons*/
import { IoIosLogOut } from "react-icons/io";

/*Hooks*/
import { useAuthStore } from "../hooks/useAuthStore";

/*Component*/
import Trebol from "../components/Trebol";

/*Styles*/
import '../styles/avatar.css'

const HomePage = () => {

  const { user } = useAppSelector(state => state.auth);
  const { startLogOut, startRedirect } = useAuthStore();

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

  const renderNetwork = () => {
    return user?.profile?.network?.map((net, index) => (
      <Trebol key={index} net={net} />
    ));
  };


  const OnLogout = () => {
    startLogOut();
  }


  return (
    <>
      {user && (
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
            {renderNetwork()}
          </div>
        </div>
      )}
    </>
  );
};

export default HomePage;
