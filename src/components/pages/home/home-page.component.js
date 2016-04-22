import angular from 'angular';
import router from 'angular-ui-router';

import './home-page.component.css';

import HomePageCtrl from './home-page.controller';

/**
 * Decorate current module with routes.
 *
 * Very similar to @RouterConfig decorator in Angular2
 */
const routes = ['$stateProvider', '$urlRouterProvider', ($stateProvider, $urlRouterProvider) => {
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {
      url: '/',
      template: '<ws-home-page></ws-home-page>'
    });
}];

/**
 * Decorate current module as component
 *
 * Very similar to @Component decorator in Angular2
 */
const component = {
  restrict: 'E',
  template: require('./home-page.component.html'),
  controller: HomePageCtrl,
  controllerAs: 'home',
  bindings: {}
};

export default angular.module('app.home', [ router ])
  .config(routes)
  .component('wsHomePage', component);
