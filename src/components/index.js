import angular from 'angular';

// Layout
import AppComponent from './app/app.component';

// Pages
import HomePage from './pages/home/home-page.component';
import AboutPage from './pages/about/about-page.component';
import ProductsPage from './pages/products/products-page.component';

// Other components
import HeaderComponent from './header/header.component';
import MenuComponent from './menu/menu.component';

// Initialize components with states
const components = angular.module('workshop.components', [
  AppComponent.name,
  HomePage.name,
  ProductsPage.name,
  AboutPage.name,
  HeaderComponent.name,
  MenuComponent.name
]);

export default components;
