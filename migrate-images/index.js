require('dotenv').config();

const AWS = require('aws-sdk');
const winston = require('winston');

const logger = winston.createLogger({
  format: winston.format.simple(),
  level: 'info',
  transports: [
    new winston.transports.Console(),
  ],
});

// const s3 = new AWS.S3();
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

Promise.resolve().then(() => {
  logger.info('Uploading nodes...');
});
