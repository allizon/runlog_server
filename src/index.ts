import { Sequelize } from "sequelize";
import { Run } from "./models/run";

const sequelize = new Sequelize(
  "postgres://allizon:AvengersAssemble!!@localhost:2345/runlog_dev"
);

(async () => {
  try {
    await sequelize.authenticate();
    await Run.totalDistanceInKm().then((total) => {
      console.log(total);
    });
  } catch (error) {
    console.log(error.toString());
  }
})();
