import { Sequelize, DataTypes, Model } from "sequelize";
const sequelize = new Sequelize(
  "postgres://allizon:AvengersAssemble!!@db:5432/ts_server_test"
);

export class Run extends Model {}

// run_date
// distance_km
// duration
// description
// (timestamps)

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
