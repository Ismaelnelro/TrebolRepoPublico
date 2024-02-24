import React, { Suspense } from 'react';

/*Images*/
import logo from '../../../public/assets/brand/logo.png'

interface LayoutAuthProps {
    children: React.ReactNode;
    handleSubmit: () => void;
    title: string
    accion: string
}

const LayoutAuth = ({ children, handleSubmit, title, accion }: LayoutAuthProps) => {

    const linkText = accion === 'login' ? 'Go to Register' : 'Go to Login';

    return (
        <Suspense fallback={<div>Cargando...</div>} >
            <div className='bg-green-400 flex flex-col justify-center items-center gap-16 landscape:min-h-[600px]' style={{ height: "100svh" }} >
                <form onSubmit={handleSubmit}
                    className='flex flex-col justify-start items-start relative p-6 pb-10 rounded-xl bg-white shadow-gray-800 shadow-2xl tracking-wider text-gray-800'>
                    <img className='drop-shadow-2xl absolute z-40 -top-14 right-0' src={logo} alt='' width={100} height={100} />
                    <p className='w-full py-4 font-semibold text-4xl uppercase'>{title}</p>

                    {children}

                    <a href={accion === 'login' ? '/auth/register' : '/auth/login'} className='text-sm  text-green-500 underline self-end'>
                        {linkText}
                    </a>

                    <button type='submit'
                        className='absolute -bottom-5 px-14 py-3 font-light uppercase text-lg tracking-wider rounded shadow-gray-800 shadow-2xl bg-green-400 hover:text-white'>
                        {accion}
                    </button>

                </form>
            </div >
        </Suspense >
    );
};

export default LayoutAuth;