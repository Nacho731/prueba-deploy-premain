import { Sequelize } from "sequelize-typescript";
import config from "./config";
config;

 ////////////////// *LOCAL* /////////////////////////

// export const sequelize = new Sequelize({
//   dialect: "postgres",
//   database: config.dbName,
//   password: config.dbPassword,
//   username: config.dbUser,
//   storage: ":memory:",
//   models: [__dirname + "/models"],
// });

//////////////// *DEPLOY* ///////////////////////

export const sequelize = new Sequelize({
  dialect: "postgres",
  database: "walletwise_qynk",
  password: "xLSm2eLJ8NqxgLYw3tqsuKKtIEWGHQ9N",
  username: "walletwise_qynk_user",
  host: "dpg-ciafv459aq007tesvg30-a",
  port: 5432,
  models: [__dirname + "/models"],
});
