const { Model, DataTypes, Sequelize } = require('sequelize');

class product extends Model {
    static init(dbConnection) {
        super.init({
            productName: DataTypes.STRING,
            productValue: DataTypes.DECIMAL(15, 2),
            productQuantity: DataTypes.INTEGER,
        }, {
            sequelize: dbConnection,
            timestamps: false,
        })
    };

    static associate(models) {
        this.belongsTo(models.checkout, { constraints: true, foreignKey: 'checkoutId', as: 'checkout' });
    }
}

module.exports = product