// create the module and name it iAngelsTeaShop
// also include ngRoute for all our routing needs
/*global angular */
angular.module('iAngelsTeaShop')
    // .config(['$routeProvider','$mdIconProvider', function ($routeProvider,$mdIconProvider) {
        .config(['$routeProvider', function ($routeProvider) {
        // "use strict";
        
        // $mdIconProvider
        //     .iconSet('social', 'img/icons/sets/social-icons.svg', 24)
        //     .iconSet('device', 'img/icons/sets/device-icons.svg', 24)
        //     .iconSet('communication', 'img/icons/sets/communication-icons.svg', 24)
        //     .defaultIconSet('img/icons/sets/core-icons.svg', 24);
        //
        $routeProvider
            .when('/', {
                templateUrl: 'app/components/home/home.html',
                controller: 'homeController',
            })
            
            .when('/products', {
                templateUrl: 'app/components/products/products.html',
                controller: 'productsController',
            })
            
            .when('/cart', {
                templateUrl: 'app/components/cart/cart.html',
                controller: 'cartController',
            });
    }]);

