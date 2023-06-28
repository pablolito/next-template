import * as mysql from 'mysql2';
import dotenv from 'dotenv';

dotenv.config();

// Configuration de la connexion à la base de données MySQL
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

// Établir la connexion à la base de données
connection.connect((error) => {
  if (error) {
    console.error('Erreur de connexion à la base de données:', error);
  } else {
    console.log('Connexion réussie à la base de données MySQL');
  }
});

export default connection;
