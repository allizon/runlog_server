import express, { response } from "express";
import { Client } from "pg";

const app = express();
const port = 3000;

const client = new Client({
  user: "allizon",
  password: "AvengersAssemble!!",
  host: "db",
  port: 5432,
  database: "ts_server_test",
});

const pgTest = async (response) => {
  try {
    await client.connect();
    const res = await client.query("SELECT * FROM users");
    response.send(res.rows);
    await client.end();
  } catch (error) {
    response.send("Error: " + error);
  }
};

app.get("/", (request, response) => {
  response.send(
    "Here we b - did this work? getting somewhere? sweeeeet. i bet this doesn't. OH HOLY SHIT."
  );
});

app.get("/pg", (request, response) => {
  // response.send("Here we beeee - pg test - and here?!;");
  // response.send(client);
  // response.send("did that work?");
  pgTest(response);
});

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
