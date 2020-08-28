import express, { response } from "express";
import { Client } from "pg";

const app = express();
const port = 3000;
const client = new Client();

const pgTest = async (response) => {
  await client.connect();
  const res = await client.query("SELECT * FROM users");
  response.send(res.rows[0]);
  await client.end();
};

app.get("/", (request, response) => {
  response.send(
    "Here we b - did this work? getting somewhere? sweeeeet. i bet this doesn't. OH HOLY SHIT."
  );
});

app.get("/pg", (request, response) => {
  response.send("Here we b - pg test - and here?!;");
  pgTest(response);
});

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
