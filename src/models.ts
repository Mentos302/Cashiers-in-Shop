import db from './db'
import { DataTypes, Model } from 'sequelize'

interface IShop{
    name: string,
    city: string,
    adress: string
}
const Shop = db.define('Shops', {
  name: {
    type: DataTypes.STRING
  },
  city: {
    type: DataTypes.STRING
  },
  adress: {
    type: DataTypes.STRING
  }
}, 
  {
    timestamps: false
  }
);

interface ICashier{
    name: string,
    age: number,
    sex: SexEnum,
    workInShifts: ShiftsEnum,
    shop: number,
    cashRegister: number
}
const Cashier = db.define('Cashier', {
    name: {
      type: DataTypes.STRING,
    },
    age: {
      type: DataTypes.INTEGER
    },
    sex: {
      type: DataTypes.STRING
    },
    yearsOfExperience: {
      type: DataTypes.INTEGER
    },
    workInShifts: {
        type: DataTypes.STRING
    },
    shop: {
        type: DataTypes.INTEGER
    },
    cashRegister: {
        type: DataTypes.INTEGER
    }
}, {
    timestamps: false
});


interface CashRegister{
    shop: number,
    regNumber: number
}
const CashRegister = db.define('CashRegister', {
    shop: {
      type: DataTypes.INTEGER
    },
    regNumber: {
      type: DataTypes.INTEGER
    }
}, {
    timestamps: false
});

enum SexEnum{
    Male,
    Female
}
enum ShiftsEnum{
    Day = '8:00 - 16:00',
    Evening = '16:00 - 00:00',
    Night = '00:00 - 8:00'
}

export {
  Shop,
  Cashier,
  CashRegister
}