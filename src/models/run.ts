import { Sequelize, DataTypes, Model } from "sequelize";
import { sequelizeDocker, sequelizeCli } from "../database";

// We need a way to switch these depending on if we're calling from
// the Docker-ized web or from the CLI.
const sequelize = sequelizeDocker;

export class Run extends Model {
  /**
   * @returns [number] The total distance covered in kilometers
   */
  static async totalDistanceInKm() {
    return await this.findAll().then((all) => {
      const values = all.map((run) => run.getDataValue("distanceInKm"));
      var total = values.reduce((acc, cur) => acc + cur);
      return Number.parseFloat(total.toFixed(2));
    });
  }

  static async totalDistanceInMiles() {
    return await this.totalDistanceInKm().then((total) => {
      return Number.parseFloat((total * 0.621371).toFixed(2));
    });
  }

  static async totalDistanceByMonth(month) {
    return await 1;
  }

  static async totalDistanceByWeek(week) {
    return await 1;
  }
}

Run.init(
  {
    runDate: { type: DataTypes.DATE, allowNull: false },
    distanceInKm: { type: DataTypes.FLOAT, allowNull: false },
    duration: { type: DataTypes.FLOAT, allowNull: true },
    description: { type: DataTypes.TEXT, allowNull: true },
  },
  { sequelize, modelName: "Run", tableName: "runs", underscored: true }
);
