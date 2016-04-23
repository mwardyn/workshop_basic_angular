export default class HomePageCtrl {

  /**
   * Constructor for HomePageCtrl
   */
  constructor($scope, $state, $window) {
    this.title = 'SMT workshop';
    this.description = 'This paragraph was filled by angular.';

    // sample injects into ES6 class
    console.log($scope);
    console.log($state);
    console.log($window);
  }

}

// Angular DI
HomePageCtrl.$inject = ['$scope', '$state', '$window'];
