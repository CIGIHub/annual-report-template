import { animate, stop, Promise } from 'liquid-fire';

export default function(reverse) {
  stop(this.oldElement);
  return Promise.all([
    animate(this.oldElement, {
      'opacity': 0,
    }, { duration: 500 }),
    animate(this.newElement, {
      'opacity': [1, 0],
      'translateY': ['0px', reverse ? '-20px' : '20px'],
    }, { duration: 500 }),
  ]);
}
