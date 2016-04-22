/**
 * Basket service
 *
 * @class BasketService
 */
export default class BasketService {

  constructor() {
    this.basket = [];
  }

  add(item) {
    this.basket.push(item);
  }

  remove(index) {
    this.basket.splice(index, 1);
  }

  total() {
    let total = 0;

    this.basket.forEach((item) => {
      total += item.price;
    });

    return total;
  }
}
