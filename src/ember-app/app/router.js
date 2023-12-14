import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-c-hernyjj1412-должности-ло-l');
  this.route('i-i-s-c-hernyjj1412-должности-ло-e',
  { path: 'i-i-s-c-hernyjj1412-должности-ло-e/:id' });
  this.route('i-i-s-c-hernyjj1412-должности-ло-e.new',
  { path: 'i-i-s-c-hernyjj1412-должности-ло-e/new' });
  this.route('i-i-s-c-hernyjj1412-сотрудники-l');
  this.route('i-i-s-c-hernyjj1412-сотрудники-e',
  { path: 'i-i-s-c-hernyjj1412-сотрудники-e/:id' });
  this.route('i-i-s-c-hernyjj1412-сотрудники-e.new',
  { path: 'i-i-s-c-hernyjj1412-сотрудники-e/new' });
});

export default Router;
