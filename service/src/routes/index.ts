import { Request, Response, Router } from "express";
import path from "path";
import authRouter from "./authRouter";
import profileRouter from "./profileRouter";

const router = Router()
const basePath = '/api/v1'

//INFORMATIVE ROUTE
router.get('/api/v1/', (req: Request, res: Response) => {
  const filepath = path.resolve(__dirname, '..', '..', 'public', 'index.html');
  res.sendFile(filepath);
})

//AUTH
router.use(`${basePath}/auth`, authRouter);


//PROFILES
router.use(`${basePath}/profile`, profileRouter);


export default router;