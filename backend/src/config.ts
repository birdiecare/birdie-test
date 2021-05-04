import * as mysql from "mysql2/promise";
import * as dotenv from "dotenv";
dotenv.config();

const configData = {
    host: "birdie-test.cyosireearno.eu-west-2.rds.amazonaws.com",
    user: "test-read",
    password: "xnxPp6QfZbCYkY8",
    database: "birdietest"
  };

export const query = async (sql:any, params?:any) => {
    const connection = await mysql.createConnection(configData);
    const [results, ] = await connection.execute(sql, params);
    return results;
  }