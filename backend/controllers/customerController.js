//customerController

const Customer = require('../models/Customer');
const { publishMessageToQueue } = require('../services/messageProducer'); // Import message producer

exports.addCustomer = async (req, res) => {
  try {
    const customer = new Customer(req.body);
    await customer.save();

    // Publish the customer data to RabbitMQ queue
    await publishMessageToQueue({ type: 'customer', data: customer });

    res.status(201).json(customer);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getCustomers = async (req, res) => {
  try {
    const customers = await Customer.find();
    res.status(200).json(customers);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
