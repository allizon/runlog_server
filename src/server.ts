import express, { response } from "express";
import { Sequelize } from "sequelize";
import { User } from "./models/user";

const app = express();
const port = 3000;

const sequelize = new Sequelize(
  "postgres://allizon:AvengersAssemble!!@db:5432/ts_server_test"
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

    const users = await User.findAll();
    response.send(users);

    // response.send("All models were synced successfully");
  } catch (error) {
    response.send(error.toString());
  }
};

app.get("/", (request, response) => {
  response.send(
    "Here we b - did this work? getting somewhere? sweeeeet. i bet this doesn't. OH HOLY SHIT."
  );
});

app.get("/pg", (request, response) => {
  sequelizeTest(response);
});

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
