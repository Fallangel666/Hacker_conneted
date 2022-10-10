module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('post', {
      userId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      desc: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      likes: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      image: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    }
      )
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('post')
  }
}
               
             

