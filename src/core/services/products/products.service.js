/**
 * Products service
 *
 * @class ProductsService
 */
export default class ProductsService {

  constructor($http) {
    this.api = $http;
    this.url = 'http://private-7363b-smtangularjs.apiary-mock.com/products';
  }

  create(data) {
    // return here request type POST
  }

  read() {
    // return here request type GET
  }

  update(id, data) {
    // return here request type UPDATE
  }

  delete(id) {
    // return here request type DELETE
  }
}

// Angular DI
ProductsService.$inject = ['$http'];
