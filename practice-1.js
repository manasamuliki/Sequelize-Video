const Sequelize = require('sequelize');
const { DataTypes, Op } = Sequelize;

const sequelize = new Sequelize('sequelize-video', 'root', 'Root@123', {
    dialect: 'mysql'
})



const Student = sequelize.define('student', {
    student_id: {
         type: DataTypes.INTEGER,
         primaryKey: true,
         autoIncrement: true
    },
    name: {
         type: DataTypes.STRING,
         allowNull: false,
         validate: {
            len: [4, 20]
         }
    },
    favorite_class: {
        type: DataTypes.STRING(25),
        defaultValue: 'Computer Science'
    },
    school_year: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    subscribed_to_wittCode: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    }
}, {
    freezeTableName: true,
    timestamps:false
})

Student.sync({ alter: true }).then(() => {
    console.log('Table and model synced successfully')
    return Student.findAll({ where: {
       [Op.or]: { favorite_class: 'Computer Science' } 
    }})
}).then((data) => {
    data.forEach((element) => {
        console.log(element.toJSON())
    })
   

   })
.catch(() => {
    console.log('error')
})

