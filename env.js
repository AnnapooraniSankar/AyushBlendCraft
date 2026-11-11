require('dotenv').config();

const config = {
  db: {
    user: process.env.DB_USER || 'ayush_admin',
    host: process.env.DB_HOST || 'localhost',
    name: process.env.DB_NAME || 'ayush_db',
    password: process.env.DB_PASSWORD || 'securepassword',
    port: process.env.DB_PORT || 5432,
  },
  jwt: {
    secret: process.env.JWT_SECRET || 'complexsecretkey',
  },
};

module.exports = config;
