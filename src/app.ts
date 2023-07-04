import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import { config } from '@src/config';
import { httpErrorHandler, pathErrorHandler } from '@src/middlewares';
import { logger } from '@src/utils/logger';

export const app = express();

app.use((req, res, next) => {
  logger.info(`Incoming -> Method: [${req.method}] - Url: [${req.url}] - IP: [${req.socket.remoteAddress}]`);

  res.on('finish', () => {
    logger.info(
      `Incoming -> Method: [${req.method}] - Url: [${req.url}] - IP: [${req.socket.remoteAddress}] - Status: [${res.statusCode}]`
    );
  });

  next();
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

// API rules
app.use(
  cors({
    origin: config.ORIGIN,
    methods: ['PUT', 'POST', 'PATCH', 'DELETE', 'GET'],
    allowedHeaders: ['Content-Type', 'Accept', 'Authorization', 'X-Requested-With'],
  })
);

// Routes

// API status
app.use('/ping', (req, res) => res.status(200).json({ status: 200, message: 'ok' }));

// Error handling
app.use(pathErrorHandler);

app.use(httpErrorHandler);
