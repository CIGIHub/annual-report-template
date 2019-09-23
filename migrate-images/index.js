require('dotenv').config();

const AWS = require('aws-sdk');
const crypto = require('crypto');
const winston = require('winston');

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

// s3.putObject({
//   Body: 'hello world',
//   Bucket: 'annual-report-2019-static',
//   Key: 'helloworld.txt',
// }, function(err, data) {
//   if (err) {
//     console.log(err, err.stack);
//   } else {
//     console.log(data);
//   }
// });

Promise.resolve().then(async() => {
  logger.info('Uploading nodes...');
  const ASYNC_LIMIT = 10;
  const nodeImages = {};

  // Create offsets to upload node images in batches of ASYNC_LIMIT
  const offsets = [];
  for (let offset = 0; offset < nodes.length; offset += ASYNC_LIMIT) {
    offsets.push(offset);
  }

  for (const offset of offsets) {
    const batchNodes = nodes.slice(offset, offset + ASYNC_LIMIT);
    const promises = [];
    for (const node of batchNodes) {
      logger.info(`Uploading node ${node.id}`);
    }
  }
});
