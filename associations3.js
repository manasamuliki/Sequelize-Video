const Sequelize = require('sequelize')
const { DataTypes, Op } = Sequelize;

const sequelize = new Sequelize('sequelize-video', 'root', 'Root@123', {
    dialect: 'mysql'
})

const Customer = sequelize.define('customer', {
    customerName: {
        type: DataTypes.STRING
    }
    
}, {
    timestamps: false
});

const Product = sequelize.define('product', {
    productName: {
        type: DataTypes.STRING
    }
}, {
    timestamps: false
});

const CustomerProduct = sequelize.define('customerproduct', {
    customerproductId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    }
}, {
    timestamps: false
})


Customer.belongsToMany(Product, 
    { through: 'customerproduct' });

Product.belongsToMany(Customer,
     { through: 'customerproduct' });

sequelize.sync({ alter: true }).then(() => {
    Customer.bulkCreate([
        {
            customerName: 'Fiona'
        },
        {
            customerName: 'Nishant'
        },
        {
            customerName: 'Roshnika'
        },
        {
            customerName: 'Advitha'
        },
        {
            customerName: 'Charu nethra'
        }
    ])
    
    Product.bulkCreate([
        {
            productName: 'Pencil'
        },
        {
            productName: 'Eraser'
        },
        {
            productName: 'Sharpner'
        },
        {
            productName: 'Mobile'
        },
        {
            productName: 'Earphones'
        }
    ])
    
}).catch((err) => {
    console.log(err)
})