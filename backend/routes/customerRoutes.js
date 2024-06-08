//customerRoutes

const express = require('express');
const { addCustomer, getCustomers } = require('../controllers/customerController');
const router = express.Router();

router.post('/customers', addCustomer);
router.get('/customers', getCustomers);

module.exports = router;
