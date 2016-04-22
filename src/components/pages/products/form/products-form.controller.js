class ProductsFormCtrl {

  /**
   * Constructor for ProductsFormCtrl
   *
   * @params {ProductsService} productsService
   */
  constructor(productsService) {
    this.productsService = productsService;
  }

  /**
   * Add products to our collection
   *
   * TODO: fill this method:
   *  - it should send post request to a specific endpoint
   */
  add() {
    alert('Add button clicked!');
  }

}

ProductsFormCtrl.$inject = ['ProductsService'];

export default ProductsFormCtrl;