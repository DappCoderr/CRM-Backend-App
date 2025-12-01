import Redis from 'ioredis';

// This file connects your NodeJS app to Redis.

const createRedis = () => {
  const REDIS_URL = process.env.REDIS_URL || 'redis://localhost:6379';
  const client = new Redis(REDIS_URL, {
    maxRetryPerRequest: null,
    enableReadyCheck: true,
  });

  client.on('error', error => {
    console.log('Redis error: ', error.message);
  });

  client.on('connect', () => {
    console.log('[redis] connected');
  });

  client.on('ready', () => {
    console.log('[redis] connnected');
  });

  return client;
};

export default createRedis;
