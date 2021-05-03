import * as mysql from "mysql2/promise";
import * as dotenv from "dotenv";
dotenv.config();

const configData = {
    host: process.env.DB_HOST ?? "localhost",
    user: process.env.DB_USER ?? "username",
    password: process.env.DB_PASSWORD ?? "password",
    database: process.env.DB_NAME ?? "birdietest"
  };

export const query = async (sql:any, params?:any) => {
    const connection = await mysql.createConnection(configData);
    const [results, ] = await connection.execute(sql, params);
    return results;
  }