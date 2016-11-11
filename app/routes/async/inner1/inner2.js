import Ember from 'ember';

export default Ember.Route.extend({
  /**
   * @override
   */
  beforeModel() {
    Ember.Logger.info(`== ${this.get('routeName')} beforeModel hook ==`);
  },

  /**
   * @override
   */
  model() {
    Ember.Logger.info(`== ${this.get('routeName')} model hook ==`);
    Ember.Logger.info('application model:', this.modelFor('application'));
    Ember.Logger.info('async model:', this.modelFor('async'));
    Ember.Logger.info('async.inner1 model:', this.modelFor('async.inner1'));
    return Ember.Object.create({ name: this.get('routeName') });
  },

  /**
   * @override
   */
  afterModel() {
    Ember.Logger.info(`== ${this.get('routeName')} afterModel hook ==`);
  }
});
