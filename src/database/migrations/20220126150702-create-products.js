'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.createTable('products', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      checkoutId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'checkouts', key: 'id' }
      },
      productName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      productValue: {
        type: Sequelize.DECIMAL(15, 2),
        allowNull: false,
      },
      productQuantity: {
        type: Sequelize.INTEGER,
        allowNull: false,
      }
    })
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.dropTable('products');
  }
};
