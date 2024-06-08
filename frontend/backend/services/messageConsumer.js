//messageconsumer
const amqp = require('amqplib');

async function consumeMessageFromQueue() {
  // Connect to RabbitMQ
  const connection = await amqp.connect('amqp://localhost');
  const channel = await connection.createChannel();
  const queue = 'data-ingestion';

  // Assert the queue and consume messages
  await channel.assertQueue(queue);
  console.log('Waiting for messages from RabbitMQ queue...');

  // Consume messages from the queue
  channel.consume(queue, (message) => {
    const content = message.content.toString();
    console.log('Received message:', content);

    // Process the message as needed
    // For example, parse JSON and save to the database

    // Acknowledge the message
    channel.ack(message);
  });
}

module.exports = { consumeMessageFromQueue };
