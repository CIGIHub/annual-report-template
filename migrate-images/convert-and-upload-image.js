const request = require('request');
const sharp = require('sharp');

module.exports = ({ node, s3, s3Directory }) => new Promise((resolve, reject) => {
  request({
    encoding: null,
    method: 'GET',
    uri: node.image,
  }, function(err, response, body) {
    if (err) {
      return reject(err);
    }
    return resolve(body);
  });
}).then((imageBody) => Promise.all([
  sharp(imageBody)
    .jpeg()
    .resize({
      fit: 'cover',
      height: 80,
      position: 'center',
      width: 80,
    })
    .toBuffer(),
  sharp(imageBody)
    .jpeg()
    .resize({
      height: 1440,
    }),
])).then(([thumbnailBuffer, fullSizeBuffer]) => Promise.all([
  new Promise((resolve, reject) => {
    s3.upload({
      Body: thumbnailBuffer,
      Bucket: 'annual-report-2019-static',
      Key: `${s3Directory}/nodes/${node.id}-thumbnail.jpg`,
    }, function(err) {
      if (err) {
        return reject(err);
      }
      return resolve();
    });
  }),
  new Promise((resolve, reject) => {
    s3.upload({
      Body: fullSizeBuffer,
      Bucket: 'annual-report-2019-static',
      Key: `${s3Directory}/nodes/${node.id}.jpg`,
    }, function(err) {
      if (err) {
        return reject(err);
      }
      return resolve();
    });
  }),
]));
