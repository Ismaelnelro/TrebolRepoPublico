/*interface*/
import { IUserProfile } from '../../models/user.interface';

/*Component*/
import Trebol from '../Trebol';


interface IProfileProps {
    profile: IUserProfile;
}

const UserViewComponent = ({ profile }: IProfileProps) => {
    return (
        <>
            <div className='flex flex-col justify-center items-center
        flex-wrap
        pb-10
        gap-4 h-fit
        '>
                {/* <section className='flex flex-col items-center gap-4'> */}
                <section className='flex flex-col items-center gap-4'>
                    <img id='avatar_perfil'
                        src={`./../src/assets/avatars/avatar${profile?.avatar}.jpg`}
                        alt="avatar perfil"
                        width={150} height={150}
                        className='rounded-full mt-5'
                    />
                    <p className='font-medium italic text-lg animate-pulse mb-5'>{profile?.userName ? '#' + profile?.userName : "@nametechs"}</p>
                </section>

                {profile?.network?.map((net, index) => (
                    <Trebol key={index} net={net} />
                ))
                }
            </div>
        </>
    )
}

export default UserViewComponent;