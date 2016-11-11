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
    Ember.Logger.info('sync model:', this.modelFor('sync'));
    return Ember.Object.create({ name: this.get('routeName') });
  },

  /**
   * @override
   */
  afterModel() {
    Ember.Logger.info(`== ${this.get('routeName')} afterModel hook ==`);
  }
});
