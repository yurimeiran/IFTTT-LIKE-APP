import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('services');
  this.route('service-list');
  this.route('facebook');
  this.route('rss', function() {
    this.route('0');
    this.route('trig');
  });
  this.route('email');
});

export default Router;
