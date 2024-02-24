/*Readux - store - slice*/
import { ThunkAction } from 'redux-thunk';
import { Action } from '@reduxjs/toolkit';
import { RootState } from '../../store';
import { setProfileFailure, setProfile, startLoadingProfile } from './profilesSlice';


/*Api mongo*/
import dbmongoApi from '../../../api/apiMongo';

/**
 * Esta funcion busca traer la informacion 
 * de los perfiles de acuerdo al nombre de usuario
 */
export const getProfile = ({ path }: { path: string; }): ThunkAction<void, RootState, unknown, Action> => {
    return async (dispatch) => {
        dispatch(startLoadingProfile());
        try {

            /*Ruta localhost:   http://localhost:3005/api/v1/{profile/username} */
            const data = await dbmongoApi.get(`${path}`)

            if (data.status !== 200) {
                dispatch(setProfileFailure(data.data.msg))
            }

            dispatch(setProfile(data.data.user))

        } catch (error) {
            console.log(error);
            dispatch(setProfileFailure(error))
        }

    }
}
