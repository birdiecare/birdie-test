// eslint-disable-next-line @typescript-eslint/no-var-requires
const mysql = require("mysql");

const env = process.env;

export const connection = mysql.createConnection({
  host: env.HOST,
  user: env.USER,
  password: env.PASSWORD,
  database: env.DB_NAME,
});

connection.connect((err: any) => {
  if (err) throw err;
  console.log("Connected to MySQL Server!");
});
