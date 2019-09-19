import ENV from 'annual-report-2019/config/environment';
import Component from '@ember/component';

export default Component.extend({
  didInsertElement() {
    const video = document.getElementById('background-video');
    if (video && ENV.environment !== 'test') {
      video.muted = true;
      video.play();
    }
  },
});
