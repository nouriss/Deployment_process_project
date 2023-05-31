import { Sequelize } from "sequelize-typescript";
import { config } from "./config/config";

export const sequelize = new Sequelize({
  username: config.username,
  password: config.password,
  database: config.database,
  host: config.host,

  dialect: "postgres",
  storage: ":memory:",
});


//console.log(`database username ${config.username}....`);
//console.log(`database password ${config.password}....`);
//console.log(`database database ${config.database}....`);
//console.log(`database host     ${config.host}....`);

