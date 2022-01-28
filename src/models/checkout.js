const { Model, DataTypes } = require('sequelize');

class checkout extends Model {
    static init(dbConnection) {
        super.init({
            clientName: DataTypes.STRING,
            clientEmail: DataTypes.STRING,
            clientAdress: DataTypes.STRING,
            totalBRL: DataTypes.DECIMAL(15, 2),
            totalUSD: DataTypes.DECIMAL(15, 2)
        }, {
            sequelize: dbConnection,
            updatedAt: false,
        })
    }

    static associate(models) {
        this.hasMany(models.product, {
            foreignKey: 'checkoutId',
            as: 'products',
            onDelete: 'cascade',
            onUpdate: 'cascade'
        });
    }
}

module.exports = checkout