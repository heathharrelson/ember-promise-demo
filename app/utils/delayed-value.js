import Ember from 'ember';
const { RSVP, run } = Ember;
const { Promise } = RSVP;

/**
 * Returns a promise that resolves the given value after the specified number of milliseconds.
 *
 * @param {Any} value - the value the promise should resolve.
 * @param {Number} delay - time in milliseconds to wait before resolving. Default is 250 ms.
 *
 * @return {RSVP.Promise}
 */
export default function delayedValue(value, delay = 250) {
  return new Promise((resolve) => {
    run.later(null, () => {
      resolve(value);
    }, delay);
  });
}
