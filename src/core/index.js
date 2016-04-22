import angular from 'angular';

// Add new shared services here...
import ProductsService from './services/products/products.service';
import BasketService from './services/basket/basket.service';

// Initialize shared services
const services = angular.module('app.core', [])
  .service('ProductsService', ProductsService)
  .service('BasketService', BasketService);

export default services;
