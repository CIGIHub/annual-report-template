require('dotenv').config();

const AWS = require('aws-sdk');
const crypto = require('crypto');
const winston = require('winston');

const convertAndUploadImage = require('./convert-and-upload-image');
const nodes = require('../vendor/nodes');

const logger = winston.createLogger({
  format: winston.format.simple(),
  level: 'info',
  transports: [
    new winston.transports.Console(),
  ],
});
const s3 = new AWS.S3();

let s3Directory = crypto.randomBytes(8).toString('hex');
if (process.argv.slice(2)
    && process.argv.slice(2)[0]
    && typeof process.argv.slice(2)[0] === 'string'
    && process.argv.slice(2)[0].length === 16) {
  // If a directory was passed as an argument, use that.
  s3Directory = process.argv.slice(2)[0];
}

Promise.resolve().then(async() => {
  logger.info(`Uploading nodes to ${s3Directory}`);
  const ASYNC_LIMIT = 5;
  // const nodeImages = {};

  // Create offsets to upload node images in batches of ASYNC_LIMIT
  const offsets = [];
  for (let offset = 0; offset < nodes.length; offset += ASYNC_LIMIT) {
    offsets.push(offset);
  }

  for (const offset of offsets) {
    const batchNodes = nodes.slice(offset, offset + ASYNC_LIMIT);
    const promises = [];
    for (const node of batchNodes) {
      if (node.image) {
        logger.info(`Uploading node ${node.id}`);
        promises.push(convertAndUploadImage({
          logger,
          node,
          s3,
          s3Directory,
        }));
      } else {
        logger.info(`No image for ${node.id}. Skipping...`);
      }
    }

    await Promise.all(promises);
  }
}).then(() => {
  logger.info(`Finished uploading to ${s3Directory}`);
});
