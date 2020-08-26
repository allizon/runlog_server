import express from "express";

const app = express();
const port = 3000;

app.get("/", (request, response) => {
  response.send("Here we b");
});

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
