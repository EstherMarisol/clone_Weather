if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}
export const MY_ENV = {
  PORT: process.env.PORT || 3000,
  MONGO_DB: process.env.MONGO_DB || "",
  NODE_ENV: process.env.NODE_ENV || "dev",
}