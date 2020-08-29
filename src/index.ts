import { Sequelize } from "sequelize";
import { Run } from "./models/run";
import { sequelizeCli } from "./database";

const sequelize = sequelizeCli;

(async () => {
  try {
    await sequelize.authenticate();
    await Run.totalDistanceInKm().then((total) => {
      console.log(total);
    });
  } catch (error) {
    console.log(error.toString());
  } finally {
    sequelize.close();
  }
})();
