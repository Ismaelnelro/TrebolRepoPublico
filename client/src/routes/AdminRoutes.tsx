import React, { useEffect } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

/*Redux -Slice*/
import { useAppDispatch, useAppSelector } from '../store/redux-reducer'

/*Hooks*/
import { useAuthStore } from '../hooks/useAuthStore'

/*Pages*/
const HomePage = React.lazy(() => (import('../pages/HomePage')))
const AdminPage = React.lazy(() => (import('../pages/Admin/AdminPage')))

const AdminRoutes = () => {

    const { isAuthenticated } = useAppSelector(state => state.auth);
    const dispatch = useAppDispatch();
    const { checkAuthToken } = useAuthStore();

    useEffect(() => {
        dispatch(checkAuthToken())
    }, [])


    return (
        <Routes>
            {!isAuthenticated && <Route path='/*' element={<Navigate to={'/auth/login'} />} />}

            <Route path='/home' element={<HomePage />} />
            <Route path='/settings' element={<AdminPage />} />
        </Routes >
    )
}

export default AdminRoutes