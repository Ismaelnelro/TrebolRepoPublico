import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'

/*Pages*/
const LandinPage = React.lazy(() => (import('./pages/LandinPage')))
const ProfilePage = React.lazy(() => (import('./pages/ProfilePage')))

/*Routes*/
import AuthRoutes from './routes/AuthRoutes'
import AdminRoutes from './routes/AdminRoutes'

/*Loader*/
import Loader from './components/ui/Loader'

/*Styles*/
import './App.css'




function App() {

  // const { isAuthenticated } = useAppSelector(state => state.auth);
  // const dispatch = useAppDispatch();
  // const { checkAuthToken } = useAuthStore();

  // useEffect(() => {
  //   dispatch(checkAuthToken())
  // }, [])


  return (

    <Routes>
      {/* {isAuthenticated && <Route path='/admin/*' element={<AdminRoutes />} />} */}

      <Route path='/admin/*' element={
        <Suspense fallback={<Loader />}>
          <AdminRoutes />
        </Suspense>
      } />

      <Route path='/profile/:username' element={
        <Suspense fallback={<Loader />}>
          <ProfilePage />
        </Suspense>
      } />

      <Route path='/' element={
        <Suspense fallback={<Loader />}>
          <LandinPage />
        </Suspense>
      } />

      <Route path='/auth/*' element={<AuthRoutes />} />
    </Routes>

  )
}

export default App
