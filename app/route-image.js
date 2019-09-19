import ENV from 'annual-report-2019/config/environment';

export default (routeName) => {
  const backgroundImages = {
    'a-bretton-woods-moment-for-the-digital-age': '3E6r1xmCHg1kIA7w/a-bretton-woods-moment-for-the-digital-age.jpg',
    'a-clarion-call-for-protecting-the-worlds-refugees': '3E6r1xmCHg1kIA7w/a-clarion-call-for-protecting-the-worlds-refugees.png',
    'braiding-legal-orders': '3E6r1xmCHg1kIA7w/braiding-legal-orders.jpg',
    'building-closer-ties-between-canada-and-india': '3E6r1xmCHg1kIA7w/building-closer-ties-between-canada-and-india.jpg',
    'chairs-message': '3E6r1xmCHg1kIA7w/chairs-message.jpg',
    'governing-cyberspace-during-a-crisis-in-trust': '3E6r1xmCHg1kIA7w/governing-cyberspace-during-a-crisis-in-trust.jpg',
    'informing-the-debate-around-internet-security-and-trust': '3E6r1xmCHg1kIA7w/informing-the-debate-around-internet-security-and-trust.jpg',
    'media-and-mass-atrocity-the-rwanda-genocide-and-beyond': '3E6r1xmCHg1kIA7w/media-and-mass-atrocity-the-rwanda-genocide-and-beyond.jpg',
    'models-for-data-governance': '3E6r1xmCHg1kIA7w/models-for-data-governance.jpg',
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
