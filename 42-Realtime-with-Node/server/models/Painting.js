const Sequelize = require('sequelize')
const {STRING} = Sequelize

// console.log(STRING)

// const STRING = sequelize.STRING


const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './database.sqlite'
})


const Painting = sequelize.define('painting',{
    title: {
        type: STRING
    },
    image: {
        type: STRING
    },
    description: {
        type: STRING
    }
})



module.exports = Painting

sequelize.sync()

