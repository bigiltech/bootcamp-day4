module.exports = (sequelize, Sequelize) => {
    return sequelize.define('student', {
        firstName: Sequelize.STRING,
        lastName: Sequelize.STRING,
        phoneNumber: Sequelize.STRING,
        regDate: Sequelize.DATE
    })
};
