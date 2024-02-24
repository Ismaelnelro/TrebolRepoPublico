/*Images*/
import logo from '../../public/assets/brand/logo.png'

const LandinPage = () => {
    return (
        <div className='bg-green-400 flex flex-col justify-center items-center gap-16 landscape:min-h-[600px]' style={{ height: "100svh" }} >
            <img className='' src={logo} alt='' width={200} height={200} />
            <p className='italic text-xl text-green-800'> Join Trebol: Connect Your World </p>
            <div className='flex flex-col gap-6 text-center text-xl '>
                <a className=' p-3 px-8  shadow-lg shadow-green-200 font-medium rounded text-green-800 bg-white' href="/auth/login">Login</a>
                <a className=' p-3 px-8  shadow-lg animate-pulse  font-medium rounded  text-white bg-green-600' href="/auth/register">Register</a>
            </div>
        </div>
    )
}

export default LandinPage