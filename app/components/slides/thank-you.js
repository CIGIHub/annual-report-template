import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { htmlSafe } from '@ember/template';

export default class SlidesThankYouComponent extends Component {
  @service backgroundImage;
  @service intl;

  get backgroundStyle() {
    const { fullSizeUrl, thumbnailUrl } = this.backgroundImage.getSlideBackgroundImage('en.thank-you');
    return htmlSafe(`background-image: url('${fullSizeUrl}'), url('${thumbnailUrl}');`);
  }

  get links() {
    return [{
      icon: 'download',
      link: '',
      title: this.intl.t('thankYou.link1'),
      type: this.intl.t('download'),
    }, {
      icon: 'envelope',
      link: '',
      title: this.intl.t('thankYou.link2'),
      type: this.intl.t('subscribe'),
    }, {
      icon: 'file-alt',
      link: '',
      title: this.intl.t('thankYou.link3'),
      type: this.intl.t('partners'),
    }];
  }

  get staffPhoto() {
    const { fullSizeUrl } = this.backgroundImage.getSlideBackgroundImage('en.thank-you');
    return fullSizeUrl;
  }
}
