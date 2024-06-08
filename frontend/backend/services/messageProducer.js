//messageproducer

const amqp = require('amqplib');

async function publishMessageToQueue(message) {
  // Connect to RabbitMQ
  const connection = await amqp.connect('amqp://localhost');
  const channel = await connection.createChannel();
  const queue = 'data-ingestion';

  // Assert the queue and send message
  await channel.assertQueue(queue);
  await channel.sendToQueue(queue, Buffer.from(JSON.stringify(message)));

  console.log('Message published to RabbitMQ queue');

  // Close the channel and connection
  await channel.close();
  await connection.close();
}

module.exports = { publishMessageToQueue };
