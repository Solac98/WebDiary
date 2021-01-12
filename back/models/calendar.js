module.exports = (sequelize, DataTypes) => {
    const Calendar = sequelize.define('Calendar', {
        content: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        date: {
            type: DataTypes.STRING(20),
            allowNull: false,
        }
    }, {
        charset: 'utf8mb4',
        collate: 'utf8mb4_general_ci',
    });
    Calendar.associate = (db) => {
        db.Calendar.belongsTo(db.User);
    }
    return Calendar;
};