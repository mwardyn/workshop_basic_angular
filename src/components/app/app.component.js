import angular from 'angular';

import './app.component.css';
import 'angular-material/angular-material.css';

const component = {
  template: require('./app.component.html')
};

export default angular.module('app.main', [])
  .component('app', component);
