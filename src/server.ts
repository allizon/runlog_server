import express, { response } from "express";
import { Sequelize } from "sequelize";
import { User } from "./models/user";
import { Run } from "./models/run";

const app = express();
const port = 3000;

const sequelize = new Sequelize(
  "postgres://allizon:AvengersAssemble!!@db:5432/runlog_dev"
);

const sequelizeTest = async (response) => {
  try {
    await sequelize.authenticate();

    // await sequelize.drop();
    // await User.sync({ force: true });

    // const catradora = await User.create({
    //   name: "Catradora",
    //   heroClass: "Hunter",
    // });

    // const someRun = await Run.create({
    //   runDate: new Date("2020-08-13 12:00:00"),
    //   distanceInKm: 5.1,
    //   duration: 40.3,
    // });

    const runs = await Run.findAll();
    const users = await User.findAll();
    const totalMi = await Run.totalDistanceInMiles();
    const totalKm = await Run.totalDistanceInKm();
    response.send(`${totalKm}km / ${totalMi}mi`);

    // response.send("All models were synced successfully");
  } catch (error) {
    response.send("error: " + error.toString());
  }
  // } finally {
  //   sequelize.close();
  // }
};

app.get("/", (request, response) => {
  response.send("Is this still running?");
});

app.get("/pg", (request, response) => {
  sequelizeTest(response);
});

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
