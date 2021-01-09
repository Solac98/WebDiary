module.exports = (sequelize, DataTypes) => {
    const Diary = sequelize.define('Diary', {
        title: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        content: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        date: {
            type: DataTypes.STRING(30),
            allowNull: false,
        },
    }, {
        charset: 'utf8mb4',
        collate: 'utf8mb4_general_ci',
    });
    Diary.associate = (db) => {
        db.Diary.belongsTo(db.User);
        db.Diary.hasMany(db.Image);
    };
    return Diary;
}