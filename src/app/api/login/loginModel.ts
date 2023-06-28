import db from '../db';

// login model
export interface User {
  email: string;
}

const mysqlPromise = (sqlQuery: string, data?: any[]): Promise<any> => {
  return new Promise((resolve, reject) => {
    db.query(sqlQuery, data, (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results);
      }
    });
  })
}

export const getUser = (email: string) => {
  const query = `SELECT * FROM user where email = ?`;
  return mysqlPromise(query, [email]);
};
