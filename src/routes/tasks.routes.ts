import { Router, Request, Response } from "express";
import { getTasks, createTask} from "../controllers/tasks.controller";

const router = Router();

router.get('/tasks', (req: Request, res: Response): void => { res.send('Tareas'); });

router.get('/tasks/count', (req: Request, res: Response): void => { res.send('Tareas contadas'); });
router.post('/tasks', (req: Request, res: Response): void => { res.send('Tarea creada'); });

export default router;
