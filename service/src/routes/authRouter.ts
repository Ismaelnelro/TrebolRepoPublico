import { Router } from "express";
import { loginUser, registerUser, validatorTokenAccount } from "../controllers/users.controllers";

const authRouter = Router()

/*Login*/
//RUTE: http://localhost:3005/api/v1/auth/login
authRouter.post('/login', loginUser);

/*Register*/
//RUTE: http://localhost:3005/api/v1/auth/register
authRouter.post('/register', registerUser);


//RUTE: http://localhost:3005/api/v1/auth/register
authRouter.get('/status', validatorTokenAccount);

export default authRouter;