import { Router } from "express";
import { editUserProfile, getProfile } from "../controllers/users.controllers";

const profileRouter = Router();



/*PROFILES*/
//RUTE: http://localhost:3005/api/v1/profile/:userName
profileRouter.get('/:userName', getProfile)

//RUTE: http://localhost:3005/api/v1/profile/editar
profileRouter.put('/editar', editUserProfile);

export default profileRouter;