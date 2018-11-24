const Sequelize = require('sequelize');
const config = require('dotenv');
config();

const sequelize = new Sequelize('ardaykoob', 'akoob', 'akoob', {
    host: 'localhost',
    dialect: 'mysql',

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    operatorsAliases: false
});

// const sequelize = new Sequelize('connectionUri', {
//     define: {
//       timestamps: false // true by default
//     }
//   });

// sequelize
//   .authenticate()
//   .then(() => {
//     console.log('Connection has been established successfully.');
//   })
//   .catch(err => {
//     console.error('Unable to connect to the database:', err);
//   });


// sequelize.define('name', {attributes}, {options})

const Student = sequelize.define('student', {
    firstName: Sequelize.STRING,
    lastName: Sequelize.STRING,
    phoneNumber: Sequelize.STRING,
    regDate: Sequelize.DATE
});

// const Post = sequelize.define('post', {}, {
//     timestamps: true // timestamps will now be true
//   });

// force: true will drop the table if it already exists
// Student.sync({force: true}).then(() => {
//     // Table created
//     return Student.create({
//         firstName: 'Hussein',
//         lastName: 'Hussein',
//         phoneNumber: '12345',
//         regDate: new Date(2018, 11, 21)
//     });
//   });


Student.findAll().then(users => {
    console.log(users)
    process.exit()
  })