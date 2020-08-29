import express from "express";
import { sequelizeDocker } from "./database";
import { Run } from "./models/run";

const app = express();
const port = 3000;

const sequelize = sequelizeDocker;

app.get("/", (request, response) => {
  response.send("Is this still running?");
});

app.get("/runs/all", async (request, response) => {
  try {
    await sequelize.authenticate();

    const runs = await Run.findAll();
    response.send(runs);
  } catch (error) {
    response.send("error: " + error.toString());
  }
});

app.get("/runs/total", async (request, response) => {
  try {
    await sequelize.authenticate();

    const totalMi = await Run.totalDistanceInMiles();
    const totalKm = await Run.totalDistanceInKm();

    response.send({
      totalDistance: {
        km: `${totalKm}km`,
        mi: `${totalMi}mi`,
      },
    });
  } catch (error) {
    response.send("error: " + error.toString());
  }
});

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
