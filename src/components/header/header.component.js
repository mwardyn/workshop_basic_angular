import angular from 'angular';
import router from 'angular-ui-router';

import HeaderCtrl from './header.controller';

const component = {
  restrict: 'E',
  template: require('./header.component.html'),
  controller: HeaderCtrl,
  controllerAs: 'header',
  bindings: {}
};

export default angular.module('app.header', [ router ])
  .component('wsHeader', component);
