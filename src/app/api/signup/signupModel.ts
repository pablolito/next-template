import { RowDataPacket } from 'mysql2';
import db from '../db';

// login model
export interface Signup {
  email: string;
  password: string;
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

export const createUser = ({email, password}: Signup) => {
  const query = `insert into user (email, password) values (?, ?)`;
  const data = [email, password]
  return mysqlPromise(query, data);
};

export const findUser = (email: string) => {
  const query = `select count(email) as count from user where email = ?`;
  const data = [email]
  return mysqlPromise(query, data);
};
