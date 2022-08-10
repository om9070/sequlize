const { Sequelize, DataTypes } = require("sequelize");
const sequelize =require("../db")
// import { v4  uuidv4 } from 'uuid';
const { v4: uuidv4 } = require('uuid');

const User = sequelize.define('User', {
    uid: {
		type: Sequelize.STRING(100),
		defaultValue: "",
		allowNull: true,
	}, // Model attributes are defined here
  firstName: {
    type: Sequelize.STRING,
    // allowNull: false
    // unique:true
  },
  lastName: {
    type: Sequelize.STRING,
    // unique:true
    // allowNull defaults to true
  },
  userdata:{
      type:Sequelize.JSONB
  }
},);
module.exports=User;
