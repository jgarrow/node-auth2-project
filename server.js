const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const userRoutes = require('./api/userRoutes');
const authRoutes = require('./api/authRoutes');

const baseUrl = '/api';

const server = express();

server.use(cors());
server.use(helmet());
server.use(express.json());

server.use(`${baseUrl}/auth`, authRoutes);
server.use(`${baseUrl}/users`, userRoutes);

module.exports = server;
