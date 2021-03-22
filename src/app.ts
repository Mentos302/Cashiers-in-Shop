import config from './config'
import express, { Application, Request, Response } from 'express';
import bodyParser from 'body-parser'
import { Op } from 'sequelize'
import db from './db'
import logging from './utils'
import { Shop, Cashier, CashRegister } from './models'


const app: Application = express()

db.authenticate()
    .then(() => {
        console.log(`DB connected`)
        app.listen(config.PORT, () => {
            console.log(`Example app listening at http://localhost:${config.PORT}`)
        })
    })  
    .catch(e => console.log(e))

// CRUD communication
// app.use('/', (req: Request, res: Response) => logging.info(`Server`, `METHOD: [${req.method}] - URL: [${req.url}] - IP: [${req.socket.remoteAddress}]`))

app.get('/cashier', (req: Request, res: Response) =>  {
    Cashier.findAll({
        where: req.query,
        raw: true
        })  
        .then(shops => console.log(shops)) 
        .catch(e => res.send(e))
    }  
)
app.post('/cashier', (req: Request, res: Response) =>  {
    Cashier.create({ 
        name: req.body.name, 
        age: req.body.name,
        sex: req.body.sex,
        workInShifts: req.body.workInShifts,
        shop: req.body.shop,
        cashRegister: req.body.cashRegister,
        yearsOfExperience: req.body.yearsOfExperience
    })  
    .then(() => console.log(`GOOD`)) 
    .catch(e => res.send(e))
})
app.put('/cashier/:id', (req: Request, res: Response) =>  {
    Cashier.update({ 
        name: req.body.name, 
        age: req.body.name,
        sex: req.body.sex,
        workInShifts: req.body.workInShifts,
        shop: req.body.shop,
        cashRegister: req.body.cashRegister,
        yearsOfExperience: req.body.yearsOfExperience
        }, {
            where: {
                id: req.params.id
           }
        })  
    .then(() => console.log(`GOOD`)) 
    .catch(e => res.send(e))
})
app.delete('/cashier/:id', (req: Request, res: Response) =>  {
    Cashier.destroy({
            where: {
                id: req.params.id
           }
        })  
    .then(() => console.log(`GOOD`)) 
    .catch(e => res.send(e))
})

async function getTargetCashiers1(){
    Cashier.findAll({
        where: {
            yearsOfExperience:{
                [Op.gt]: 5
            }
        }
    })
}