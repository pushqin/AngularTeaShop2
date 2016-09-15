/**
 * Created by pua on 9/15/2016.
 */
angular.module("iAngelsTeaShop")
    .directive("searchFilterDirective", function() {
     
        return function (scope, element, attrs) {

            element.bind("keydown", function (event) {
                var removeFilter = false;
                if(event.currentTarget.value.length > 2){
                    removeFilter = false;
       
                    //event.preventDefault();
                }
                else{
                    removeFilter = true;
                }
                //TODO: Figure out hopw to pass param to controller.
                scope.$apply(function (){
                    scope.$eval(attrs.searchFilterDirective(removeFilter) );
                });
            });
        };
});

//