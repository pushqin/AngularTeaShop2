/**
 * Created by pua on 9/16/2016.
 */

//Mock
angular.module('iAngelsTeaShop')
    .run(['$httpBackend','config', function($httpBackend,config) {
        if(!config.mock){
            return;
        }
        var type = {
            type:{
                id:"id",
                name:"type-name",
                description:"type-description",
           }
        }
        
        var images = {images:[
            {imgSrc:"imgSrc1"},
            {imgSrc:"imgSrc2"},
            {imgSrc:"imgSrc3"},
        ]}
    
    
        var tea1 = {
            id:"id",
            price:"price",
            description:"description",
            type,
            name:"jopa",
            originCountry:"originCountry",
            steepingType:"steepingType",
            dosing:"dosing",
            waterTemperature:"waterTemperature",
            images
        };
        var tea2 = {
            id:"id",
            price:"price",
            description:"description",
            type,
            name:"Hren",
            originCountry:"originCountry",
            steepingType:"steepingType",
            dosing:"dosing",
            waterTemperature:"waterTemperature",
            images
        };
        
        var teas = {teas:[tea1,tea2,tea1,tea1,tea1,tea1]}

        // returns the current list of phones
        $httpBackend.whenGET('/topteas').respond(teas.teas);
        $httpBackend.whenGET('/allTeas').respond(teas.teas);
    
        
        // Requests for templates are handled by the real
        $httpBackend.whenGET('app/components/home/home.html').passThrough();
        $httpBackend.whenGET('app/components/products/products.html').passThrough();
        $httpBackend.whenGET('app/components/cart/cart.html').passThrough();
        $httpBackend.whenGET('app/components/teaCard/teaCard.html').passThrough();
        $httpBackend.whenGET('app/components/productsFilterList/productsFilterList.html').passThrough();
        $httpBackend.whenGET('app/components/directives/grid/grid.html').passThrough();
        $httpBackend.whenGET('app/components/directives/gridTile/gridTile.html').passThrough();
        $httpBackend.whenGET('icons/avatar-icons.svg').passThrough();
      
    }]);