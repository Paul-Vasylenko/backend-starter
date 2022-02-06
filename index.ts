import express from "express";
import { initApi } from './src/api';
import db from './src/db/init';

const app = express();
const PORT = process.env.APP_PORT ?? 5000
app.use('/api/v1', initApi())


app.listen(PORT, async ()=>{
    console.log(`Server is running on port ${PORT}`)
    try {
        await db.sequelize.authenticate();
        await db.sequelize.sync({force:true});
        console.log('Connection has been established successfully.');
      } catch (error : any) {
        console.error('Unable to connect to the database:', error?.original.message);
      }
})