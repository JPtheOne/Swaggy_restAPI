import { Low } from 'lowdb';
import { JSONFile } from 'lowdb/node';

// Define los valores por defecto de la base de datos
const defaultData = { tasks: [] };

export const createConnection = async () => {
    const adapter = new JSONFile('db.json');
    const db = new Low(adapter, defaultData); // Se pasa `defaultData` como valor inicial

    await db.read();
    await db.write(); // Guarda los valores por defecto si es la primera vez

    return db;
};
