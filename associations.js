const Sequelize = require('sequelize')
const { DataTypes, Op } = Sequelize;

const sequelize = new Sequelize('sequelize-video', 'root', 'Root@123', {
    dialect: 'mysql'
})

const Country = sequelize.define('country', {
    countryName: {
        type: DataTypes.STRING,
        unique: true
    }
    
} , {
    timestamps: false
})

const Capital = sequelize.define('capital', {
    capitalName: {
        type: DataTypes.STRING,
        unique: true
    }
    
} , {
    timestamps: false
})

Country.hasOne(Capital)
Capital.belongsTo(Country)
let country, capital;

sequelize.sync({ alter: true }).then(() => {

    return Country.findOne({ where: { countryName: 'France'}})

}).then((data) => {
      country = data;
    return Capital.findOne({ where: { capitalName: 'Paris'}})
}).then((data) => {
    capital = data
    return capital.setCountry(country)
}).then((data) => {
    console.log(data.toJSON())
})
.catch((err) => {
    console.log(err);
})