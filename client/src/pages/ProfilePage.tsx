import { useEffect, } from 'react'

/*Redux y thunks*/
import { useAppDispatch, useAppSelector } from '../store/redux-reducer';
import { getProfile } from '../store/feature/profiles/thunks';

/*Components*/
import NotFoundPageComponent from '../components/ui/NotFoundPageComponent';
import UserViewComponent from '../components/ui/UserViewComponent';
import Loader from '../components/ui/Loader';

/*Styles*/
import '../styles/avatar.css'// Estilos para la foto del avatar



const ProfilePage = () => {

    const dispatch = useAppDispatch();
    const { user, isLoading } = useAppSelector(state => state.profiles)

    useEffect(() => {
        dispatch(getProfile({ path: location.pathname }))
    }, [])


    return (
        <>
            {isLoading && <Loader />}
            <div className=' w-full  min-w-[320px] min-h-screen relative'
                style={{
                    backgroundColor: `${(user?.styles?.backgroundColor !== "") ? `#${user?.styles?.backgroundColor}` : "#22c55e"}`
                }}
            >
                {user ?
                    <UserViewComponent profile={user} />
                    :
                    <NotFoundPageComponent />}
            </div>
        </>
    )
}

export default ProfilePage