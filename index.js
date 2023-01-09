const Sequelize = require('sequelize');
const { DataTypes, Op } = Sequelize;

const sequelize = new Sequelize('sequelize-video', 'root', 'Root@123', {
    dialect: 'mysql'
})


const User = sequelize.define('user', {
    user_id: {
         type: DataTypes.INTEGER,
         primaryKey: true,
         autoIncrement: true
    },
    username: {
         type: DataTypes.STRING,
         allowNull: false
    },
    password: {
        type: DataTypes.STRING
    },
    age: {
        type: DataTypes.INTEGER,
        defaultValue: 21
    },
    wittCodeRocks: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    }
}, {
    freezeTableName: true,
    timestamps:false
})



 User.sync({ alter: true }).then(() => {

 return User.findByPk(4)
 }).then((data) => {
        console.log(data.toJSON())
    
 }).catch((err) => {
    console.log(err)
 })
 
 

 
