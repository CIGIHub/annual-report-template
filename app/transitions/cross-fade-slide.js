import ENV from 'annual-report-2019/config/environment';
import { animate, stop, Promise } from 'liquid-fire';

export default function(reverse, opts) {
  stop(this.oldElement);
  return Promise.all([
    animate(this.oldElement, {
      'opacity': 0,
    }, opts),
    animate(this.newElement, {
      'opacity': [1, 0],
      'translateY': ['0px', reverse ? '-20px' : '20px'],
    }, opts),
  ]);
}
