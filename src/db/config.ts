import {Dialect} from 'sequelize'
import 'dotenv/config'

export default {
    POSTGRES_NAME: process.env.POSTGRES_DB as string,
    POSTGRES_USER: process.env.POSTGRES_USER as string,
    POSTGRES_HOST: process.env.POSTGRES_HOST,
    POSTGRES_DIALECT: process.env.POSTGRES_DIALECT as Dialect,
    POSTGRES_PASSWORD: process.env.POSTGRES_PASSWORD,
    POSTGRES_PORT: process.env.POSTGRES_PORT
}