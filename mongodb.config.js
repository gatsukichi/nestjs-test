import * as config from 'config';

export const uri = process.env.MONGO_URI || config.db.host;
export const options = {
  autoIndex: false,
  maxPoolSize: 10,
  serverSelectionTimeoutMS: 5000,
  socketTimeoutMS: 45000,
  family: 4,
};
