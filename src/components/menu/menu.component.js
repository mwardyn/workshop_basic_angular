import angular from 'angular';
import router from 'angular-ui-router';

import MenuCtrl from './menu.controller';

const component = {
  restrict: 'E',
  template: require('./menu.component.html'),
  controller: MenuCtrl,
  controllerAs: 'menu',
  bindings: {}
};

export default angular.module('app.menu', [router])
  .component('wsMenu', component);
