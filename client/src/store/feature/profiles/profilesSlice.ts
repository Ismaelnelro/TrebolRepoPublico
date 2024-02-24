/*Redux- Slices*/
import { createSlice } from '@reduxjs/toolkit';

/*Interfaces*/
import { IUserProfile } from '../../../models/user.interface';

interface IInitialState {
    isLoading: boolean;
    user: IUserProfile | null;
    error: string | null;
}

const initialState: IInitialState = {
    isLoading: false,
    user: null,
    error: null
};

const profilesSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        startLoadingProfile(state) {
            state.isLoading = true;
            state.error = null;
        },
        setProfile(state, action) {
            state.isLoading = false;
            state.user = action.payload;
        },
        setProfileFailure(state, action) {
            state.isLoading = false;
            state.error = action.payload;
        }
    }
});

export const { startLoadingProfile, setProfile, setProfileFailure } = profilesSlice.actions;

export default profilesSlice.reducer;

