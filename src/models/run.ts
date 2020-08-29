import { Sequelize, DataTypes, Model } from "sequelize";

// This needs to be methodized...
const sequelize = new Sequelize(
  "postgres://allizon:AvengersAssemble!!@db:5432/runlog_dev"
  // "postgres://allizon:AvengersAssemble!!@localhost:2345/runlog_dev"
);

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

// await User.sync({ force: true });
