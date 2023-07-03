const amqp = require("amqplib");

let channel, connection;

const connect = async () => {
    const amqpServer = "amqp://localhost:5672";
    connection = await amqp.connect(amqpServer);
    channel = await connection.createChannel();
    await channel.assertQueue("PRODUCT");
}

module.exports = {
    connect,
    connection: () => connection,
    channel: () => channel
}