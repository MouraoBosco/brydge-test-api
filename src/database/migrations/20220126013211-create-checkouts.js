'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.createTable('checkouts', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      clientName: {
        type: Sequelize.STRING,
        allowNull: false, 
      },
      clientEmail: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      clientAdress: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      totalBRL: {
        type: Sequelize.DECIMAL(15, 2),
        allowNull: false,
      },
      totalUSD: {
        type: Sequelize.DECIMAL(15, 2),
        allowNull: false
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      }
    }

    )
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.dropTable('checkouts')
  }
};
