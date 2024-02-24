import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'


/*Components*/
import Loader from '../components/ui/Loader'

/*Pages*/
const LoginPage = React.lazy(() => (import('../pages/Auth/LoginPage')))
const RegisterPage = React.lazy(() => (import('../pages/Auth/RegisterPage')))

const AuthRoutes = () => {

    return (
        <Routes>
            <Route path='/login' element={
                <Suspense fallback={<Loader />}>
                    <LoginPage />
                </Suspense>
            } />
            <Route path='/register' element={
                <Suspense fallback={<Loader />}>
                    <RegisterPage />
                </Suspense>
            } />
        </Routes>
    )
}

export default AuthRoutes;