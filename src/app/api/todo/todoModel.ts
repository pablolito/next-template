import { RowDataPacket } from 'mysql2';
import db from '../db';

// todo model
export interface Todo {
  id: number;
  title: string;
  done: number;
}

export interface TodoTest extends RowDataPacket {
  id: number;
  title: string;
  done: number;
}

export interface AddTodo {
  title: string;
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

export const getTodo = (): Promise<TodoTest[]> => {
  const query = `SELECT * FROM todo`;
  return mysqlPromise(query);
};

export const addTodo = (title: string): Promise<any> => {
  const query = `insert into todo (title, done) values (?, 0)`
  const data = [title]
  return mysqlPromise(query, data);
};

export const updateTodo = (title: string, done: number, id: number): Promise<any> => {
  const query = `update todo set title = ?, done = ? where id = ?`
  const data = [title, done, id]
  return mysqlPromise(query, data);
};

export const deleteTodo = (id: any): Promise<any> => {
  const query = `delete from todo where id = ?`
  const data = [id]
  return mysqlPromise(query, data);
};
