import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('sync', function() {
    this.route('inner1', function() {
      this.route('inner2');
    });
  });
  this.route('async', function() {
    this.route('inner1', function() {
      this.route('inner2');
    });
  });
});

export default Router;
