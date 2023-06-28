import db from '../db';

// project model
export interface Project {
  id: number;
  title: string;
  description: string;
  client: string;
  date: string;
}

// Fonction pour récupérer tous les projets depuis la base de données
export const getAllProjects = (): Promise<any> => {
  return new Promise((resolve, reject) => {
    const query = 'SELECT * FROM project';
    db.query(query, (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results);
      }
    });
  });
};
