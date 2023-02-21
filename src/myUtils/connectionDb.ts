import postgres from "postgres";
import { MY_ENV } from "./myConst";
const sql = postgres({
  host: MY_ENV.HOST_DB,            // Postgres ip address[s] or domain name[s]
  port: MY_ENV.PORT_DB,          // Postgres server port[s]
  database: MY_ENV.NAME_DB,            // Name of database to connect to
  username: MY_ENV.USERNAME_DB,            // Username of database user
  password: MY_ENV.PASSWORD_DB,            // Password of database user
});
export default sql;