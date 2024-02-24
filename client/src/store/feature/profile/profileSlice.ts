import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ActionAddNewFieldNetwork, ActionChangeAvatarProfile, ActionChangeBackgroundColorApp, ActionChangeIconNameUrlLinks, ActionChangeNameProfile, ActionDeleteIconNameUrlLinks, ActionEditFieldNetwork, ActionEditIconsFieldNetwork } from "./profileActions";

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

export interface Profile {
  network: Network[];
  styles: Styles;
}

export interface profileInitialState {
  avatar: string;
  name: string;
  profile: Profile

}

const initialStateDB = localStorage.getItem("profile")
let initialState: profileInitialState;
if (initialStateDB) {
  initialState = JSON.parse(initialStateDB);
} else {

  initialState = {
    avatar: '1',
    name: 'TrebolName',
    profile: {
      network: [],
      styles: {
        backgroundAppColor: '',
        fontFamilyApp: '',
        links: {
          fontSizeText: ''
        }
      }
    }
  }

}



export const profileSlice = createSlice({
  name: "Profile",
  initialState: initialState,
  reducers: {
    onChangeNameProfile: (state, action: PayloadAction<{ name: string }>) => ActionChangeNameProfile(state, action),
    onChangeAvatarProfile: (state, action: PayloadAction<{ avatar: string }>) => ActionChangeAvatarProfile(state, action),
    onChangeIconNameUrlLinks: (state, action: PayloadAction<Network[]>) => ActionChangeIconNameUrlLinks(state, action),
    onDeleteIconNameUrlLinks: (state, action: PayloadAction<Network[]>) => ActionDeleteIconNameUrlLinks(state, action),
    onChangeBackgroundColorApp: (state, action: PayloadAction<Styles>) => ActionChangeBackgroundColorApp(state, action),
    onAddNewFieldNetwork: (state, action: PayloadAction<Network>) => ActionAddNewFieldNetwork(state, action),
    onEditFieldNetwork: (state, action: PayloadAction<Network[]>) => ActionEditFieldNetwork(state, action),
    onEditIconsFieldsNetwork: (state, action: PayloadAction<Network[]>) => ActionEditIconsFieldNetwork(state, action),

  }
})


export const { onChangeBackgroundColorApp, onAddNewFieldNetwork, onEditFieldNetwork, onEditIconsFieldsNetwork, onChangeAvatarProfile, onDeleteIconNameUrlLinks, onChangeIconNameUrlLinks, onChangeNameProfile } = profileSlice.actions
export default profileSlice.reducer