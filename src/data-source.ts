require('dotenv').config()
import "reflect-metadata"
import { DataSource } from "typeorm"
// import { HardDrive } from "./entity/HardDrive"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: process.env.DB_HOST,
    port: 5432,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    synchronize: false,
    logging: false,
    
    entities: [__dirname + '/entity/*.{ts,js}'],
    migrations: [__dirname + '/migration/*.{ts,js}'],

    subscribers: [],
})
