import angular from 'angular';
import router from 'angular-ui-router';
import 'angular-material';
import 'angular-messages';

import core from './core';
import components from './components';

angular.module('app', [ 'ngMaterial', 'ngMessages', router, core.name, components.name ])
  .config([
    '$locationProvider',
    '$mdIconProvider',
    '$mdThemingProvider',
    ($locationProvider, $mdIconProvider, $mdThemingProvider) => {
      $locationProvider.html5Mode(true);

      $mdThemingProvider.theme('smt');
      $mdThemingProvider.setDefaultTheme('smt');
      $mdIconProvider.defaultFontSet('material-icons');
    }
  ]);
