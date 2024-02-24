import { PayloadAction } from "@reduxjs/toolkit"
import { Network, profileInitialState, Styles } from "./profileSlice"



function ActionChangeNameProfile(state: profileInitialState, { payload }: PayloadAction<{ name: string }>) {
  state.name = payload.name
  localStorage.setItem("profile", JSON.stringify(state))
}
function ActionChangeAvatarProfile(state: profileInitialState, { payload }: PayloadAction<{ avatar: string }>) {
  state.avatar = payload.avatar
  localStorage.setItem("profile", JSON.stringify(state))
}

function ActionChangeIconNameUrlLinks(state: profileInitialState, { payload }: PayloadAction<Network[]>) {
  state.profile.network = ([...state.profile.network, ...payload])
  localStorage.setItem("profile", JSON.stringify(state))
}
function ActionChangeBackgroundColorApp(state: profileInitialState, { payload }: PayloadAction<Styles>) {
  state.profile.styles = {
    ...state.profile.styles,
    backgroundAppColor: payload.backgroundAppColor,
  }
  localStorage.setItem("profile", JSON.stringify(state))
}

function ActionDeleteIconNameUrlLinks(state: profileInitialState, { payload }: PayloadAction<Network[]>) {
  state.profile.network = ([...payload])
  localStorage.setItem("profile", JSON.stringify(state))
}

function ActionAddNewFieldNetwork(state: profileInitialState, { payload }: PayloadAction<Network>) {
  state.profile.network.push(payload)
  localStorage.setItem("profile", JSON.stringify(state))
}


function ActionEditFieldNetwork(state: profileInitialState, { payload }: PayloadAction<Network[]>) {
  state.profile.network = payload;
  localStorage.setItem("profile", JSON.stringify(state))
}

function ActionEditIconsFieldNetwork(state: profileInitialState, { payload }: PayloadAction<Network[]>) {
  state.profile.network = payload;
  localStorage.setItem("profile", JSON.stringify(state))
}


export {
  ActionChangeNameProfile,
  ActionChangeIconNameUrlLinks,
  ActionChangeBackgroundColorApp,
  ActionDeleteIconNameUrlLinks,
  ActionChangeAvatarProfile,
  ActionAddNewFieldNetwork,
  ActionEditFieldNetwork,
  ActionEditIconsFieldNetwork
}