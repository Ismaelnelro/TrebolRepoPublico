/*Redux*/
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

/*Actions*/
import {
  ActionAddNewFieldNetwork,
  ActionChangeAvatarProfile,
  ActionChangeBackgroundColorApp,
  ActionChangeNameProfile, ActionDeleteIconNameUrlLinks,
  ActionEditFieldNetwork, ActionEditIconsFieldNetwork,
  autenticationAction, checkingAuthenticationAction, noAuthenticationAction
} from "./authActions";

/*Interface*/
import { INetwork, IUser } from "../../../models/user.interface";



export interface authInitialState {
  loading: boolean;
  isAuthenticated: boolean;
  user: IUser | null;
  error: object | null;
}

export interface Network {
  icon: string;
  name: string;
  url: string;
}

export interface Styles {
  backgroundAppColor?: string;
  fontFamilyApp?: string;
  links?: {
    fontSizeText?: string
  }
}

export const initialState: authInitialState = {
  loading: false,
  isAuthenticated: false,
  user: null,
  error: {}
}

export const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    Authenticated: (state, action: PayloadAction<IUser>) => autenticationAction(state, action),
    NotAuthenticated: (state) => noAuthenticationAction(state),
    StartcheckingAuthention: (state) => checkingAuthenticationAction(state),
    onChangeNameProfile: (state: authInitialState, action: PayloadAction<{ name: string }>) => ActionChangeNameProfile(state, action),
    onChangeAvatarProfile: (state, action: PayloadAction<{ avatar: string }>) => ActionChangeAvatarProfile(state, action),
    onChangeBackgroundColorApp: (state, action: PayloadAction<Styles>) => ActionChangeBackgroundColorApp(state, action),
    onAddNewFieldNetwork: (state, action: PayloadAction<INetwork>) => ActionAddNewFieldNetwork(state, action),
    onDeleteIconNameUrlLinks: (state, action: PayloadAction<INetwork[]>) => ActionDeleteIconNameUrlLinks(state, action),
    onEditIconsFieldsNetwork: (state, action: PayloadAction<INetwork[]>) => ActionEditIconsFieldNetwork(state, action),
    onEditNameUrlFieldNetwork: (state, action: PayloadAction<Network[]>) => ActionEditFieldNetwork(state, action),
  }
})


export const {
  Authenticated, NotAuthenticated, StartcheckingAuthention,
  onChangeNameProfile, onChangeAvatarProfile, onChangeBackgroundColorApp,
  onAddNewFieldNetwork, onDeleteIconNameUrlLinks, onEditIconsFieldsNetwork,
  onEditNameUrlFieldNetwork
} = authSlice.actions
export default authSlice.reducer