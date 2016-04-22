import angular from 'angular';
import router from 'angular-ui-router';

import ProductsPageCtrl from './products-page.controller';
import ProductsFormCtrl from './form/products-form.controller';

const routes = ['$stateProvider', ($stateProvider) => {
  $stateProvider

    // Main view
    .state('products', {
      url: '/products',
      template: '<ws-products-page></ws-products-page>'
    });

}];

const component = {
  template: require('./products-page.component.html'),
  controller: ProductsPageCtrl,
  controllerAs: 'productsPageCtrl'
};

export default angular.module('app.products', [ 'ngMessages', router ])
  .config(routes)
  .component('wsProductsPage', component)
