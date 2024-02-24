
const NotFoundPageComponent = () => {
    return (
        <>
            <div className='w-full h-screen flex flex-col justify-center items-center gap-4 bg-white text-green-800'
                style={{ height: "100svh" }}
            >
                <p className='text-7xl'>OOPS! =( </p>
                <p className='font-semibold italic text-2xl opacity-60'>user not found! 👎</p>
                <a className=' p-3 px-8  shadow-lg shadow-green-200 font-medium rounded text-green-800 bg-green-400' href="/">Home</a>
            </div>
        </>
    )
}

export default NotFoundPageComponent