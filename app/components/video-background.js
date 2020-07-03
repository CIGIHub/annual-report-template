import ENV from 'annual-report-template/config/environment';
import Component from '@ember/component';

export default Component.extend({
  videoLink: '',

  didInsertElement() {
    const video = document.getElementById('background-video');
    if (video && ENV.environment !== 'test') {
      video.muted = true;
      video.play();
    }
  },
});
