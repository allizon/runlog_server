import { verbose, OPEN_READWRITE, Database } from "sqlite3";

verbose();
export const db = new Database("wow-ts.sqlite3", OPEN_READWRITE, (err) => {
  if (err) {
    console.error(err.message);
  }

  // console.log("we connected!");
});

export const dbClose = () => {
  db.close((err) => {
    if (err) {
      console.error(err.message);
    }

    // console.log("Connection closed");
  });
};
