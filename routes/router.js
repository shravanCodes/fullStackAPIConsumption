const express = require('express');
const router = express.Router();

const gettodosDataComponent = require('./api/gettodosData');
const getUserDataById = require('./api/getUserDataById');
const usersData = require('./api/getUsersData');

// Get a single employee data
router.get('/users/:userId', getUserDataById);

// Get all employee data
router.get('/todos', gettodosDataComponent);

// Get users data
router.get('/users', usersData);

module.exports = router;
