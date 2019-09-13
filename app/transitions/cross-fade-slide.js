/* istanbul ignore file */
import { animate, stop, Promise } from 'liquid-fire';

export default /* istanbul ignore next */ function(reverse, opts) {
  /* istanbul ignore next */
  stop(this.oldElement);
  /* istanbul ignore next */
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
