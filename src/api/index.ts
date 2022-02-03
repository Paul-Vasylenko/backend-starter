import { Router } from 'express'

export const initApi = () => {
    const router = Router();
    router.use('/hello', (req,res)=>res.json({hello:"world"}))
    return router;
}