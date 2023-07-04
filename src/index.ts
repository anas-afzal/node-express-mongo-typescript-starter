import { app } from '@src/app';
import { config } from '@src/config';
import { logger } from '@src/utils/logger';
import { connectDb } from '@src/db';

connectDb()
  .then(() => {
    logger.info('✅ Connected to DB');
    app.listen(config.PORT, () => logger.info(`🎧 Listening on port ${config.PORT}`));
  })
  .catch(error => {
    logger.error('🔴 Unable to connect');
    logger.error(error);
  });
