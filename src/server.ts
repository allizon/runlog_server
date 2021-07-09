import express from "express";
import cors from "cors";
import { sequelizeDocker } from "./database";
import { Run } from "./models/run";

const app = express();
const port = 3000;

const sequelize = sequelizeDocker;

const corsOptions = {
  origin: [/localhost/],
  methods: ["GET"],
};

app.use(cors(corsOptions));

app.get("/", (request, response, next) => {
  response.send("Is this still running?");
});

app.get("/runs/all", async (request, response, next) => {
  try {
    await sequelize.authenticate();

    const runs = await Run.findAll();
    response.json(runs);
  } catch (error) {
    response.send("error: " + error.toString());
  }
});

app.get("/runs/total", async (request, response, next) => {
  try {
    await sequelize.authenticate();

    const totalMi = await Run.totalDistanceInMiles();
    const totalKm = await Run.totalDistanceInKm();

    response.json({
      totalDistance: {
        km: `${totalKm}km`,
        mi: `${totalMi}mi`,
      },
    });
  } catch (error) {
    response.send("error: " + error.toString());
  }
});

app.get("/run/create", async (request, response, next) => {
  try {
    await sequelize.authenticate();

    await Run.create({
      distanceInKm: 6.1,
      runDate: new Date(),
      description: "A new run",
    });
    response.send("<html><body><b>Run added successfully.</b></body></html>");
  } catch (error) {
    response.send("error: " + error.toString());
  }
});

app.post("/run/create", async (request, response, next) => {
  try {
    await sequelize.authenticate();

    // await Run.create({
    //   distanceInKm: 6.1,
    //   runDate: new Date(),
    //   description: "A new run",
    // });
    response.send("<html><body><b>Run added successfully.</b></body></html>");
  } catch (error) {
    response.send("error: " + error.toString());
  }
});

app.listen(port, () => {
  console.log(`CORS-enabled web server listening at http://localhost:${port}`);
});
