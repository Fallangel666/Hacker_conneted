'use strict'
const { Model, } = require('sequelize');

module.exports = (sequelize, DataTypes) => {

    class User extends Model {
        static associate(Post) { }

    }
    User.init({
        username: {
            type: DataTypes.String,
            primaryKey: true,
            allowNull: false
        },
        password: {
            type: DataTypes.String,
            allowNull: false
        },
        firstname: {
            type: DataTypes.String,
            allowNull: false
        },
        lastname: {
            type: DataTypes.String,
            allowNull: false
        },
           
            profilepicture: { 
                type: DataTypes.String,
        },
        
            coverpicture: {
                type: DataTypes.String,
        },
        
            about:{ 
                type : DataTYpes.String,
        },
        
            experience:{ 
                types: DataTypes.string,
        }
    }, {
            sequelize,
            modelName: 'User',
            tableName: 'Users',
            timestamps: false
        });
        return User
    }

Model.exports = router;