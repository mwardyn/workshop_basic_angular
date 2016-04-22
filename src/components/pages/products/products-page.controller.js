class ProductsPageCtrl {

  /**
   * Constructor for ProductsPageCtrl
   *
   * @params {ProductsService} productsService
   * @params {$mdToast} $mdToast
   */
  constructor(productsService, basketService) {
    this.products = [];
    this.basket = basketService;

    // Init search query
    this.search = {
      name: ''
    };

    // Use productsService to read data from backend
    // and render it as a list
    productsService.read().then((resp) => {
      this.products = resp.data;
    });
  }

  buy(product) {
    this.basket.add(product);
  }

}

ProductsPageCtrl.$inject = ['ProductsService', 'BasketService'];

export default ProductsPageCtrl;