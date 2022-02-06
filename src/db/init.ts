import dbConfig from './config'
import {Sequelize} from 'sequelize'

const {
    POSTGRES_NAME,
    POSTGRES_USER,
    POSTGRES_HOST,
    POSTGRES_PASSWORD,
    POSTGRES_PORT
    } = dbConfig;

const connectionString = `postgres://${POSTGRES_USER}:${POSTGRES_PASSWORD}@${POSTGRES_HOST}:${POSTGRES_PORT}/${POSTGRES_NAME}`;

let sequelize = process.env.NODE_ENV==="production" ? 
    new Sequelize(process.env.DATABASE_URL || "") // comes from heroku
    :
    new Sequelize(connectionString);

const db = {
   "Sequelize":  Sequelize,
   sequelize,
}

export default db;
