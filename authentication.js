require('dotenv').config();
const jwt = require('jsonwebtoken');

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

const authenticateJWT = (req, res, next) => {
  const token = req.header('Authorization')?.split(' ')[1];
  if (!token) return res.sendStatus(401);
  
  jwt.verify(token, config.jwt.secret, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
};

module.exports = { config, authenticateJWT };
