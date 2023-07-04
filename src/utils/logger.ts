import { format, createLogger, transports } from 'winston';
import { Environment } from './constants';

const customFormat = format.printf(info => {
  const { level, message, timestamp, ...metadata } = info;

  let msg = `${timestamp} [${level}] : `;

  if (info instanceof Error) {
    msg += `${info.message} \n ${info.stack} `;
  } else {
    msg += `${message} `;
  }

  if (metadata) {
    msg += JSON.stringify(metadata);
  }
  return msg;
});

export const logger = createLogger({
  format:
    process.env.NODE_ENV === Environment.PRODUCTION
      ? format.combine(format.errors({ stack: true }), format.timestamp(), format.metadata(), format.json({ space: 2 }))
      : format.combine(format.colorize({ all: true }), format.timestamp(), customFormat),
  transports:
    process.env.NODE_ENV === Environment.PRODUCTION
      ? [
          new transports.File({ filename: 'logs/error.log', level: 'error' }),
          new transports.File({ filename: 'logs/combined.log' }),
        ]
      : [new transports.Console()],
});
