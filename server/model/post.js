'use strict'
const {
  Model
} = require('sequelize');


module.exports = (sequelize, DataTypes) => {

    class Post extends Model {
        static associate(Post) { }

    }
    Post.init({
       userId: {
            type: DataTypes.String,
            primaryKey: true,
            allowNull: false
        },
       desc: {
            type: DataTypes.String,
            allowNull: false
        },
        likes: {
            type: DataTypes.String,
            allowNull: false
        },
        image: {
            type: DataTypes.String,
            allowNull: false
        },
        }
    , {
            sequelize,
            modelName: 'Post',
            tableName: 'Posts',
            timestamps: false
    });
        return Post
    }

Model.exports = router;