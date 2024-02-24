/*Redux-Slices*/
import { PayloadAction } from "@reduxjs/toolkit"
import { Styles, authInitialState } from "./authSlice"

/*Interfaces*/
import { INetwork, IUser } from "../../../models/user.interface";


function autenticationAction(state: authInitialState, { payload }: PayloadAction<IUser>) {
  state.loading = false;
  state.isAuthenticated = true;
  state.user = payload;
  state.error = null;
}

function noAuthenticationAction(state: authInitialState) {
  state.loading = false;
  state.isAuthenticated = false;
  state.user = null;
  state.error = null;
}

function checkingAuthenticationAction(state: authInitialState) {
  state.loading = true;
  state.isAuthenticated = false;
  state.user = null;
  state.error = null;
}



/*ACCIONES PARA EDICION DE PERFIL DE USUARIO LOGEADO*/

function ActionChangeNameProfile(state: authInitialState, { payload }: PayloadAction<{ name: string }>) {
  if (state.user) {
    const updatedUser = { ...state.user };
    updatedUser.profile.userName = payload.name;
    state.user = updatedUser;
  }
}


function ActionChangeAvatarProfile(state: authInitialState, { payload }: PayloadAction<{ avatar: string }>) {
  if (state.user) {
    const updatedUser = { ...state.user };
    updatedUser.profile.avatar = payload.avatar;
    state.user = updatedUser;
  }
}

function ActionChangeBackgroundColorApp(state: authInitialState, { payload }: PayloadAction<Styles>) {
  if (state.user && payload.backgroundAppColor) {
    const updatedUser = { ...state.user };
    updatedUser.profile.styles.backgroundColor = payload.backgroundAppColor;
    state.user = updatedUser;
  }
}

function ActionAddNewFieldNetwork(state: authInitialState, { payload }: PayloadAction<INetwork>) {
  if (state.user) {
    const updatedUser = { ...state.user };
    updatedUser.profile.network.push(payload);
    state.user = updatedUser;
  }
}




function ActionDeleteIconNameUrlLinks(state: authInitialState, { payload }: PayloadAction<INetwork[]>) {
  if (state.user) {
    const updatedUser = { ...state.user };
    updatedUser.profile.network = [...payload];
    state.user = updatedUser;
  }
}

function ActionEditIconsFieldNetwork(state: authInitialState, { payload }: PayloadAction<INetwork[]>) {
  if (state.user) {
    const updatedUser = { ...state.user };
    updatedUser.profile.network = [...payload];
    state.user = updatedUser;
  }
}



function ActionEditFieldNetwork(state: authInitialState, { payload }: PayloadAction<INetwork[]>) {
  if (state.user) {
    const updatedUser = { ...state.user };
    updatedUser.profile.network = [...payload];
    state.user = updatedUser;
  }
}


// function ActionChangeIconNameUrlLinks(state: authInitialState, { payload }: PayloadAction<Network[]>) {

//   if (state.user ) {
//     const updatedUser = { ...state.user };
//     updatedUser.profile.network =[];
//     state.user = updatedUser;
//   }
// }






export {
  autenticationAction,
  noAuthenticationAction,
  checkingAuthenticationAction,

  /*ACTUALIAZR EL PERFIL*/
  ActionChangeNameProfile,
  ActionAddNewFieldNetwork,
  ActionChangeAvatarProfile,
  ActionChangeBackgroundColorApp,
  ActionDeleteIconNameUrlLinks,
  ActionEditFieldNetwork,
  ActionEditIconsFieldNetwork

}
