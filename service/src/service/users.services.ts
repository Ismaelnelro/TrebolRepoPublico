import jwt from 'jsonwebtoken'

import User from '../models/user.models';

import { IUser, IUserProfile, IUserRegister } from '../interface/user.interface';
import { encrypt, verifyHash } from "../utils/handlePassword"

const secretKey = "Trebol";

const findProfileByUserName = async (userName: string) => {
  try {
    const user = await User.findOne({ 'profile.userName': userName });

    if (user) {
      return { msg: "User found", user: user.profile };
    } else {
      return { msg: "User not found", user: null };
    }
  } catch (error) {
    console.error('Error searching profile by userName:', error);
    throw new Error('Error searching profile by userName');
  }
};



const fetchRegisterUser = async (user: IUserRegister) => {
  const { password } = user

  const passwordHash = await encrypt(password)

  const userData = {
    credentials: {
      name: user.name,
      email: user.email,
      password: passwordHash
    }
  }

  try {
    const newUser = await User.create(userData)
    if (newUser === null) throw new Error('Error while creating user')
    return {
      msg: 'User created successfully.'
    }
  } catch (e) {
    throw new Error(e as string)
  }
}




const fetchLoginUser = async (password: string, email: string) => {

  console.log(password, email);
  const user = await findUserByEmail(email)

  if (!user) throw new Error('User not found!')

  const comparaPass = await verifyHash(password, user.credentials.password);

  if (!comparaPass) {
    throw new Error('invalid email or password')
  }

  const token = jwt.sign(
    {
      email: user.credentials.email,
    },
    secretKey,
    {
      expiresIn: '1d'
    }
  )

  const response = {
    user,
    token
  }

  return response
}


const updateUserProfile = async (email: string, updatedProfileData: IUserProfile) => {
  try {
    const user = await User.findOne({ 'credentials.email': email });

    if (!user) {
      throw new Error('User not found');
    }

    user.profile = { ...user.profile, ...updatedProfileData };
    await user.save();
    return { user };
  } catch (error) {
    throw new Error(`Error al actualizar el perfil del usuario: ${error}`);
  }
};


/*FUNCIONES DE UTILIDAD EL SERVICES*/
const findUserByEmail = async (email: string): Promise<IUser | null> => {
  try {
    if (email) {
      const user = await User.findOne({ 'credentials.email': email });
      return user || null;
    }
    return null;
  } catch (error) {
    throw new Error(`User not Found! - ${error}`);
  }
}


export {
  fetchLoginUser,
  fetchRegisterUser,
  findProfileByUserName,
  updateUserProfile,
  findUserByEmail
}