import { Sequelize, DataTypes, Model } from "sequelize";
const sequelize = new Sequelize(
  "postgres://allizon:AvengersAssemble!!@db:5432/ts_server_test"
);

export class User extends Model {}

User.init(
  {
    name: { type: DataTypes.STRING(20), allowNull: false },
    heroClass: { type: DataTypes.STRING(20), allowNull: false },
  },
  { sequelize, modelName: "User", tableName: "users", underscored: true }
);

// await User.sync({ force: true });
