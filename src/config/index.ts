import dotenv from 'dotenv';

dotenv.config({ path: `.env.${process.env.NODE_ENV}` });

const ENVIRONMENT = process.env.NODE_ENV;
const MONGODB_USERNAME = process.env.MONGODB_USERNAME || '';
const MONGODB_PASSWORD = process.env.MONGODB_PASSWORD || '';
const MONGODB_IP = process.env.MONGODB_IP || '';
const MONGODB_PORT = process.env.MONGODB_PORT || '27017';
const PORT = process.env.PORT || 4000;
const ORIGIN = process.env.ALLOWED_ORIGIN || '*';

export const config = {
  ENVIRONMENT,
  PORT,
  MONGODB_USERNAME,
  MONGODB_PASSWORD,
  MONGODB_IP,
  MONGODB_PORT,
  ORIGIN,
};
