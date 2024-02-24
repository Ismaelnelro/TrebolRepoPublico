import { useNavigate } from "react-router-dom";

/*Redux-Slice*/
import { Action, ThunkAction } from "@reduxjs/toolkit";
import { useAppDispatch, useAppSelector } from "../store/redux-reducer";
import { RootState } from "../store/store";
import {
   onAddNewFieldNetwork,
  onChangeAvatarProfile, onChangeBackgroundColorApp,
  onChangeNameProfile, onDeleteIconNameUrlLinks,
  onEditIconsFieldsNetwork, onEditNameUrlFieldNetwork
} from "../store/feature/auth/authSlice";

/*API MONGO*/
import dbmongoApi from "../api/apiMongo";

/*Interfaces*/
import { INetwork } from "../models/user.interface";





const useProfileHooks = () => {


  const { user } = useAppSelector(state => state.auth);
  const dispatch = useAppDispatch();
  const navigate = useNavigate()


  /** ======= */
  /** HANDDLE */
  /** ======= */
  const handleName = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const name = e.currentTarget.value
    dispatch(onChangeNameProfile({ name }));
  }


  const handleAvatar = (e: React.MouseEvent<HTMLDivElement, MouseEvent>): void => {
    const avatar = e.currentTarget.id
    dispatch(onChangeAvatarProfile({ avatar }));
  }



  const handleBackGroundColor = (e: React.MouseEvent<HTMLDivElement, MouseEvent>): void => {
    const color = e.currentTarget.id
    dispatch(onChangeBackgroundColorApp({ backgroundAppColor: color }));
  }


  const handdleAddNewFieldNetwork = () => {
    const newField = { name: '', url: '', icon: '' };
    dispatch(onAddNewFieldNetwork(newField))
  }


  const handdleDeleteSocialMediasFields = (net: INetwork): void => {
    const network = user?.profile.network.filter(n => n !== net);
    if (network) {
      dispatch(onDeleteIconNameUrlLinks(network))
    }
  }


  const handdlePickIconsFields = (e: React.MouseEvent<HTMLImageElement, MouseEvent>, index: number) => {

    const network = user?.profile.network;
    if (network) {
      const networks = [...network];
      const updatedField = { ...networks[index], icon: e.currentTarget.id };
      networks[index] = updatedField;
      dispatch(onEditIconsFieldsNetwork(networks))
    }
  }


  const handdleEditFields = (e: React.ChangeEvent<HTMLInputElement>, field: keyof INetwork, index: number) => {
    const network = user?.profile.network;
    if (network) {
      const networks = [...network];
      const updatedField = { ...networks[index], [field]: e.currentTarget.value };
      networks[index] = updatedField;
      dispatch(onEditNameUrlFieldNetwork(networks))
    }

  }


  const startSavingNewProfile = (): ThunkAction<void, RootState, unknown, Action> => {

    return async () => {

      const authToken = localStorage.getItem('token');
      const newUserUpdate = { ...user?.profile }

      try {
         await dbmongoApi.put('profile/editar/',
          newUserUpdate, {
          headers: {
            Authorization: `Bearer ${authToken}`
          },
        });

        navigate('/admin/home')
      } catch (error) {
        console.log(error);
      }

    }
  }

  return {
    handleAvatar,
    handleName,
    handleBackGroundColor,
    handdleAddNewFieldNetwork,
    handdleDeleteSocialMediasFields,
    handdlePickIconsFields,
    handdleEditFields,
    startSavingNewProfile
  }
}

export default useProfileHooks