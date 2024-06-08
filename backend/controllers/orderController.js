//ordercontroller

const Order = require('../models/Order');
const { publishMessageToQueue } = require('../services/messageProducer');

exports.addOrder = async (req, res) => {
  try {
    const order = new Order(req.body);
    await order.save();

    // Publish the order data to RabbitMQ queue
    await publishMessageToQueue({ type: 'order', data: order });

    res.status(201).json(order);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getOrders = async (req, res) => {
  try {
    const orders = await Order.find();
    res.status(200).json(orders);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
