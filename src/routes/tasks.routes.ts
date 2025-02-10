import { Router, Request, Response } from "express";

const router = Router();

router.get('/tasks', (req: Request, res: Response) => {
    res.send('Tareas');
});

export default router;
