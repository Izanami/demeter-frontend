import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
    this.route('sensors');
    this.route('sensor', { path: '/sensor/:sensor_id' });
    this.route('logs');
});

export default Router;
