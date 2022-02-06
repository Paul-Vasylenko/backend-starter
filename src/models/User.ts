import { Model, DataTypes } from "sequelize";
import db from '../db/init'

const {sequelize, Sequelize} = db;

interface IUserAttributes{
    name: string;
    favouriteColor: string;
    age: number;
    cash:number;
}

interface IUserCreateAttibutes {
    name: string;
}

export const User = sequelize.define<Model<IUserAttributes,IUserCreateAttibutes>>("user", {
  name: DataTypes.TEXT,
  favouriteColor: {
    type: DataTypes.TEXT,
    defaultValue: 'green'
  },
  age: DataTypes.INTEGER,
  cash: DataTypes.INTEGER
});
