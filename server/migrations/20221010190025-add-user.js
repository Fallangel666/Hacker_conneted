module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('user', {
      
        username: {
          type: Sequelize.STRING,
            primaryKey: true,
            allowNull: false
        },
        password: {
          type: Sequelize.STRING,
            allowNull: false
        },
        firstname: {
          type: Sequelize.STRING,
            allowNull: false
        },
        lastname: {
          type: Sequelize.STRING,
            allowNull: false
        },
           
            profilepicture: { 
              type: Sequelize.STRING,
        },
        
            coverpicture: {
              type: Sequelize.STRING,
        },
        
            about:{ 
              type: Sequelize.STRING,
        },
        
            experience:{ 
              type: Sequelize.STRING,
        }
    }
      )
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('user')
  }
}
               