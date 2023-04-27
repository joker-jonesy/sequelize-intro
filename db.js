const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/muppets', {logging:false});

const Character = db.define('character',{
    name:{
        type: Sequelize.STRING,
        allowNull:false,
        unique: true
    },
    animal:{
        type: Sequelize.STRING,
        allowNull:false,
        unique: false
    }
})

module.exports = {
    db,
    Character
}
