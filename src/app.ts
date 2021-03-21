import config from './config'
import db from './db'
import express, { Application, Request, Response } from 'express';

const app: Application = express()

db.authenticate()
    .then(() => {
        console.log(`DB connected`)
        app.listen(config.PORT, () => {
            console.log(`Example app listening at http://localhost:${config.PORT}`)
        })
    })  
    .catch(e => console.log(e))




