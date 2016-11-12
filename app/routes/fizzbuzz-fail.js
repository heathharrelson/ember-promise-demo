import Ember from 'ember';
import delayedValue from 'ember-promise-demo/utils/delayed-value';

/**
 * A route that rejects randomly.
 */
export default Ember.Route.extend({
  /**
   * Returns a random integer between min (included) and max (included)
   *
   * @param {Number} min - minimum integer to generate.
   * @param {Number} max - maximum integer to generate.
   *
   * @param {Number} integer in the range min <= x <= max
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
   */
  getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },

  /**
   * @override
   */
  model() {
    return delayedValue(this.getRandomIntInclusive(1, 15), 500).then(value => {
      let errorName = '';
      errorName = value % 3 === 0 ? errorName += 'Fizz' : errorName;
      errorName = value % 5 === 0 ? errorName += 'Buzz' : errorName;

      if (errorName.length === 4) {
        throw new Error(errorName);
      } else if (errorName.length === 8) {
        return Ember.RSVP.reject(errorName);
      }

      return value;
    });
  }
});
