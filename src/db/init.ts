import dbConfig from './config'
import {Sequelize} from 'sequelize'

const {
    POSTGRES_NAME,
    POSTGRES_USER,
    POSTGRES_HOST,
    POSTGRES_DIALECT,
    POSTGRES_PASSWORD
    } = dbConfig;

const sequelize = new Sequelize(POSTGRES_NAME, POSTGRES_USER, POSTGRES_PASSWORD, {
    host: POSTGRES_HOST,
    dialect: POSTGRES_DIALECT
})

const db: any = {}
db.Sequelize = Sequelize;
db.sequelize = sequelize;

export default db;
