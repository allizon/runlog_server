import { Sequelize } from "sequelize";

// We need a way to switch these depending on if we're calling from
// the Docker-ized web or from the CLI.

export const sequelizeDocker = new Sequelize(
  "postgres://allizon:AvengersAssemble!!@db:5432/runlog_dev"
);

export const sequelizeCli = new Sequelize(
  "postgres://allizon:AvengersAssemble!!@localhost:2345/runlog_dev"
);
