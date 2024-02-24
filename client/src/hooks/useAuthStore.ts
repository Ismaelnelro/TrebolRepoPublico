import { useNavigate } from 'react-router-dom';

/*Readux - store - slice*/
import { ThunkAction } from 'redux-thunk';
import { Action } from '@reduxjs/toolkit';
import { RootState } from '../store/store';
import { Authenticated, StartcheckingAuthention } from '../store/feature/auth/authSlice';

/*Api*/
import dbmongoApi from "../api/apiMongo";


export const useAuthStore = () => {

    const navigate = useNavigate()

    const startLogin = ({ email, password }: { email: string; password: string }): ThunkAction<void, RootState, unknown, Action> => {
        return async (dispatch) => {
            dispatch(StartcheckingAuthention())
            try {
                const { data } = await dbmongoApi.post('auth/login', { email, password })
                localStorage.setItem('token', data.data.token)
                setTimeout(() => {
                    dispatch(Authenticated(data.data.user))
                    navigate("/admin/home")
                }, 2000);
            } catch (error) {
                // dispatch(NotAuthenticated({ data }));
            }
        }
    }


    const startRegister = async ({ name, email, password }: { name: string; email: string; password: string }) => {
        try {
            const resp = await dbmongoApi.post('auth/register', { name, email, password })
            return resp.data
        } catch (error) {
            throw new Error("Err: ocurrio un error al registrar usuario");
        }
    }


    const checkAuthToken = (): ThunkAction<void, RootState, unknown, Action> => {
        return async (dispatch) => {

            const authToken = localStorage.getItem('token');

            if (!authToken) return dispatch(startLogOut)

            try {
                const { data } = await dbmongoApi.get('auth/status', {
                    headers: {
                        Authorization: `Bearer ${authToken}`
                    }
                });

                dispatch(Authenticated(data.user))
            } catch (error) {
                console.log(error);
            }
        }

    }

    const startLogOut = () => {
        localStorage.removeItem('token');
        navigate("/")
    }


    const startRedirect = (path: string) => {
        navigate(`${path}`)
    }




    return {
        //*Porperties

        //*Metodos
        startLogin,
        startRegister,
        startLogOut,
        checkAuthToken,
        startRedirect,
    }
}