import Ember from 'ember';

export default Ember.Route.extend({
  /**
   * @override
   */
  beforeModel() {
    Ember.Logger.info(`${this.get('routeName')} beforeModel hook`);
  },

  /**
   * @override
   */
  model() {
    Ember.Logger.info(`${this.get('routeName')} model hook`);
    return Ember.Object.create({ name: `${this.get('routeName')} model`});
  },

  /**
   * @override
   */
  afterModel() {
    Ember.Logger.info(`${this.get('routeName')} afterModel hook`);
  }
});
