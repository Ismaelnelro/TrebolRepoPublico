import { Request, Response } from 'express'
import { fetchLoginUser, fetchRegisterUser, findProfileByUserName, findUserByEmail, updateUserProfile } from '../service/users.services'
import jwt from 'jsonwebtoken'


const registerUser = async (req: Request, res: Response) => {
  try {
    const data = await fetchRegisterUser({ ...req.body })
    res.status(201).json(data)
  } catch (error) {
    console.log("Err en registro usuario", error);
    res.status(500).json({ message: 'Err' });
  }
}

const loginUser = async (req: Request, res: Response) => {
  try {
    const { password, email } = req.body

    const data = await fetchLoginUser(password, email)

    res.status(200).json({ msg: 'User login succeful', data })
  } catch (error) {
    console.log("Err en login usuario" + error);
    res.status(500).json({ message: 'Err' + error });
  }
}

const getProfile = async (req: Request, res: Response) => {
  try {
    const userName = req.params.userName
    const response = await findProfileByUserName(userName);
    res.status(200).json({ msg: response.msg, user: response.user })

  } catch (error) {
    console.log("Err en login usuario", error);
    res.status(500).json({ message: 'Err' });
  }
}


const editUserProfile = async (req: Request, res: Response) => {

  try {
    const token = req.headers.authorization?.split(' ')[1];
    const updatedProfileData = req.body;


    if (!token) {
      return res.status(401).json({ isAuthenticated: false });
    }

    jwt.verify(token, secretKey, async (err, decodedToken) => {
      if (typeof decodedToken === 'object' && decodedToken.email) {
        const email = decodedToken.email;
        
        const user = await updateUserProfile(email, updatedProfileData);
        return res.status(200).json({ isAuthenticated: true, user });
      }
    });

    // const updatedUser = await updateUserProfile(userName, updatedProfileData);

    // res.status(200).json({ message: 'Profile updated successfully', user: updatedUser });

  } catch (error) {
    console.error('Err while edit user:', error);
    res.status(500).json({ message: 'Err' });
  }
};

const secretKey = "Trebol";

const validatorTokenAccount = async (req: Request, res: Response) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];

    if (!token) {
      return res.status(401).json({ isAuthenticated: false });
    }

    jwt.verify(token, secretKey, async (err, decodedToken) => {
      if (typeof decodedToken === 'object' && decodedToken.email) {
        const email = decodedToken.email;
        const user = await findUserByEmail(email);
        return res.status(200).json({ isAuthenticated: true, user });
      }
    });

  } catch (error) {
    console.error('Error during token verification:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}





export {
  registerUser,
  loginUser,
  getProfile,
  editUserProfile,
  validatorTokenAccount
}