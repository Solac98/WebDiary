module.exports = (sequelize, DataTypes) => {
    const Bucket = sequelize.define('Bucket', {
        content: {
            type: DataTypes.STRING(100),
            allowNull: false,
        }
    }, {
        charset: 'utf8mb4',
        collate: 'utf8mb4_general_ci',
    });
    Bucket.associate = (db) => {
        db.Bucket.belongsTo(db.User);
    }

    return Bucket;
};