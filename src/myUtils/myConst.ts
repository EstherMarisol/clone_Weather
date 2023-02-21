if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}
export const MY_ENV = {
  PORT: process.env.PORT || 3000,
  NODE_ENV: process.env.NODE_ENV || "dev",
  HOST_DB: process.env.HOST_DB,
  PORT_DB: parseInt(process.env.PORT_DB || '5432'),
  NAME_DB: process.env.NAME_DB,
  USERNAME_DB: process.env.USERNAME_DB,
  PASSWORD_DB: process.env.PASSWORD_DB,

}