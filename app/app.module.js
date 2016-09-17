// create the module and name it iAngelsTeaShop
// also include ngRoute for all our routing needs
/*global angular */
 var iAngelsTeaShop = angular.module('iAngelsTeaShop', ['ngRoute','ui.bootstrap','ngMaterial','ngMockE2E','ngMessages']);

// create the controller and inject Angular's $scope
iAngelsTeaShop.controller('gridListDemoCtrl', function($scope) {
        
        this.tiles = buildGridModel({
            icon : "avatar:svg-",
            title: "Svg-",
            background: ""
        });
        
        function buildGridModel(tileTmpl){
            var it, results = [ ];
            
            for (var j=0; j<11; j++) {
                
                it = angular.extend({},tileTmpl);
                it.icon  = it.icon + (j+1);
                it.title = it.title + (j+1);
                it.span  = { row : 1, col : 1 };
                
                switch(j+1) {
                    case 1:
                        it.background = "red";
                        it.span.row = it.span.col = 2;
                        break;
                    
                    case 2: it.background = "green";         break;
                    case 3: it.background = "darkBlue";      break;
                    case 4:
                        it.background = "blue";
                        it.span.col = 2;
                        break;
                    
                    case 5:
                        it.background = "yellow";
                        it.span.row = it.span.col = 2;
                        break;
                    
                    case 6: it.background = "pink";          break;
                    case 7: it.background = "darkBlue";      break;
                    case 8: it.background = "purple";        break;
                    case 9: it.background = "deepBlue";      break;
                    case 10: it.background = "lightPurple";  break;
                    case 11: it.background = "yellow";       break;
                }
                
                results.push(it);
            }
            return results;
        }
    })
    .config( function( $mdIconProvider ){
        $mdIconProvider.iconSet("avatar", 'icons/avatar-icons.svg', 128);
    });



// create the controller and inject Angular's $scope
iAngelsTeaShop.controller('homeController', ['$scope','$http','$q',function ($scope,$http, $q) {
    // "use strict";
    // create a message to display in our view
    $scope.message = 'Everyone come and see how good I look!';
    
    $scope.topTeas = [];
    $scope.newPhone = {
        name: ''
    };
    
    $scope.getTopTeas = function() {
        $http.get('/topteas').then(function(response) {
            $scope.topTeas = response.data;
        });
    };
    
    $scope.addPhone = function(phone) {
        $http.post('/phones', phone).then(function() {
            $scope.newPhone = {name: ''};
            return $scope.getPhones();
        });
    };
    
    $scope.getTopTeas();
    
}]);

iAngelsTeaShop.controller('productsController', ['$scope',function ($scope) {
    // "use strict";
    $scope.colors=[ 'Red', 'Orange', 'Yellow',
        'Green', 'Blue', 'Indigo', 'Violet' ];
    $scope.message = 'Look! I am an about page.';
    $scope.callRestService= function(removeFilter) {
        
        if(removeFilter){
            
        }
        //TODO: show all result if removeFilter is true
        $http({method: 'GET', url: '/someUrl'}).
        success(function(data, status, headers, config) {
            $scope.results.push(data);  //retrieve results and add to existing results
        })
    }
}]);

iAngelsTeaShop.controller('cartController',['$scope', function ($scope) {
    // "use strict";
   ;
    
    $scope.people = [
        { name: 'TEa1', img: 'assets/images/teaDefault.jpg', newMessage: true },
        { name: 'TEa2', img: 'assets/images/teaDefault.jpg', newMessage: false },
        { name: 'TEa3', img: 'assets/images/teaDefault.jpg', newMessage: false }
    ];
    
    $scope.goToPerson = function(person, event) {
        console.log("show details")
    };
    
    $scope.navigateTo = function(to, event) {
        $mdDialog.show(
            $mdDialog.alert()
                .title('Navigating')
                .textContent('Imagine being taken to ' + to)
                .ariaLabel('Navigation demo')
                .ok('Neat!')
                .targetEvent(event)
        );
    };
    
    $scope.minus = function(event) {
        console.log("minus")
    };
    
    $scope.plus = function(event) {
        console.log("plus")
    };
}]);

