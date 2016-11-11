import Ember from 'ember';
import delayedValue from 'ember-promise-demo/utils/delayed-value';

export default Ember.Route.extend({
  /**
   * @override
   */
  beforeModel() {
    const hookName = `${this.get('routeName')} beforeModel`;
    Ember.Logger.info(`== ${hookName} hook ==`);

    // Already resolved. These will succeed.
    Ember.assert('application model is loaded', this.modelFor('application'));

    // Not parents of this route. These will fail.
    // Ember.assert('async.inner1 model is not loaded', this.modelFor('async.inner1'));
    // Ember.assert('async.inner1.inner2 model is not loaded', this.modelFor('async.inner1.inner2'));

    // routing pauses until resolved, but value is discarded
    return delayedValue(hookName, 300);
  },

  /**
   * @override
   */
  model() {
    Ember.Logger.info(`== ${this.get('routeName')} model hook ==`);

    // Already resolved. These will succeed.
    Ember.assert('application model is loaded', this.modelFor('application'));

    // Not parents of this route. These will fail.
    // Ember.assert('async.inner1 model is not loaded', this.modelFor('async.inner1'));
    // Ember.assert('async.inner1.inner2 model is not loaded', this.modelFor('async.inner1.inner2'));

    // resolved value is assigned to controller's model property
    return delayedValue(Ember.Object.create({ name: this.get('routeName') }), 300);
  },

  /**
   * @override
   */
  afterModel(model) {
    const hookName = `${this.get('routeName')} afterModel`;
    Ember.Logger.info(`== ${hookName} hook ==`);

    // Already resolved. These will succeed.
    Ember.assert('application model is loaded', this.modelFor('application'));
    Ember.assert('async route model is loaded', model);

    // Not parents of this route. These will fail.
    // Ember.assert('async.inner1 model is not loaded', this.modelFor('async.inner1'));
    // Ember.assert('async.inner1.inner2 model is not loaded', this.modelFor('async.inner1.inner2'));

    // routing pauses until resolved, but value is discarded
    return delayedValue(hookName, 300);
  }
});
