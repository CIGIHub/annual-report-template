import Component from '@ember/component';

export default Component.extend({
  didInsertElement() {
    const video = document.getElementById('background-video');
    if (video) {
      video.muted = true;
      video.play();
    }
  },
});
