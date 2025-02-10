import { Request, Response } from 'express';
import { Handler } from 'express';


export const getTasks: Handler = (req: Request, res: Response): void => {
  res.send('Tareas');
}

export const createTask: Handler = (req: Request, res: Response): void => {
  res.send('Tarea creada');
}
