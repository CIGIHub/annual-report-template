import ENV from 'annual-report-2019/config/environment';

export default (routeName) => {
  const backgroundImages = {
    'chairs-message': '3E6r1xmCHg1kIA7w/chairs-message.jpg',
    'presidents-message': '3E6r1xmCHg1kIA7w/presidents-message.jpg',
  };

  let host = 'https://www.cigionline.org';
  if (ENV.environment !== 'production' || process.env.STAGING) {
    host = 'https://staging.cigionline.org';
  }

  if (backgroundImages[routeName]) {
    return `${host}/interactives/2019annualreport/static/${backgroundImages[routeName]}`;
  }

  return null;
};
