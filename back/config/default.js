'use strict';

module.exports = {
  port: process.env.PORT || 8000,
  mongodb: {
    name: 'loyalty',
    url: process.env.MONGO_URL || 'mongodb://localhost:27017/temp',
    options: {
      poolSize: 10,
      ssl: process.env.MONGO_SSL === 'true',
      sslValidate: process.env.MONGO_SSL_VALIDATE === 'true',
      sslCA: [new Buffer(process.env.MONGO_SSL_CERT || '', 'utf-8')]
    }
  },
  amqp: {
    exchange: process.env.AMQP_MAIN_EXCHANGE || 'events',
    url: process.env.AMQP_URL || 'amqp://guest:guest@localhost:5672',
    routingKey: 'ride.completed',
    queue: 'loyalty-worker'
  }

};
